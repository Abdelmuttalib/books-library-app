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
import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
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
  genre_id: number;
  genres: string[];
};

const Header = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  return (
    <header className="sticky top-0 flex flex-1 h-14 items-center justify-between max-w-7xl px-8 mx-auto bg-white/30 backdrop-blur-md z-[999]">
      <Link href="/">
        <h2 className="text-lg font-semibold">Books Library</h2>
      </Link>

      {user && (
        <div>
          <button
            type="button"
            className="bg-primary text-white outline-none border-none py-1 px-2 rounded font-medium cursor-pointer"
            onClick={async () => await supabaseClient.auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default function Gallery() {
  const genres = [
    "Action & Adventure",
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Horror",
    "Historical Fiction",
    "Classic",
    "Poetry",
    "History",
  ];
  const publications = [
    2004, 2003, 2003, 2002, 2001, 2000, 1999, 1998, 1996, 1995, 1994, 1991,
    1988, 1979,
  ];
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const [books, setBooks] = useState<BookT[]>([]);
  const [search, setSearch] = useState<string>("");
  const [authType, setAuthType] = useState<"sign-in" | "sign-up">("sign-in");
  const [filterOne, setFilterOne] = useState({
    type: "",
    value: "",
  });
  const [filterTwo, setFilterTwo] = useState({
    type: "",
    value: "",
  });
  const [filterThree, setFilterThree] = useState({
    type: "",
    value: "",
  });

  useEffect(() => {
    const get = async () => {
      const { data }: { data: BookT[] | null } = await supabaseClient
        .from("books")
        .select("*")
        .order("id")
        .filter(filterOne.type, "eq", filterOne.value)
        .filter(filterTwo.type, "eq", filterTwo.value)
        .filter(filterThree.type, "eq", filterThree.value);

      if (data) setBooks(data);
    };

    get();
  }, [filterOne, filterTwo, filterThree]);

  return (
    <>
      <Head>
        <title>Books Library</title>
      </Head>

      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {user && (
          <div className="flex flex-col ">
            <div>
              <div>
                <label htmlFor="search"></label>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full bg-gray-100 rounded mb-5 py-4 px-4 text-lg shadow-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                  placeholder="Search for book title, author, or year published"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {/* Filters */}
              <div className="flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Genre:</span>
                  <select
                    name="genre"
                    id="genre"
                    className="block w-fit bg-gray-100 hover:bg-gray-200 ease-linear duration-150 cursor-pointer rounded py-2 px-4 text-lg shadow-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                    value={filterOne.value}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setFilterOne({
                          type: "",
                          value: "",
                        });
                      } else {
                        setFilterOne({
                          type: "genre_id",
                          value: e.target.value,
                        });
                      }
                    }}
                  >
                    <option key={1} value="">
                      select...
                    </option>
                    {genres.map((genre, indx) => (
                      <option key={genre} value={indx + 1}>
                        {genre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Publication Year:</span>
                  <select
                    name="publication"
                    id="publication"
                    className="block w-fit bg-gray-100 hover:bg-gray-200 ease-linear duration-150 cursor-pointer rounded py-2 px-4 text-lg shadow-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                    value={filterTwo.value}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setFilterTwo({
                          type: "",
                          value: "",
                        });
                      } else {
                        setFilterTwo({
                          type: "publication",
                          value: e.target.value,
                        });
                      }
                    }}
                  >
                    <option key={1} value="">
                      select...
                    </option>
                    {publications.map((p, indx) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Availability:</span>
                  <select
                    name="genre"
                    id="genre"
                    className="block w-fit bg-gray-100 hover:bg-gray-200 ease-linear duration-150 cursor-pointer rounded py-2 px-4 text-lg shadow-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                    value={filterThree.value}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setFilterThree({
                          type: "",
                          value: "",
                        });
                      } else {
                        setFilterThree({
                          type: "is_available",
                          value: e.target.value,
                        });
                      }
                    }}
                  >
                    <option key={1} value="">
                      select...
                    </option>
                    <option key={2} value="true">
                      Available
                    </option>
                    <option key={3} value="false">
                      Not Available
                    </option>
                  </select>
                </div>
              </div>

              {/* b */}
              {filterOne.value || filterTwo.value || filterThree.value ? (
                <div className="mt-6 flex gap-2 items-center">
                  <p className="text-gray-600">Filters: </p>

                  {filterOne.value && (
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800"
                    >
                      {genres[parseInt(filterOne.value) - 1]}
                      <XCircleIcon
                        onClick={() =>
                          setFilterOne({
                            type: "",
                            value: "",
                          })
                        }
                        className="w-5 text-gray-600 ml-3 hover:text-gray-700"
                      />
                    </button>
                  )}

                  {filterTwo.value && (
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800"
                    >
                      {filterTwo.value}
                      <XCircleIcon
                        onClick={() =>
                          setFilterTwo({
                            type: "",
                            value: "",
                          })
                        }
                        className="w-5 text-gray-600 ml-3 hover:text-gray-700"
                      />
                    </button>
                  )}

                  {filterThree.value && (
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800"
                    >
                      {filterThree.value ? "Available" : "Not Available"}
                      <XCircleIcon
                        onClick={() =>
                          setFilterThree({
                            type: "",
                            value: "",
                          })
                        }
                        className="w-5 text-gray-600 ml-3 hover:text-gray-700"
                      />
                    </button>
                  )}
                </div>
              ) : null}
              {/* ./Filters */}
              <div className="mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {!search &&
                  books &&
                  books.map((book) => (
                    <Book key={book.id} {...book} genres={genres} />
                  ))}

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
                    .map((book) => (
                      <Book key={book.id} {...book} genres={genres} />
                    ))}
              </div>
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
  genre_id,
  genres,
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
        <p className="mt-1 text-sm text-gray-500 font-medium">
          {publication} by {author}
        </p>

        <span className="text-sm block underline text-gray-400">
          Genre: {genres[genre_id - 1]}
        </span>

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
