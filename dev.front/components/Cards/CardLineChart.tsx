import React, { useEffect } from "react";
import Chart from "chart.js";
import { useSelector } from "react-redux";
import { statisticDataSelector } from "../../redux/userRequests/selectors";

export default function CardLineChart() {
  const statisticData = useSelector(statisticDataSelector);

  useEffect(() => {
    if (statisticData) {
      const statPdf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const statPpt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      if (statisticData.data.result.statsPerYearPdf.length) {
        statisticData.data.result.statsPerYearPdf.forEach((data: any) => {
          statPdf[Number(data.monthstr) - 1] = Number(data.totaldownload);
        });
      }
      if (statisticData.data.result.statsPerYearPpt.length) {
        statisticData.data.result.statsPerYearPpt.forEach((data: any) => {
          statPpt[Number(data.monthstr) - 1] = Number(data.totaldownload);
        });
      }
      if (statisticData.data.result.statsPerYearPdf) {
        const configBar = {
          type: "bar",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "November",
              "Desember",
            ],
            datasets: [
              {
                label: "PDF Download",
                data: statPdf,
                borderColor: "#ffb1c1",
                backgroundColor: "#ffb1c1",
              },
              {
                label: "Powerpoint Download",
                data: statPpt,
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
        // @ts-ignore
        const ctx = document.getElementById("line-chart");
        // @ts-ignore
        window.myLine = new Chart(ctx, configBar);
      }
    }
  }, [statisticData]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
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
