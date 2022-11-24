import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

const Header = () => {
  const user = useUser();
  const { push } = useRouter();
  const supabaseClient = useSupabaseClient();
  const links = [
    {
      href: "/",
      label: "Home",
    },
  ];

  return (
    <header className="sticky top-0 flex flex-1 h-14 items-center justify-between max-w-2xl mx-auto bg-red-300">
      <Link href="/">
        <h4>Books Library</h4>
      </Link>

      <nav className="flex gap-8 items-center">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-gray-800 h-fit no-underline"
          >
            {label}
          </Link>
        ))}

        {/* Sign In  */}
        {!user && (
          <button
            type="button"
            onClick={() => push("/auth")}
            className="bg-primary text-white outline-none border-none px-4 py-2 rounded cursor-pointer font-medium text-base inline"
          >
            Sign In
          </button>
        )}

        {/* Sign Out */}
        {user && (
          <button
            type="button"
            className="bg-primary text-white outline-none border-none px-4 py-2 rounded cursor-pointer font-medium text-base inline"
            onClick={async () => await supabaseClient.auth.signOut()}
          >
            Sign Out
          </button>
        )}
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex py-8 border-t border-[#eaeaea] justify-center items-center">
      <p className="text-gray-500 text-sm">2022</p>
    </footer>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="h-screen py-16 flex flex-1 flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
