import React from "react";
import { Progress } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import weatherIcons from "../iconmap";

const TodaysHighlight = () => {
  const data = useSelector((state) => state.data);
  return (
    <div className="py-4">
      <div>
        <div>
          <p className="text-xl font-semibold">Today's Highlight</p>
        </div>
        <div className="p-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-lg col-span-1 p-4 bg-white">
              <p className="text-md text-gray-700 font-medium">UV Index</p>
              <div className="py-4">
                <p className="text-xl md:text-3xl font-semibold text-center">
                  {data?.days[0]?.uvindex}
                </p>
              </div>
              <div className="">
                <Progress
                  value={data?.days[0]?.uvindex * 10}
                  size="sm"
                  color="blue"
                />
              </div>
            </div>
            <div className="rounded-lg col-span-1 p-4 bg-white">
              <p className="text-md text-gray-700 font-medium capitalize">
                Wind Speed
              </p>
              <div className="p-2 flex justify-center items-center h-16 mx-auto aspect-square">
                <img
                  className="h-full w-full"
                  src={weatherIcons["wind-speed"]}
                  alt=""
                />
              </div>
              <div className="py-4 pt-1">
                <p className="text-xl md:text-3xl font-semibold text-center">
                  {data?.days[0]?.windspeed}km/h
                </p>
              </div>
              <div className=""></div>
            </div>
            <div className="rounded-lg col-span-2 md:col-span-1 p-4 bg-white">
              <p className="text-md text-gray-700 font-medium capitalize">
                Sunrise & Sunset
              </p>
              <div className="py-4">
                <div className="flex items-center gap-2">
                  <div className="w-10">
                    <img src={weatherIcons["sun-set"]} alt="" />
                  </div>
                  <p className="text-xl font-semibold">
                    {data?.days[0]?.sunrise.substring(0, 5)}
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <div className="w-10">
                    <img src={weatherIcons["sun-set"]} alt="" />
                  </div>
                  <p className="text-xl font-semibold">
                    {data?.days[0]?.sunset.substring(0, 5)}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg col-span-1 p-4 bg-white">
              <p className="text-md text-gray-700 font-medium capitalize">
                Humidity
              </p>
              <div className="p-2 flex justify-center items-center h-16 mx-auto aspect-square">
                <img
                  className="h-full w-full"
                  src={weatherIcons["humidity"]}
                  alt=""
                />
              </div>
              <div className="py-4 pt-1">
                <p className="text-xl md:text-3xl font-semibold text-center">
                  {data?.days[0]?.uvindex}%
                </p>
              </div>
              <div className=""></div>
            </div>
            <div className="rounded-lg col-span-1 p-4 bg-white">
              <p className="text-md text-gray-700 font-medium capitalize">
                Visibility
              </p>
              <div className="p-2 flex justify-center items-center h-16 mx-auto aspect-square">
                <img
                  className="h-full w-full"
                  src={weatherIcons["visibility"]}
                  alt=""
                />
              </div>
              <div className="py-4 pt-1">
                <p className="text-xl md:text-3xl font-semibold text-center">
                  {data?.days[0]?.visibility}km
                </p>
              </div>
              <div className=""></div>
            </div>
            <div className="rounded-lg col-span-2 md:col-span-1 p-4 bg-white">
              <p className="text-md text-gray-700 font-medium capitalize">
                Max & Min Temp.
              </p>
              <div className="py-4">
                <div className="flex items-center gap-2">
                  <div className="w-10">
                    <img src={weatherIcons["max-temp"]} alt="" />
                  </div>
                  <div className="flex">
                    <p className="text-lg md:text-xl font-semibold leading-none">
                      {data?.days[0]?.tempmax}
                    </p>
                    <p className="text-base leading-tight font-semibold">o</p>
                    <p className="text-base leading-none font-semibold">C</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10">
                    <img src={weatherIcons["min-temp"]} alt="" />
                  </div>
                  <div className="flex">
                    <p className="text-lg md:text-xl font-semibold leading-none">
                      {data?.days[0]?.tempmin}
                    </p>
                    <p className="text-base leading-tight font-semibold">o</p>
                    <p className="text-base leading-none font-semibold">C</p>
                  </div>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysHighlight;
