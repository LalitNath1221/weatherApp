import axios from 'axios';
import { setData } from '../Reducers/weatherData';
import conf from '../../conf';
import { useDispatch } from 'react-redux';

async function fetchWeatherData(location = null){
        let url;
        let data;

        // Use current location if location parameter is null
        if (location === null) {
            try {
                const position = await getCurrentPosition();
                const { latitude, longitude } = position.coords;
                url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=metric&key=${conf.weatherKey}&iconSet=icons2&contentType=json`;
            } catch (error) {
                console.error('Error getting current location:', error);
                url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?unitGroup=metric&key=${conf.weatherKey}&iconSet=icons2&contentType=json`;
                
            }
        } else {
            url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${conf.weatherKey}&iconSet=icons2&contentType=json`;
        }

        try {
            const response = await axios.get(url);
            data = response.data;
            //console.log(data)
            return data;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return null;
        }
};

// Helper function to get current position
const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

export default fetchWeatherData;


