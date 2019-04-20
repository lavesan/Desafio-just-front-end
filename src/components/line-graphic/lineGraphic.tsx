import React, { Component } from 'react';
import './lineGraphic.scss'

const options = {
    type: 'line',
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 'Agosto', 'Setembro', 'Outubro', 'Novembro'],
      datasets: [{
        //   label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(105, 0, 132, .2)',
          ],
          borderColor: [
            'rgba(200, 99, 132, .7)',
          ],
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true
    }
  }

export class LineGraphic extends Component {

    charRef: any;

    render() {
        return (
            <div>Gráfico de linha</div>
            // <canvas id="lineChart" ref={ref => this.charRef = ref}>
            //     {() => {
            //         var ctx = this.charRef.getContext('2d');
            //         // var myChart = new Chart(ctx, options);
                  
            //     }}
            // </canvas>
        );
    }
}