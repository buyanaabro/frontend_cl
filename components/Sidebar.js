import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ovoolgo from "@/pages/ovoolgo";

function Sidebar() {
  const router = useRouter();
  const [expand, setExpand] = useState();
  const clickExpand = () => {
    if (expand == false) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  };
  return (
    <>
      <div
        className={
          expand
            ? " group w-[64px] h-screen bg-[#3c4b64] fixed top-0 flex items-start text-gray-300 font-normal transition-all duration-500 scrollbar-none"
            : " group w-[256px] h-screen bg-[#3c4b64] fixed top-0 flex items-start text-gray-300 font-normal transition-all duration-500 scrollbar-none"
        }
      >
        <div className="overflow-auto w-full flex justify-start items-center flex-col">
          <div className="w-full h-16 flex justify-center items-center bg-sidebar">
            <Image
              className={expand ? "hidden" : ""}
              src={"/image001.png"}
              width={120}
              height={40}
            />
          </div>
          <div className="w-full h-full bg-[#3c4b64] overflow-auto pt-5 no-scrollbar">
            <button className="w-full h-12 flex items-center hover:bg-white/10 px-5 hover:text-stone-200 space-x-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[20px] h-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <div className={expand ? "hidden" : ""}>Dashboard</div>
            </button>
            <div className="h-16 w-full px-3 flex items-end">
              <div className={expand ? "hidden" : "mb-3"}>theme</div>
            </div>
            <button className="w-full h-12 flex items-center hover:bg-white/10 px-5 hover:text-hovertext space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[20px] h-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <div className={expand ? "hidden" : ""}>Colors</div>
            </button>
            <button className="w-full h-12 flex items-center hover:bg-white/10 px-5 hover:text-hovertext space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[20px] h-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <div className={expand ? "hidden" : ""}>Typography</div>
            </button>
            <div className="h-16 w-full  px-3 flex items-end">
              <div className={expand ? "hidden" : "mb-3"}>components</div>
            </div>
            <button className="w-full h-12 flex items-center hover:bg-white/10 px-5 hover:text-hovertext space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[20px] h-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <div className={expand ? "hidden" : ""}>Buttons</div>
            </button>
            <button className="w-full h-12 flex items-center hover:bg-white/10 px-5 hover:text-hovertext space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[20px] h-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <div className={expand ? "hidden" : ""}>Dashboard</div>
            </button>
            <button className="w-full h-12 flex items-center hover:bg-white/10 px-5 hover:text-hovertext space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[20px] h-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <div className={expand ? "hidden" : ""}>Dashboard</div>
            </button>
            <button
              onClick={() => router.push("/ovoolgo")}
              className="w-full h-12 flex items-center hover:bg-white/10 px-5 hover:text-hovertext space-x-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-[20px] h-[20px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                />
              </svg>

              <div className={expand ? "hidden" : ""}>Ovoolgo</div>
            </button>
            <div className="w-full h-80"></div>
            <button
              onClick={clickExpand}
              className={
                expand
                  ? "w-full h-12 flex justify-end items-center absolute inset-x-0 bottom-0 z-50  mb-4 pr-5 bg-[#303952] hover:bg-[#282E41] transition-all duration-500"
                  : "w-full h-12 flex justify-end items-center absolute inset-x-0 bottom-0 z-50  mb-4 pr-4 bg-[#303952] hover:bg-[#282E41] transition-all duration-500"
              }
            >
              <svg
                className={
                  expand
                    ? "w-5 h-5 tansition-all  duration-500 rotate-180"
                    : "w-5 h-5 transition all duration-500 "
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#CFCFCF"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
