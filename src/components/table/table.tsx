import React, { Component } from 'react'
import './table.scss'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createRow(name: string, establishment: string, status: string, lastAtt: string, notes: string) {
    return { name, establishment, status, lastAtt, notes };
}

const headers = ['Nome', 'Empresa', 'Status', 'Última atualização', 'Notas'];
const rows = [
    createRow('Eugenia King', 'Breakfast of Champions', 'Idle', '11/01/2017', 'Fact And Truth'),
    createRow('Maria Schneider', 'Breakfast of Champions', 'Closed', '04/24/2017', 'On Being Human'),
    createRow('Phoebe Frazier', 'Breakfast of Champions', 'Idle', '05/28/2017', 'Always Look On The Bright Side Of Life'),
    createRow('Lou Wolfe', 'Breakfast of Champions', 'Idle', '05/07/2017', 'Fact And Truth'),
    createRow('Emile Young', 'Breakfast of Champions', 'Active', '05/24/2017', 'Peace On Earth A Wonderful Wish But No Way'),
]

export class Table extends Component {



    render() {
        return (
            <Paper>
                <MaterialTable>
                    <TableHead>
                        <TableRow>
                            {headers.map(header => (
                                <TableCell>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map(row => (
                        //  key={row.id}
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.establishment}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.lastAtt}</TableCell>
                            <TableCell>{row.notes}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </MaterialTable>
            </Paper>
        );
    }
}