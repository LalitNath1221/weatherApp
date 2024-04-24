import React from "react";
import { Progress } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const TodaysHighlight = () => {
  const data = useSelector((state) => state.data);
  return (
    <div className="py-4">
      <div>
        <div>
          <p className="text-xl font-semibold">Today's Highlight</p>
        </div>
        <div className="p-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg col-span-1 p-4 bg-white">
              <p className="text-md text-gray-700 font-medium">UV Index</p>
              <div className="py-4">
                <p className="text-3xl font-semibold text-center">
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
              <div className="py-4">
                <p className="text-3xl font-semibold text-center">
                  {data?.days[0]?.windspeed}
                </p>
              </div>
              <div className=""></div>
            </div>
            <div className="rounded-lg col-span-1 p-4 bg-white">
              <p className="text-md text-gray-700 font-medium capitalize">
                Sunrise & Sunset
              </p>
              <div className="py-4">
                <div className="">
                  <p className="text-xl font-semibold">
                    {data?.days[0]?.sunrise.substring(0, 5)}
                  </p>
                </div>
                <div className="pt-1">
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
              <div className="py-4">
                <p className="text-3xl font-semibold text-center">
                  {data?.days[0]?.uvindex}%
                </p>
              </div>
              <div className=""></div>
            </div>
            <div className="rounded-lg col-span-1 p-4 bg-white">
              <p className="text-xl text-gray-700 font-medium capitalize">
                Visibility
              </p>
              <div className="py-4">
                <p className="text-3xl font-semibold text-center">
                  {data?.days[0]?.visibility}kn
                </p>
              </div>
              <div className=""></div>
            </div>
            <div className="rounded-lg col-span-1 p-4 bg-white">
              <p className="text-xl text-gray-700 font-medium capitalize">
                Max & Min Temp.
              </p>
              <div className="py-4">
                <div className="flex">
                  <p className="text-lg md:text-xl font-semibold leading-none">
                    {data?.days[0]?.tempmax}
                  </p>
                  <p className="text-base leading-tight font-semibold">o</p>
                  <p className="text-base leading-none font-semibold">C</p>
                </div>
                <div className="flex">
                  <p className="text-lg md:text-xl font-semibold leading-none">
                    {data?.days[0]?.tempmin}
                  </p>
                  <p className="text-base leading-tight font-semibold">o</p>
                  <p className="text-base leading-none font-semibold">C</p>
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
