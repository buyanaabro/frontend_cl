import Image from "next/image";
import { Inter } from "next/font/google";
import { Main } from "next/document";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function ovoolgo() {
  const [addnew, setAddnew] = useState();
  function clickaddNew() {
    if (addnew == false) {
      setAddnew(true);
    } else {
      setAddnew(false);
    }
  }
  return (
    <>
      <Header className="" />
      <Sidebar className="z-50" />
      <div className="w-screen h-screen flex justify-center items-center bg-white">
        <div className="w-5/6 h-5/6 bg-white flex flex-col mt-28">
          <div className="w-full h-12 flex justify-start items-center">
            <div className="w-1/2 h-fullflex justify-start items-center">
              <div className="w-48 bg-white h-8 ml-28 rounded-full border-main border-2 drop-shadow-lg flex justify-start items-center z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#015EB4"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input className="w-40 h-7 rounded-full text-gray-500 outline-0 pl-2"></input>
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-end items-center">
              <button
                onClick={clickaddNew}
                className="w-32 bg-main h-8 mr-12 rounded-full drop-shadow-lg font-bold text-white flex justify-center items-center cursor-pointer hover:bg-accent2 transition-all "
              >
                Шинэ
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            addnew
              ? "w-1/2 h-1/2 bg-accent3 opacity-50 fixed rounded-xl drop-shadow-lg backdrop-blur-md flex flex-col justify-start items-center"
              : "w-1/2 h-1/2 bg-accent3 opacity-50 fixed rounded-xl drop-shadow-lg backdrop-blur-md hidden"
          }
        >
          <div className="w-full h-8 flex justify-end items-center">
            <button
              onClick={clickaddNew}
              className="w-8 h-8 flex items-center justify-center mr-1 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
