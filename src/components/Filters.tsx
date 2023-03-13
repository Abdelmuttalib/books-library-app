import React, { FC } from "react";
import {
  genres,
  getBookGenreByGenreId,
  publications,
} from "../data/books-data";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { FiltersT } from "./Books";

interface FiltersProps {
  filters: FiltersT;
  setFilters: React.Dispatch<React.SetStateAction<FiltersT>>;
}

const Filters: FC<FiltersProps> = ({ filters, setFilters }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-5">
        <div className="flex items-center gap-2">
          <span className="font-medium">Genre:</span>
          <select
            name="genre"
            id="genre"
            className="block w-fit bg-gray-100 hover:bg-gray-200 ease-linear duration-150 cursor-pointer rounded py-2 px-4 text-lg shadow-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
            value={filters.genre}
            onChange={(e) => {
              if (e.target.value === "") {
                setFilters((currentFilters) => ({
                  ...currentFilters,
                  genre: "",
                }));
              } else {
                setFilters((currentFilters) => ({
                  ...currentFilters,
                  genre: e.target.value,
                }));
              }
            }}
          >
            <option key={1} value="">
              --select--
            </option>
            {genres.map(({ genre }, indx) => (
              <option key={genre} value={indx + 2}>
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
            value={filters.publication}
            onChange={(e) => {
              if (e.target.value === "") {
                setFilters((currentFilters) => ({
                  ...currentFilters,
                  publication: "",
                }));
              } else {
                setFilters((currentFilters) => ({
                  ...currentFilters,
                  publication: e.target.value,
                }));
              }
            }}
          >
            <option key={1} value="">
              --select--
            </option>
            {publications.map((publication, indx) => (
              <option key={indx + 2} value={publication}>
                {publication}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Availability:</span>
          <select
            name="is_available"
            id="genre"
            className="block w-fit bg-gray-100 hover:bg-gray-200 ease-linear duration-150 cursor-pointer rounded py-2 px-4 text-lg shadow-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
            value={filters.is_available}
            onChange={(e) => {
              if (e.target.value === "") {
                setFilters((currentFilters) => ({
                  ...currentFilters,
                  is_available: "",
                }));
              } else {
                setFilters((currentFilters) => ({
                  ...currentFilters,
                  is_available: e.target.value,
                }));
              }
            }}
          >
            <option key={1} value="">
              -- select --
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

      {/* Filter Tags */}
      {filters.genre || filters.publication || filters.is_available ? (
        <div className="mt-6 flex gap-2 items-center">
          <p className="text-gray-600">Filters: </p>

          {filters.genre && (
            <button
              type="button"
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800"
            >
              {getBookGenreByGenreId(filters.genre)}
              <XCircleIcon
                onClick={() =>
                  setFilters((currentFilters) => ({
                    ...currentFilters,
                    genre: "",
                  }))
                }
                className="w-5 text-gray-600 ml-3 hover:text-gray-700"
              />
            </button>
          )}

          {filters.publication && (
            <button
              type="button"
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800"
            >
              {filters.publication}
              <XCircleIcon
                onClick={() =>
                  setFilters((currentFilters) => ({
                    ...currentFilters,
                    publication: "",
                  }))
                }
                className="w-5 text-gray-600 ml-3 hover:text-gray-700"
              />
            </button>
          )}

          {filters.is_available && (
            <button
              type="button"
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800"
            >
              {filters.is_available === "true" ? "Available" : "Not Available"}
              <XCircleIcon
                onClick={() =>
                  setFilters((currentFilters) => ({
                    ...currentFilters,
                    is_available: "",
                  }))
                }
                className="w-5 text-gray-600 ml-3 hover:text-gray-700"
              />
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Filters;
