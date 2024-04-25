import React from "react";
import SearchElement from "./SearchElement";
import { useSelector } from "react-redux";
import weatherIcons from "../iconmap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { getDayName } from "./WeeklyData";

const SideBar = () => {
  const {data} = useSelector((state) => state.weatherData);
  const getLocation = (str="") => {
    const parts = str.split(",");

    // Check if both parts are valid numbers
    if (
      parts.length === 2 &&
      !isNaN(parts[0].trim()) &&
      !isNaN(parts[1].trim())
    ) {
      return "Current";
    } else {
      return str;
    }
  };

  return (
    <div className="p-4 font-sans">
      <div>
        <div>
          <SearchElement />
        </div>
        <div className="pt-5">
          <div className="flex text-lg font-medium text-gray-700">
            <FontAwesomeIcon
              icon={faLocationDot}
              className={"leading-none w-5 h-5 text-blue-600"}
            />
            <p className="">{getLocation(data?.resolvedAddress)}</p>
          </div>
        </div>
        <div className="pt-5">
          <div className="p-2 flex justify-center items-center w-full aspect-video">
            <img
              className="h-full"
              src={weatherIcons[data?.currentConditions?.icon]}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <div className="flex ">
              <p className="text-4xl md:text-6xl font-semibold">
                {data?.currentConditions?.temp}
              </p>
              <p className="text-lg md:text-xl leading-none font-semibold">o</p>
              <p className="text-lg md:text-2xl leading-none font-semibold">
                C
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg text-center">
              <span className="font-semibold">{getDayName(data?.days[0]?.datetime)}</span>{" "}
              <span>{data?.currentConditions?.datetime.substring(0, 5)}</span>
            </p>
          </div>
        </div>
        <div className="pt-12 ">
          <div className="border-t-2">
            <div className="flex items-center pt-4 gap-2">
              <div className="w-8 h-8">
                <img className="w-full h-full" src={weatherIcons["condition"]} alt="" />
              </div>
              <p className="text-lg text-center ">
                {" "}
                <span className="font-semibold">Condition :</span>{" "}
                {data?.currentConditions?.conditions}
              </p>
            </div>
            <div className="flex items-center pt-4 gap-2">
              <div className="w-8 h-8">
                <img className="w-full h-full" src={weatherIcons["humidity"]} alt="" />
              </div>
              <p className="text-lg text-center">
                <span className="font-semibold">Humidity :</span>{" "}
                <span>{data?.currentConditions?.humidity}</span>
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideBar;
