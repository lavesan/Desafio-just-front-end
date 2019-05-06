import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import { pieChartValues, pieChartLabels } from "../../services/user";
import './pieChart.scss'

const legendBox = (statusArr: string[], valueArr: number[]): any => {
  const totalValue = valueArr.reduce((actualElem, nextElem) => actualElem + nextElem);
  const percentageArr = valueArr.map(elem => Number((elem * 100 / totalValue).toFixed(2)));

  return (
    <div className="legends-box">
      {statusArr.map((status, i) => legend(status, percentageArr[i]))}
    </div>
  );
}

const legend = (status: string, value: number): any => 
  (
    <div className="legend-box">
      <div className="legend-range" style={getColor(status)}></div>
      <p className="status">{status}</p>
      <p className="value">{`${value}%`}</p>
    </div>
  );

const getColor = (status: string) => {
  if (status === 'Ativo') return { backgroundColor: '#1bbee2' }
  else return { backgroundColor: '#f3f725' }
}

export class PieChart extends Component {
    render() {
        const data = {
          labels: pieChartLabels(),
          datasets: [
            {
              data: pieChartValues(),
              backgroundColor: ["#1bbee2", "#f3f725"]
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
                {legendBox(pieChartLabels(), pieChartValues())}
            </div>
        )
    }
}