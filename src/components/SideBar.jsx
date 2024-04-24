import React from "react";
import SearchElement from "./SearchElement";
import { useSelector } from "react-redux";
import weatherIcons from "../iconmap";

const SideBar = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className="p-4 font-sans">
      <div>
        <div>
          <SearchElement />
        </div>
        <div className="pt-5">
          <div className="p-2 flex justify-center items-center w-full aspect-video">
            <img className="h-full" src={weatherIcons[data?.currentConditions?.icon]} alt="" />
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
              <span className="font-semibold">Monday</span> <span>{data?.currentConditions?.datetime.substring(0, 5)}</span>
            </p>
          </div>
        </div>
        <div className="pt-12 ">
          <div className="border-t-2">
          <div className="flex pt-4">
            <p className="text-lg text-center "> <span className="font-semibold">Condition :</span>{" "}{data?.currentConditions?.conditions}
            </p>
          </div>
            <div className="flex pt-4">
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
