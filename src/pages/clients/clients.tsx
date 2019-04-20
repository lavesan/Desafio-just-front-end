import React, { Component, Fragment } from 'react'
import './clients.scss'

import { Card } from '../../components/card/card'
import { LineGraphic } from '../../components/line-graphic/lineGraphic'
import { PieChart } from '../../components/pie-chart/pieChart'
import { Table } from '../../components/table/table'

export class Clients extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row custom-mt-30'>
                    <div className='col-8 pl-0'>
                        <Card header='Volume de transações'>   
                            <LineGraphic />
                        </Card>
                    </div>
                    <div className='col-4 pr-0'>
                        <Card header='Base de clientes'>   
                            <PieChart />
                        </Card>
                    </div>
                </div>
                <Card className='row custom-mt-30' header='Detalhes dos clientes'>
                    <Table />
                </Card>
            </div>
        )
    }
}