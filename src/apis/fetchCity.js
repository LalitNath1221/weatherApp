import axios from 'axios';

const CITY_LIST_API_URL = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json';

export const fetchCityList = async () => {
  try {
    const response = await axios.get(CITY_LIST_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching city list:', error);
    throw error;
  }
};