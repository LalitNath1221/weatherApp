import React, { useEffect } from 'react'
import CurrentData from './CurrentData'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../Reducers/weatherData'
import fetchWeatherData from '../apis/featchData'

const Layout = () => {
  const data = useSelector(state => state.data);
  
  const dispatch = useDispatch()
  useEffect(() => {
    // Fetch initial weather data for current location
    ;(async ()=>{
      const res  = await fetchWeatherData();
    dispatch(setData({data:res}));
    console.log(res)
    })()
    console.log("stste",data)
  }, [fetchWeatherData]);

  
  return (
    <div className='w-full md:h-screen bg-gradient p-8 '>
        <div className='w-full mx-auto sm:w-5/6 md:w-full grid grid-cols-1 md:grid-cols-12 gap-6'>
            <div className='md:col-span-4 bg-white rounded-lg p-2'>
                <SideBar/>
            </div>
            <div className='md:col-span-8 bg-white rounded-lg overflow-hidden'>
                <MainContainer/>
            </div>
        </div>
    </div>
  )
}

export default Layout