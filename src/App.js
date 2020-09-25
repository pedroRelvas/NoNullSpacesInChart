import React, { useEffect } from "react";
import "./styles.css";
import Chart from "chart.js";

export default function App() {
  const labels = ["Fase 1", "Fase 2", "Fase 3", "Fase 4", "Fase 5"];

  const dataone = [1, 2, 5, 4, 2];
  const datatwo = [2, 2, 3, 4, 5];
  const datathree = [2, 3, 3, 2, 4];
  const datafour = [null, null, null, null, null];
  const datafive = [null, null, null, null, null];

  useEffect(() => {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Prova1",
            data: dataone,
            backgroundColor: "rgba(243, 194, 0, .3)",
            borderWidth: 1,
            borderColor: "#F3C200",
            hoverBackgroundColor: "#F3C200",
            hoverBorderColor: "#7d6505",
            categoryPercentage: 0.5,
            barPercentage: 1.0
          },
          {
            label: "Prova2",
            data: datatwo,
            backgroundColor: "rgba(42, 180, 192, .3)",
            borderWidth: 1,
            borderColor: "#166269",
            hoverBackgroundColor: "#2ab4c0",
            hoverBorderColor: "#2ab4c0"
          },
          {
            label: "Prova3",
            data: datathree,
            backgroundColor: "rgba(76, 135, 185, .4)",
            borderWidth: 1,
            borderColor: "#2a587f",
            hoverBackgroundColor: "#4c87b9",
            hoverBorderColor: "#2a587f"
          },
          {
            label: "Prova4",
            data: datafour,
            backgroundColor: "rgba(243, 82, 58, .3)",
            borderWidth: 1,
            borderColor: "#f3523a",
            hoverBackgroundColor: "#f56954",
            hoverBorderColor: "#f3523a"
          },
          {
            label: "Prova5",
            data: datafive,
            backgroundColor: "rgba(228, 58, 69, .4)",
            borderWidth: 1,
            borderColor: "#b32a33",
            hoverBackgroundColor: "#e43a45",
            hoverBorderColor: "#b32a33"
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              display: false,
              offset: true,
              gridLines: {
                offsetGridLines: true
              }
            }
          ]
        }
      }
    });
  });

  return (
    <div className="App">
      <canvas id="myChart" height="90" width="90"></canvas>
    </div>
  );
}

/* while (data[0] == null) {
      data.shift(); // remove leading null
      labels.shift(); // remove corresponding label
    } */

/*   while (datanull.filter((x) => x == null )) {
      datanull.pop(); // remove tailing null
    }
    */
/* const filtered = datanull.filter(function (el) {
      return el != null;
    }); */

/*  const filtered = datanull.filter((el) => {
      return el != null;
    });
 */
