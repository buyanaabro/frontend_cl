'use client';

import React from "react";
<<<<<<< HEAD
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
=======
import { useEffect } from "react";
import { Chart } from "chart.js";

>>>>>>> refs/remotes/origin/main

export default function Home() {
  useEffect(() => {

  })
  return (
<<<<<<< HEAD
    <>
      <Sidebar />
      <div className="flex flex-row">
        <div className="w-72 h-screen bg-white"></div>
        <div className="w-full h-screen bg-white text-black"></div>
      </div>
    </>
  );
=======
    <div className="w-screen h-screen bg-white">
      <LineChart />
      <PieChart />
    </div>
  )
>>>>>>> refs/remotes/origin/main
}

const LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById('myLineChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, {
          data: [70, 90, 44, 60, 83, 90, 100],
          label: "Accepted",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        }, {
          data: [10, 21, 60, 44, 17, 21, 17],
          label: "Pending",
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: false,
        }, {
          data: [6, 3, 2, 2, 7, 0, 16],
          label: "Rejected",
          borderColor: "#c45850",
          backgroundColor: "#d78f89",
          fill: false,
        }
        ]
      },
    });
  }, [])
  return (
    <>
      <div className="w-2/3 h-auto flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myLineChart'></canvas>
        </div>
      </div>
    </>
  )
}

const PieChart = () => {
  useEffect(() => {
    let ctx = document.getElementById('myPieChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ]
        }]
      },
    });
  }, [])
  return (
    <>
      <div>
      <div className="w-2/3 h-auto flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myPieChart'></canvas>
        </div>
      </div>
      </div>
    </>
  )
}