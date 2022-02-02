import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CRTIC from '../../assets/crtic.jpg'
import Actividades from '../../assets/actividades.png'
import Reuniones from '../../assets/reuniones.png'
import Unreal from '../../assets/unreal.jpg'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div className="container">
                <Link className="navbar-brand" to="/">
                <img className="img-fluid w-100 home" src={CRTIC} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/Actividades" className="nav-link">
                            <img className="img-fluid w-100 activities" src={Actividades} alt="Actividades" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Reuniones" className="nav-link">
                            <img className="img-fluid w-100 reunions" src={Reuniones} alt=""/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Clases" className="nav-link">
                                Registro de clases
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}