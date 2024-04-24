import React from "react";
import weatherIcons from "../iconmap";
import { useSelector } from "react-redux";

const WeeklyData = () => {
  const data = useSelector((state) => state.data);
  const weeklyData = data?.days.slice(1, 7);

  const getDayName = (dateString) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];;
    const date = new Date(dateString); // Create a new Date object from the date string
    const dayName = days[date.getDay()]; // Get the name of the day based on the day number
    
    return dayName; // Return the day name
  };

  return (
    <div className="w-full font-sans">
      <div>
        <div>
          <div className="inline-block relative">
            <p className="text-xl font-semibold capitalize">week</p>
            <div className="block absolute bottom-0 left-0 w-full h-[3px] rounded-full bg-gray-500"></div>
          </div>
        </div>
        <div className="pt-4">
          <div className="grid md:grid-cols-6 gap-2">
            {weeklyData.map((item, index) => (
              <>
                <div
                  key={index}
                  className="hidden md:block bg-white rounded-lg p-2"
                >
                  <p className="text-base font-semibold text-center">{getDayName(item?.datetime)}</p>
                  <div className="p-2 flex justify-center items-center aspect-video">
                    <img
                      className="h-full"
                      src={weatherIcons[item?.icon]}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="flex pt-4">
                      <p className="text-lg md:text-xl font-semibold leading-none">
                      {item?.temp}
                      </p>
                      <p className="text-base leading-tight font-semibold">o</p>
                      <p className="text-base leading-tight font-semibold">C</p>
                    </div>
                  </div>
                </div>
                <div
                  key={index}
                  className="md:hidden flex justify-between rounded-lg pt-1"
                >
                  <p className="text-base font-semibold">{getDayName(item?.datetime)}</p>
                  <div className="p-2 flex justify-center items-center">
                    <img
                      className="h-full"
                      src={weatherIcons[item?.icon]}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="flex">
                      <p className="text-base font-semibold leading-none">{item?.temp}</p>
                      <p className="text-sm leading-[1px] font-semibold">o</p>
                      <p className="text-sm leading-none font-semibold">C</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyData;