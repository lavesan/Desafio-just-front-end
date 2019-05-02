import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "./lineGraphic.scss";
import { lineChartLabels } from "../../services/user";

export class LineGraphic extends Component {
  render() {
    const data = (canvas: any) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);
      return {
        backgroundColor: gradient,
        labels: ["31/12", "14/01", "28/01"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["#076E95"],
            pointBackgroundColor: "#076E95",
            pointBorderColor: "#FFF",
            pointBorderWidth: 1,
            pointRadius: 4,
            borderWidth: 3
          }
        ]
      };
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              // beginAtZero: true
            }
          }
        ]
      }
    };

    return <Line data={data} options={options} />;
  }
}
