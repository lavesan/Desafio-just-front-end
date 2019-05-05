import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { lineChartValues, lineChartDates } from "../../services/user";
import "./lineGraphic.scss";

export class LineGraphic extends Component {
  render() {
    const data = {
      backgroundColor: '#FFF',
      labels: lineChartDates(),
      datasets: [
        {
          label: "R$",
          data: lineChartValues(),
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["#076E95"],
          pointBackgroundColor: "#076E95",
          pointBorderColor: "#FFF",
          pointBorderWidth: 1,
          pointRadius: 4,
          borderWidth: 3
        }
      ]
    }

    const options = {
      responsive: true, 
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 7,
              callback: function(label: any): string {
                return `R$ ${label / 100}`;
              }
            }
          }
        ]
      }
    };

    return <div className="line-chart"><Line data={data} options={options} /></div>;
  }
}
