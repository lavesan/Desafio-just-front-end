import React, { Component, Fragment } from 'react'
import './login.scss'

export class Login extends Component {
    render() {
        return (
            <Fragment>
                <input placeholder='login' type="text"/>
                <input placeholder='senha' type="password"/>
            </Fragment>
        )
    }
}