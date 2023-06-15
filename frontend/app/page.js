'use client';

import React from "react";
import { useEffect } from "react";
import { Chart } from "chart.js";


export default function Home() {
  let cards = [
    {
      bg: "primary"
    },
    {
      bg: "secondary"
    },
    {
      bg: "warning"
    },
    {
      bg: "error"
    }
  ];

  return (
    <div className="bg-white">
      <LineChart />
      <PieChart />
      <div>
        {cards.map((row, index) => (
          <div className="w-40 h-32" style={{backgroundColor: row}} key={index}>
          </div>
        ))}
      </div>
    </div>
  )
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