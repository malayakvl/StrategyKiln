import React from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  React.useEffect(() => {
    const DATA_COUNT = 12;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
    // const labels = Utils.months({count: 7});
    // const data = {
    //   labels: labels,
    //   datasets: [
    //     {
    //       label: 'Dataset 1',
    //       data: Utils.numbers(NUMBER_CFG),
    //       borderColor: Utils.CHART_COLORS.red,
    //       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    //     },
    //     {
    //       label: 'Dataset 2',
    //       data: Utils.numbers(NUMBER_CFG),
    //       borderColor: Utils.CHART_COLORS.blue,
    //       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    //     }
    //   ]
    // };
    const configBar = {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "PDF Download",
            data: [65, 78, 66, 44, 56, 67, 75],
            borderColor: "#ffb1c1",
            backgroundColor: "#ffb1c1",
          },
          {
            label: "Powerpoint Download",
            data: [25, 48, 26, 14, 96, 27, 5],
            borderColor: "#ffe2a0",
            backgroundColor: "#ffe2a0",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
    const config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#ffb1c1",
            borderColor: "#fff",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    // @ts-ignore
    // const ctx = document.getElementById("line-chart").getContext("2d");
    const ctx = document.getElementById("line-chart");
    // @ts-ignore
    // window.myLine = new Chart(ctx, config);
    window.myLine = new Chart(ctx, configBar);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              {/*<h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">*/}
              {/*  Users Requests For Download*/}
              {/*</h6>*/}
              <h2 className="text-white text-xl font-semibold">
                Users Requests For Download
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative bg-white">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
