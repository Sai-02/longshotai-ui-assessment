import React from "react";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faCartFlatbed,
  faChartLine,
  faCircle,
  faCircleChevronLeft,
  faGears,
  faHeart,
  faLayerGroup,
  faMap,
  faNewspaper,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import semrushIcon from "../../assets/semrushIcon.webp";
const Sidebar = () => {
  return (
    <div className="h-full shadow-lg flex flex-col gap-2 overflow-auto">
      <div className="flex flex-col gap-2">
        <div className=" p-2">
          <img src={logo} alt="" className="w-[12rem]" />
        </div>
        <div className="p-3 bg-gray-200 cursor-pointer">
          <p className="text-gray-500">Project</p>
          <h3 className="font-semibold">My First Project</h3>
        </div>
        <div className="px-3 flex flex-col gap-2 text-gray-500">
          <p className="cursor-pointer flex items-center  gap-3">
            <FontAwesomeIcon icon={faChartLine} className="h-4" />
            Dashboard
          </p>
          <p className="cursor-pointer flex items-center  gap-3">
            <FontAwesomeIcon icon={faBowlFood} className="h-4" />
            Recipies
          </p>
          <hr />
        </div>
        <div className="px-3 flex flex-col gap-4 text-gray-500">
          <p className="cursor-pointer flex items-center  gap-3">
            <FontAwesomeIcon icon={faNewspaper} className="h-4" />
            Blog
          </p>
        </div>
        <div className="px-3 flex flex-col gap-2 text-gray-500">
          <p className="cursor-pointer flex items-center  gap-3">
            <FontAwesomeIcon icon={faGears} className="h-4" />
            Templates
          </p>
          <div className="px-2 flex flex-col gap-2">
            <p className="cursor-pointer flex items-center  gap-3">
              <FontAwesomeIcon icon={faHeart} className="h-4 text-red-500" />
              Favourites
            </p>
            <p className="cursor-pointer flex items-center  gap-3">
              <FontAwesomeIcon icon={faCircle} className="h-4" />
              Custom Templates
            </p>
          </div>
        </div>
        <div className="px-3 flex flex-col gap-2 text-gray-500">
          <p className="cursor-pointer flex items-center  gap-3">
            <FontAwesomeIcon icon={faLayerGroup} className="h-4" />
            Integrations
          </p>
        </div>{" "}
        <div className="px-3 flex flex-col gap-4 text-gray-500">
          <p className="cursor-pointer flex items-center  gap-3">
            <img src={semrushIcon} alt="" className="w-4 h-4" />
            Semrush
          </p>
        </div>
      </div>
      <div className="grow flex flex-col-reverse p-2 gap-2">
        <div className=" cursor-pointer text-gray-700 flex items-center gap-2 p-2">
          <FontAwesomeIcon icon={faCircleChevronLeft} />
          <span className="">Collapse</span>
        </div>
        <div className="rounded bg-blue-100 p-3">
          <div className="flex gap-2">
            <div className="rounded-full bg-purple-500 text-white p-1 w-8 h-8 grid place-items-center">
              KS
            </div>
            <div className="">
              <p className="">kritikalpa.saha</p>
              <p className="">Credits used : 3.2.32</p>
            </div>
          </div>
          <div className="p-2">
            <button className="rounded bg-green-600 text-white font-semibold w-full p-2 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faCartFlatbed} />
              Change Plan
            </button>
          </div>
          <div className="p-2 flex text-gray-700 items-center gap-2">
            <FontAwesomeIcon icon={faMap} />
            Product Roadmap
          </div>
          <div className="p-2 flex text-gray-700 items-center gap-2">
            <FontAwesomeIcon icon={faWifi} />
            What's New?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
