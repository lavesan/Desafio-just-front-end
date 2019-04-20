import React, { Component } from 'react'
import './select.scss'

class Dropdown extends Component {
    render() {
        return(<div className='dropdown'>Sair</div>)
    }
} 

export class Select extends Component {

    state = {
        showDropdown: false,
    }

    select = (e: any) => {
        this.state.showDropdown = !this.state.showDropdown;
        if(this.state.showDropdown) {
            const div = document.createElement('div');
            div.innerHTML = 'Sair'
            e.target.append(div);
        }
        else {
            e.target.innerHTML = ''; 
        }
    }   

    render() {
        return (
            <div className='select-box' onClick={this.select}>
                {this.state.showDropdown ? <div className='dropdown'>Sair</div> : ''}
            </div>
        )
    }
}