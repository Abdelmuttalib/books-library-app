import React from "react";
import { BookT, getBookGenreByGenreId } from "../data/books-data";
import cn from "classnames";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";

const BlurImage = ({
  bookName,
  bookImageSrc,
}: {
  bookName: string;
  bookImageSrc: string;
}) => {
  return (
    <div className="group">
      <div>
        <img
          src={bookImageSrc}
          alt={bookName}
          className={cn(
            "group-hover:opacity-90 duration-700 ease-in-out object-contain"
          )}
        />
      </div>
    </div>
  );
};

const Book = ({
  book_title,
  author,
  publication,
  image_url_l,
  is_available,
  genre_id,
}: BookT) => {
  return (
    <div className="h-fit">
      <div>
        <BlurImage
          bookName={`${book_title} By ${author}`}
          bookImageSrc={image_url_l}
        />
      </div>
      <div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-base font-medium text-gray-900">{book_title}</h3>
        </div>
        <p className="mt-1 text-sm text-gray-500 font-medium">
          {publication} by {author}
        </p>

        <span className="text-sm block underline text-gray-400">
          Genre: {getBookGenreByGenreId(genre_id)}
        </span>

        <div className="mt-2">
          {is_available === "true" ? (
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

export default Book;
