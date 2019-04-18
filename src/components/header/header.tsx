import React, { Component } from 'react'
import { Route, Link, NavLink, BrowserRouter as Router, Redirect } from 'react-router-dom'

import { Login } from '../../pages/login/login'
import { Dashboard } from '../../pages/dashboard/dashboard'
import { Clients } from '../../pages/clients/clients'

import justaLogo from '../../assets/imgs/logo_branco.png';

import styled from 'styled-components'
import './header.scss'

export class Header extends Component {

    activeStyle = {
        background: '#FFF', 
        color: '#076E95'
    }

    render() {
        return (
            <Router>
                <header className='container-fluid'>
                    <nav className='row h-100'>
                        <div className='col-2 d-flex align-items-end justify-content-center mb-1'>
                            <img src={justaLogo} alt='Justa logo' title='Justa' width='100px' />
                        </div>
                        <div className='col-8 row'>
                            <NavLink to="/dashboard" className='col-2 d-flex align-items-center justify-content-center header-elem' activeStyle={ this.activeStyle }>
                                Dashboard
                            </NavLink>
                            <NavLink to="/clients" className='col-2 d-flex align-items-center justify-content-center header-elem' activeStyle={ this.activeStyle }>
                                Clientes
                            </NavLink>
                        </div>
                        <div className='col-2 d-flex align-items-center justify-content-end header-elem'>b</div>
                    </nav>
                </header>
                <Route exact path={['/', '/login']} component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path="/clients" component={Clients} />
            </Router>
        )
    }
}