import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter as Router, Redirect } from 'react-router-dom'

import { Login } from '../../pages/login/login'
import { Dashboard } from '../../pages/dashboard/dashboard'
import { Clients } from '../../pages/clients/clients'

import { Select } from '../select/select'
import justaLogo from '../../assets/imgs/logo_branco.png';
import analytics from '../../assets/icons/_ionicons_svg_md-analytics.svg'
import person from '../../assets/icons/_ionicons_svg_md-people.svg'

import styled from 'styled-components'
import './header.scss'

export class Header extends Component {

    url: string = '';
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Router>
                {/* {this.url = this.props.match.url;
                    if(url.startWith('/login') || url.startWith('/')) {
                }} */}
                <header className='container-fluid'>
                    <nav className='row h-100'>
                        <div className='col-12 col-md-2 d-flex align-items-end justify-content-center mt-2 mt-md-0 mb-3 mb-md-1'>
                            <img src={justaLogo} alt='Justa logo' title='Justa' width='100px' />
                        </div>
                        <div className='col-12 col-md-8 row container-fluid mx-0 px-0'>
                            <NavLink to="/dashboard" className='col-6 col-lg-2 col-md-3 d-flex align-items-center justify-content-center py-3 header-elem' activeClassName="selected">
                                <img src={analytics} width="20" /> Dashboard
                            </NavLink>
                            <NavLink to="/clients" className='col-6 col-lg-2 col-md-3 d-flex align-items-center justify-content-center py-3 header-elem' activeClassName="selected">
                                <img src={person} width="20" /> Clientes
                            </NavLink>
                        </div>
                        <div className='col-12 col-md-2 d-flex align-items-center justify-content-end mt-3 mt-md-0 mb-3 mb-md-0 header-elem'>
                            <Select />
                        </div>
                    </nav>
                </header>
                <Route exact path='/' render={() => <Redirect to="/login" />} />
                <Route exact path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path="/clients" component={Clients} />
            </Router>
        )
    }
}