import React, { Component } from 'react'
import './pieChart.scss'
// @ts-ignore
import ReactSvgPieChart from 'react-svg-piechart'
 
const data = [
  {title: "Rede", value: 100, color: "#22594e"},
  {title: "Cielo", value: 60, color: "#2f7d6d"},
  {title: "Stone", value: 10, color: "#1eb828"},
  {title: "Justa", value: 120, color: "#076E95"},
]

export class PieChart extends Component {
    render() {
        return (
            <div className='pie-chart'>
                <ReactSvgPieChart data={data} expandOnHover />
            </div>
        )
    }
}