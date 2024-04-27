import React, { useEffect, useState } from 'react'
import CurrentData from './CurrentData'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { useDispatch, useSelector } from 'react-redux'
import { setData, setLoading } from '../Reducers/weatherData'
import fetchWeatherData from '../apis/featchData'
import { Spinner } from '@material-tailwind/react'

const Layout = () => {
  const { data, isLoading } = useSelector((state) => state.weatherData);
  
  const dispatch = useDispatch()
  useEffect(() => {
    // Fetch initial weather data for current location
    dispatch(setLoading({ isLoading: true }));
    ;(async ()=>{
      const res  = await fetchWeatherData();
    dispatch(setData({data:res}));
    dispatch(setLoading({ isLoading: false }));
    console.log(res)
    })()
    console.log("stste",data)
  }, [fetchWeatherData]);

  
  return (
    <div className='relative w-full lg:h-screen bg-gradient p-2 md:p-8 '>
      {isLoading?(
        <div className='absolute w-screen h-screen bg-gradient top-0 left-0 flex justify-center items-center'>
        <Spinner className="h-8 w-8" color="indigo" />
        </div>
      ):(
        <div className='w-full h-full mx-auto sm:w-5/6 md:w-3/5 lg:w-full grid grid-cols-1 lg:grid-cols-12 gap-6'>
            <div className='lg:col-span-4 bg-white rounded-lg p-2'>
                <SideBar/>
            </div>
            <div className='lg:col-span-8 bg-white rounded-lg overflow-hidden'>
                <MainContainer/>
            </div>
        </div>
      )}
        
    </div>
  )
}

export default Layout