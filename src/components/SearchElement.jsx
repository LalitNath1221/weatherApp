import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CitySuggession from './CitySuggession';
import { fetchCityList } from '../apis/fetchCity';
import fetchWeatherData from '../apis/featchData';
import { useDispatch } from 'react-redux';
import { setData, setLoading } from '../Reducers/weatherData';

const SearchElement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions]= useState([]);
  const dispatch = useDispatch();

  const loadCityList = useCallback(async () => {
    try {
      const cityList = await fetchCityList();
      setSuggestions(cityList.map(city => city.name));
    } catch (error) {
      console.error('Error loading city list:', error);
    }
  }, []);

  useEffect(() => {
    loadCityList();
  }, [loadCityList]);

  const handleSuggestionClick = useCallback((city) => {
    setSearchQuery(city);
    setShowSuggestions(false);
    fetchSearchedWeather(city);
  }, []);

  const debounceTimeout = useRef(null);

  const handleSearchChange = useCallback((e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Clear previous debounce timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a new debounce timeout
    debounceTimeout.current = setTimeout(() => {
      const filter = suggestions.filter((city) =>
        city.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filter);
      setShowSuggestions(true);
    }, 300); // 300ms debounce time
  }, [suggestions]);

  const handleSubmit = useCallback(() => {
    fetchSearchedWeather(searchQuery);
  }, [searchQuery]);

  const fetchSearchedWeather = async (location) => {
    dispatch(setLoading({ isLoading: true }));
    try {
      const res = await fetchWeatherData(location);
      dispatch(setData({ data: res }));
      dispatch(setLoading({ isLoading: false }));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      dispatch(setLoading({ isLoading: false }));
    }
  };

  return (
    <div className="relative w-full border rounded-lg">
      <div className="relative h-10 inline-block w-[90%]">
        <input
          type="search"
          className="peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="Current"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-[10%] inline-block select-none rounded text-center align-middle font-sans text-base font-bold uppercase text-blue-gray-900 transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      {showSuggestions && suggestions.length > 0 && (
        <CitySuggession
          suggestions={filteredSuggestions}
          handleSuggestionClick={handleSuggestionClick}
        />
      )}
    </div>
  );
};

export default SearchElement;
