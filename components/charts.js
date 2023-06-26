import { useEffect } from "react";
import Chart from "chart.js";

export const LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("myLineChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "1-р сар",
          "2-р сар",
          "3-р сар",
          "4-р сар",
          "5-р сар",
          "6-р сар",
          "7-р сар",
          "8-р сар",
          "9-р сар",
          "10-р сар",
          "11-р сар",
          "12-р сар",
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
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.yLabel;
            },
          },
        },
      },
    });
  }, []);
  return (
    <>
      <div className="w-2/3 h-2/3 flex mx-auto mt-20 flex-col">
        <div className="w-full h-10 flex justify-start items-start">
          <div className="w-40 h-8 bg-red-300 mt-10 ml-10"></div>
        </div>
        <div className="border pt-0 rounded-md  w-full h-fit my-auto  shadow-xl">
          <canvas id="myLineChart"></canvas>
        </div>
      </div>
    </>
  );
};
export const PieChart = () => {
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
        <div className="w-2/3 h-auto flex mx-auto mt-20">
          <div className="border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl">
            <canvas id="myPieChart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export const Card1LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("Card1LineChart").getContext("2d");
    let Card1Chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "6 days ago",
          "5 days ago",
          "4 days ago",
          "3 days ago",
          "2 days ago",
          "Yesterday",
          "Today",
        ],
        datasets: [
          {
            label: "",
            data: [5, 7, 9, 13, 12, 10, 11],
            backgroundColor: false,
            borderColor: "#FFFFFF90",
            borderWidth: "1.5",
            fill: false,
            pointBorderColor: "#FFFFFF90",
            pointBorderWidth: 1.5,
            pointBackgroundColor: "#321FDB",
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              trick: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);
  return (
    <>
      <div className="w-full h-1/2 flex justify-center items-end ">
        <canvas height={100} id="Card1LineChart"></canvas>
      </div>
    </>
  );
};
export const Card2LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("Card2LineChart").getContext("2d");
    let Card2Chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "6 days ago",
          "5 days ago",
          "4 days ago",
          "3 days ago",
          "2 days ago",
          "Yesterday",
          "Today",
        ],
        datasets: [
          {
            label: "",
            data: [5, 7, 9, 13, 12, 10, 11],
            backgroundColor: false,
            borderColor: "#FFFFFF90",
            borderWidth: "1.5",
            fill: false,
            pointBorderColor: "#FFFFFF90",
            pointBorderWidth: 1.5,
            pointBackgroundColor: "#3499FE",
            lineTension: 0,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              trick: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);
  return (
    <>
      <div className="w-full h-1/2 flex justify-center items-end ">
        <canvas height={100} id="Card2LineChart"></canvas>
      </div>
    </>
  );
};
export const Card3LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("Card3LineChart").getContext("2d");
    let Card3Chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "6 days ago",
          "5 days ago",
          "4 days ago",
          "3 days ago",
          "2 days ago",
          "Yesterday",
          "Today",
        ],
        datasets: [
          {
            label: "",
            data: [5, 7, 9, 13, 12, 10, 11],
            backgroundColor: "#FFFFFF50",
            borderColor: "#FFFFFF90",
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              trick: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);
  return (
    <>
      <div className="w-full h-1/2 flex justify-center items-end ">
        <canvas height={100} id="Card3LineChart"></canvas>
      </div>
    </>
  );
};
export const Card4LineChart = () => {
  useEffect(() => {
    let ctx = document.getElementById("Card4LineChart").getContext("2d");
    let Card4Chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "6 days ago",
          "5 days ago",
          "4 days ago",
          "3 days ago",
          "2 days ago",
          "Yesterday",
          "Today",
        ],
        datasets: [
          {
            label: "",
            data: [5, 7, 9, 13, 12, 10, 11],
            backgroundColor: "#FFFFFF80",
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              trick: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);
  return (
    <>
      <div className="w-full h-1/2 flex justify-center items-end ">
        <canvas height={100} id="Card4LineChart"></canvas>
      </div>
    </>
  );
};
