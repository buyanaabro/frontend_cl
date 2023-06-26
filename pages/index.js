"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Chart } from "chart.js";
import { flushSync } from "react-dom";
import { LineChart, PieChart } from "@/components/charts";
import { Cards } from "@/components/cardLine";
export default function Home() {
  let cards = ["#321FDB", "#3499FE", "#F9B114", "#E55353"];

  return (
    <div>
      <Header className="" />
      <Sidebar className="" />
      <div className="w-screen h-auto pt-36 bg-white/50">
        <div className="px-16 flex flex-col gap-6">
          <div className="flex gap-6 justify-center items-center">
            <Cards />
          </div>
          <LineChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
}
