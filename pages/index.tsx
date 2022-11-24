import { useSessionContext } from "@supabase/auth-helpers-react";
import { useForm } from "react-hook-form";

type SignInFieldsT = {
  email: string;
  password: string;
};

const SignUp = ({
  setAuthType,
}: {
  setAuthType: Dispatch<SetStateAction<"sign-in" | "sign-up">>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFieldsT>();
  const { supabaseClient } = useSessionContext();

  const onSignUp = async (data: SignInFieldsT) => {
    const { email, password } = data;

    const { data: signUpData, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password,
    });
  };

  return (
    <div className="max-w-lg mx-auto shadow px-10 py-8 rounded">
      <h1 className="text-center mb-8 text-3xl font-semibold">Sign Up</h1>
      <form onSubmit={handleSubmit(onSignUp)} className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            className={`input ${errors.email && "input-error"}`}
            {...register("email", { required: true })}
            type="text"
            placeholder="your email address"
          />
          {errors.email && (
            <p className="input-error-message">
              * kindly enter your email address
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            id="password"
            className={`input ${errors.password && "input-error"}`}
            {...register("password", { required: true })}
            type="password"
            placeholder="your password"
          />
          {errors.password && (
            <p className="input-error-message">* kindly enter your password</p>
          )}
        </div>

        <button type="submit" className="button">
          Sign Up
        </button>

        <p className="text-gray-600">
          Already have an account?{" "}
          <span
            className="text-primary font-medium text-lg cursor-pointer hover:text-opacity-80"
            onClick={() => setAuthType("sign-in")}
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

const SignIn = ({
  setAuthType,
}: {
  setAuthType: Dispatch<SetStateAction<"sign-in" | "sign-up">>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFieldsT>();
  const { supabaseClient } = useSessionContext();

  console.log(supabaseClient);
  const onSignIn = async (data: SignInFieldsT) => {
    const { email, password } = data;

    const { data: signInData, error } =
      await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      });
  };

  return (
    <div className="max-w-lg mx-auto shadow px-10 py-8 rounded">
      <h1 className="text-center mb-8 text-3xl font-semibold">Sign In</h1>
      <form onSubmit={handleSubmit(onSignIn)} className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            className={`input ${errors.email && "input-error"}`}
            {...register("email", { required: true })}
            type="text"
            placeholder="your email address"
          />
          {errors.email && (
            <p className="input-error-message">
              * kindly enter your email address
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            id="password"
            className={`input ${errors.password && "input-error"}`}
            {...register("password", { required: true })}
            type="password"
            placeholder="your password"
          />
          {errors.password && (
            <p className="input-error-message">* kindly enter your password</p>
          )}
        </div>

        <button type="submit" className="button">
          Sign In
        </button>

        <p className="text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-primary font-medium text-lg cursor-pointer hover:text-opacity-80"
            onClick={() => setAuthType("sign-up")}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

import Head from "next/head";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import cn from "classnames";
import { useUser } from "@supabase/auth-helpers-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";

type BookT = {
  id: string;
  book_title: string;
  author: string;
  publication: number;
  publisher: string;
  image_url_s: string;
  image_url_m: string;
  image_url_l: string;
  is_available: boolean;
};

const Header = () => {
  const supabaseClient = useSupabaseClient();
  return (
    <header className="sticky top-0 flex flex-1 h-14 items-center justify-between max-w-7xl px-8 mx-auto bg-white/30 backdrop-blur-md z-[999]">
      <Link href="/">
        <h2 className="text-lg font-semibold">Books Library</h2>
      </Link>

      <div>
        <button
          type="button"
          className="bg-primary text-white outline-none border-none py-1 px-2 rounded font-medium cursor-pointer"
          onClick={async () => await supabaseClient.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default function Gallery() {
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const [books, setBooks] = useState<BookT[]>([]);
  const [search, setSearch] = useState<string>("");
  const [authType, setAuthType] = useState<"sign-in" | "sign-up">("sign-in");

  useEffect(() => {
    const get = async () => {
      const { data }: { data: BookT[] | null } = await supabaseClient
        .from("books")
        .select("*")
        .order("id");

      if (data) setBooks(data);
    };

    get();
  }, []);

  return (
    <>
      <Head>
        <title>Image Gallery</title>
      </Head>

      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {user && (
          <div>
            <div>
              <label htmlFor="search"></label>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full bg-gray-100 rounded mb-10 py-4 px-4 text-lg shadow-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                placeholder="Search for book title, author, or year published"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {!search &&
                books &&
                books.map((book) => <Book key={book.id} {...book} />)}

              {search &&
                books &&
                books
                  .filter(
                    (book) =>
                      book.author
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      book.book_title
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      book.publication.toString().includes(search)
                  )
                  .map((book) => <Book key={book.id} {...book} />)}
            </div>
          </div>
        )}

        {!user && (
          <>
            {authType === "sign-in" && <SignIn setAuthType={setAuthType} />}
            {authType === "sign-up" && <SignUp setAuthType={setAuthType} />}
          </>
        )}
      </div>
    </>
  );
}

const Book = ({
  book_title,
  author,
  publication,
  image_url_l,
  is_available,
}: BookT) => {
  return (
    <div className="h-fit">
      <div>
        <BlurImage bookImageSrc={image_url_l} />
      </div>
      <div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-base font-medium text-gray-900">{book_title}</h3>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          {publication} by {author}
        </p>

        <div className="mt-2">
          {is_available ? (
            <span className="inline-flex text-green-600 text-sm">
              <CheckCircleIcon className="w-4" />
              Available
            </span>
          ) : (
            <span className="inline-flex text-red-600 text-sm">
              <XCircleIcon className="w-4" />
              Not Available
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const BlurImage = ({ bookImageSrc }: { bookImageSrc: string }) => {
  return (
    <div className="group">
      <div>
        <img
          src={bookImageSrc}
          alt=""
          // layout="fill"
          // objectFit="cover"
          className={cn(
            "group-hover:opacity-90 duration-700 ease-in-out object-contain"
          )}
          // onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};
