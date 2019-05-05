import React, { Component } from 'react'
import profileImage from '../../assets/imgs/perfil.jpg';
import arrowDown from '../../assets/icons/_ionicons_svg_md-arrow-dropdown.svg'
import './select.scss'

export class Select extends Component {
    render() {
        return (
            <div className='select-box'>
                <img src={profileImage} alt="logo" width="35" height="35" className="rounded-img" />
                <div className="information-box">
                    <p>Justo Top</p>
                    <p>Grupo econômico</p>
                </div>
                <img src={arrowDown} width="25" />
            </div>
        )
    }
}