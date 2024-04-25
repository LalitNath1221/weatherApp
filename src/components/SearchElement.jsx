import React, { useEffect, useState } from 'react'
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

  const dispatch = useDispatch();


  useEffect(() => {
    const loadCityList = async () => {
      try {
        const cityList = await fetchCityList();
        setSuggestions(cityList.map(city => city.name));
      } catch (error) {
        console.error('Error loading city list:', error);
      }
    };

    loadCityList();
  }, []);


  const handleSuggestionClick = (city) => {
    setSearchQuery(city);
    setShowSuggestions(false);
    fetchSearchedWeather(city);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Filter cities based on the query
    const filteredSuggestions = suggestions.filter((city) =>
      city.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleSubmit = () => {
    fetchSearchedWeather(searchQuery);
  };

  const fetchSearchedWeather = (location) => {
    dispatch(setLoading({ isLoading: true }));
    ;(async ()=>{
      const res  = await fetchWeatherData(location);
    dispatch(setData({data:res}));
    dispatch(setLoading({ isLoading: false }));
    //console.log(res)
    })()
  };

  return (
    <div class="relative w-full border rounded-lg">
      <div class="relative h-10 inline-block w-[90%]">
        <input type="search"
          class="peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all disabled:border-0 disabled:bg-blue-gray-50"
          placeholder={"Current"} 
          value={searchQuery}
          onChange={handleSearchChange}
          />
      </div>
      <button
      onClick={handleSubmit}
        class="w-[10%] inline-block select-none rounded text-center align-middle font-sans text-base font-bold uppercase text-blue-gray-900 transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      {showSuggestions && suggestions.length > 0 && (
          <CitySuggession
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        )}

    </div>
  )
}

export default SearchElement