import React, { Component } from 'react'
import './table.scss'

export class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Empresa</th>
                        <th>Status</th>
                        <th>Última atualização</th>
                        <th>Notas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Engenia King</th>
                        <th>Breakfast of Champions</th>
                        <th>Idle</th>
                        <th>11/01/2017</th>
                        <th>Fact And Truth</th>
                    </tr>
                </tbody>
            </table>
        );
    }
}