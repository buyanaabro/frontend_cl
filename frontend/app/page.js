"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Chart } from "chart.js";


export default function Home() {
  let cards = ["#321FDB", "#3499FE", "#F9B114", "#E55353"]

  return (
    <>
      <Header />
      <Sidebar />
      <div className="w-screen h-auto pl-64 pt-36 bg-white/50">
        <div className="px-16 flex flex-col gap-6">
          <div className="flex gap-6">
            <Cards />
          </div>
          <LineChart />
          <PieChart />
        </div>
      </div>
    </>
  );
}

const LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("myLineChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133],
            label: "Applied",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
          },
          {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: "Accepted",
            borderColor: "#3cba9f",
            backgroundColor: "#71d1bd",
            fill: false,
          },
          {
            data: [10, 21, 60, 44, 17, 21, 17],
            label: "Pending",
            borderColor: "#ffa500",
            backgroundColor: "#ffc04d",
            fill: false,
          },
          {
            data: [6, 3, 2, 2, 7, 0, 16],
            label: "Rejected",
            borderColor: "#c45850",
            backgroundColor: "#d78f89",
            fill: false,
          },
        ],
      },
    });
  }, []);
  return (
    <>
      <div className="w-full h-auto flex mx-auto my-auto">
        <div className="border pt-0 rounded-md  w-full h-fit my-auto  shadow-xl">
          <canvas id="myLineChart"></canvas>
        </div>
      </div>
    </>
  );
};

const PieChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("myPieChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
    });
  }, []);
  return (
    <>
      <div>
        <div className="w-2/3 h-auto flex mx-auto my-auto">
          <div className="border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl">
            <canvas id="myPieChart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

const Cards = () => {
  return (
    <>
      <div className="w-[19.5rem] h-[10.5rem] bg-primary rounded-md flex flex-col text-white p-4">
        <div className="flex">
          <span className="font-semibold text-2xl">26k</span>
            <span className="flex items-center text-white/90">(12.4%
                <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <polygon fill="white" points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"></polygon>
                </svg>
            )</span>
        </div>
        <span className="text-white/90">Income</span>
        <Card1LineChart />
      </div>
      <div className="w-[19.5rem] h-[10.5rem] bg-secondary rounded-md flex flex-col text-white p-4">
        <div className="flex">
          <span className="font-semibold text-2xl">26k</span>
            <span className="flex items-center text-white/90">(12.4%
                <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <polygon fill="white" points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"></polygon>
                </svg>
            )</span>
        </div>
        <span className="text-white/90">Income</span>
      </div>
      <div className="w-[19.5rem] h-[10.5rem] bg-warning rounded-md flex flex-col text-white p-4">
        <div className="flex">
          <span className="font-semibold text-2xl">26k</span>
            <span className="flex items-center text-white/90">(12.4%
                <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <polygon fill="white" points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"></polygon>
                </svg>
            )</span>
        </div>
        <span className="text-white/90">Income</span>
      </div>
      <div className="w-[19.5rem] h-[10.5rem] bg-error rounded-md flex flex-col text-white p-4">
        <div className="flex">
          <span className="font-semibold text-2xl">26k</span>
            <span className="flex items-center text-white/90">(12.4%
                <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <polygon fill="white" points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"></polygon>
                </svg>
            )</span>
        </div>
        <span className="text-white/90">Income</span>
      </div>  
    </>
  )
}

const Card1LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("Card1LineChart").getContext("2d");
    let Card1Chart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "",
            data: [0, 80, 30, 20, 15],
            backgroundColor: "#ffffff",
            borderColor: "#ffffff",
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          ticks: {
            display: false,
          }
        },
        scales: {
          y: {
            legend: {
              display: none,
            },
            grid: {
              display: false,
            }
          }
        }
      }
    });
  }, []);
  return (
    <>
      <div className="w-full h-auto flex mx-auto my-auto">
          <canvas id="Card1LineChart"></canvas>
      </div>
    </>
  );
};