import React from "react";
import USA_SVG_ICON from "../../assets/usaFlagIcon.svg";
import CircularProgressWithLabel from "@mui/material/CircularProgress";
import Table from "./Table";
const Dashboard = ({ data }) => {
  return (
    <div className="h-screen py-2 px-4 bg-slate-50 flex flex-col gap-3 overflow-y-auto">
      <p className="flex gap-1">
        <span className="text-gray-500">Key Explorer &gt;</span>
        <span className="font-medium">Key Overview</span>
      </p>
      <div className="flex flex-col gap-1">
        <p className="flex gap-1">
          <span className="font-semibold text-xl">Keyword:</span>
          <span className="font-medium text-slate-400 text-lg">
            {data?.topic}
          </span>
        </p>
        <p className="text-slate-500 flex items-center gap-2">
          <span className="">Database : United States</span>
          <img src={USA_SVG_ICON} className="w-4 h-4" alt="" />
        </p>
      </div>
      <div className="border-t border-slate-300"></div>

      <div className="flex flex-col gap-2 justify-center mx-auto">
        <div className="flex gap-4 justify-center ">
          <div className="rounded bg-white border border-slate-100 p-4 flex flex-col gap-2">
            <div className="">
              <p className="text-sm text-gray-600">Volume</p>
              <p className="text-slate-500 font-medium flex gap-2 items-center">
                <span className="">480</span>
                <span className="">
                  <img src={USA_SVG_ICON} className="w-4 h-4" alt="" />
                </span>
              </p>
            </div>
            <div className="p-2">
              <div className="border-t border-slate-100"></div>
            </div>
            <div className="">
              <p className="text-sm text-gray-600">Volume</p>
              <div className="flex gap-4 items-center">
                <div className="">
                  <p className="">46 %</p>
                  <p className="">Possible</p>
                </div>
                <div className="">
                  <CircularProgressWithLabel variant="determinate" value={46} />
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-sm text-gray-500 max-w-[20rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                illo quas et culpa tempore fugiat tempora ipsam ratione fuga
                vitae.
              </p>
            </div>
          </div>
          <div className="grid gap-3 grid-rows-3">
            <div className="rounded bg-white px-3 py-2 w-[20rem] flex flex-col gap-2">
              <p className="text-sm">Intent</p>
              <span className="rounded-xl text-xs bg-yellow-200 py-1 px-2 text-yellow-800 w-min">
                Commercial
              </span>
            </div>
            <div className="rounded bg-white px-3 py-2 w-[20rem]">
              <p className="">Results</p>
              <p className="text-lg font-semibold">313M</p>
            </div>
            <div className="rounded bg-white px-3 py-2 w-[20rem] grid grid-cols-2">
              <div className="">
                <p className="text-sm text-gray-400">CPC</p>
                <p className="text-lg font-semibold">$ 0.12</p>
              </div>
              <div className="">
                <p className="text-sm text-gray-400">Com.</p>
                <p className="text-lg font-semibold">0.24</p>
              </div>
            </div>
          </div>
        </div>
        <Table data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
