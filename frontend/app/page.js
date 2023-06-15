import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-row">
        <div className="w-72 h-screen bg-white"></div>
        <div className="w-full h-screen bg-white text-black"></div>
      </div>
    </>
  );
}
