import Head from "next/head";
import Books from "../src/components/Books";

export default function Home() {
  return (
    <>
      <Head>
        <title>Books Library</title>
      </Head>

      {/* header */}
      <header className="sticky top-0 flex flex-1 h-14 items-center justify-between max-w-7xl px-8 mx-auto bg-white/30 backdrop-blur-md z-[999]">
        <h2 className="text-lg font-semibold">Books Library</h2>
      </header>
      {/* data */}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Books />
      </div>
    </>
  );
}
