import { useState } from "react";
import { BookT, booksData } from "../data/books-data";
import Filters from "./Filters";
import Book from "./Book";

export interface FiltersT {
  genre: string;
  publication: string;
  is_available: string;
}

const Books = () => {
  const books = booksData;
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FiltersT>({
    genre: "",
    publication: "",
    is_available: "",
  });

  const getFilteredBooks = (): BookT[] => {
    let filteredBooks = books;

    if (filters.genre) {
      filteredBooks = filteredBooks.filter(
        (book) => book.genre_id === filters.genre
      );
    }

    if (filters.publication) {
      filteredBooks = filteredBooks.filter(
        (book) => book.publication === filters.publication
      );
    }

    if (filters.is_available) {
      filteredBooks = filteredBooks.filter(
        (book) => book.is_available === filters.is_available
      );
    }

    return filteredBooks;
  };

  const filteredBooks = getFilteredBooks();

  const renderBooks = () => {
    if (
      search ||
      filters.genre ||
      filters.publication ||
      filters.is_available
    ) {
      return filteredBooks
        .filter(
          (book) =>
            book.author.toLowerCase().includes(search.toLowerCase()) ||
            book.book_title.toLowerCase().includes(search.toLowerCase()) ||
            book.publication.toString().includes(search)
        )
        .map((book) => <Book key={book.id} {...book} />);
    }

    return books.map((book) => <Book key={book.id} {...book} />);
  };

  return (
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
        <Filters filters={filters} setFilters={setFilters} />
        {/* ./Filters */}
        <div className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {renderBooks()}
        </div>
      </div>
    </div>
  );
};

export default Books;
