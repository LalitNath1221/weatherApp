import React from 'react'
import TodaysHighlight from './TodaysHighlight'
import WeeklyData from './WeeklyData'

const MainContainer = () => {
  return (
    <div className='p-8 bg-gray-200'>
        <div>
            <WeeklyData/>
        </div>
        <div>
            <TodaysHighlight/>
        </div>
        
    </div>
  )
}

export default MainContainer