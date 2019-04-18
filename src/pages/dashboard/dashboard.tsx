import React, { Component, Fragment } from 'react'
import './dashboard.scss'

import { Card } from '../../components/card/card'
import { Table } from '../../components/table/table'
import { LineGraphic } from '../../components/line-graphic/lineGraphic'

export class Dashboard extends Component {
    render() {
        return (
            <div className='container'>
                <Card className='row custom-mt-30' header='Volume de vendas aprovadas'>
                    <LineGraphic />
                </Card>
                <Card className='row custom-mt-30' header='Detalhes das vendas'>
                    <Table />
                </Card>
            </div>
        )
    }
}