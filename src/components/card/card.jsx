import React, { Component } from 'react'
import './card.scss'

export class Card extends Component {
    render() {
        return (
            <div className={this.props.className ? `${this.props.className} card` : 'card'}>
                <div className='header'>
                    {this.props.header}
                </div>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}