import React from 'react'

const CitySuggession = ({ suggestions, handleSuggestionClick }) => {
    return (
      <ul className="absolute z-10 w-full bg-white border rounded-b-lg shadow-lg">
        {suggestions.map((city, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            onClick={() => handleSuggestionClick(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    );
  };

export default CitySuggession