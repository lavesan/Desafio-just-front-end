import React, { Component, Fragment } from 'react'
import './dashboard.scss'

import { Card } from '../../components/card/card'
import { Table } from '../../components/table/table'
import { LineGraphic } from '../../components/line-graphic/lineGraphic'

export class Dashboard extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row custom-mt-30 first-row">
                    <Card header='Volume de vendas aprovadas' className="w-100">
                        <LineGraphic />
                    </Card>
                </div>
                <div className="row custom-mt-30 first-row">
                    <Card header='Detalhes das vendas' className="w-100" noPadding>
                        <Table />
                    </Card>
                </div>
            </div>
        )
    }
}