import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'


export default class MenuApuestas extends Component {

    url=Global.urlApuestas;

    state={
        equipos:[]
    }

    loadEquipos=()=>{
        var request="api/equipos"

        axios.get(this.url+request).then(response=>{
            console.log("Dentro de los equipos");
            this.setState({
                equipos:response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadEquipos();
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/apuestas" className="nav-link" aria-current="page">Apuestas</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.equipos.map((equipo,index)=>{
                                            return(<NavLink key={index} className='dropdown-item' to={"/equipos/"+equipo.idEquipo}>
                                                {equipo.nombre}
                                            </NavLink> )
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      </div>
    )
  }
}
