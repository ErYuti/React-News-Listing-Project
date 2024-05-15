import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="sm:flex sm:items-center">
        <input
          className=" text-black w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-red-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:red-500 sm:text-sm"
          placeholder="Search for news..."
          type="text"
          value = { query }
          onChange = { handleInputChange }
          />
        <button
          type="submit"
          className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Search
          </button>
      </form>
    </div>
  )
}

export default SearchBar


