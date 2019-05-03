import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import { lineChartValues, lineChartDates } from "../../services/user";
import './pieChart.scss'

 
const data = [
  {title: "Rede", value: 100, color: "#22594e"},
  {title: "Cielo", value: 60, color: "#2f7d6d"},
  {title: "Stone", value: 10, color: "#1eb828"},
  {title: "Justa", value: 120, color: "#076E95"},
]

export class PieChart extends Component {
    render() {
        const data = {
            labels: [
              "Red", "Green", "Yellow", "Grey", "Dark Grey"
            ],
            datasets: [
              {
                data: [
                  40, 50, 80, 10, 20
                ],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"]
              }
            ]
          }
        
        const options = {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              display: false
            }
          };

        return (
            <div className='pie-chart'>
                <Pie data={data} options={options} />
            </div>
        )
    }
}