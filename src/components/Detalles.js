import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom';

export default class Detalles extends Component {

    url=Global.urlApuestas;

    state={
        jugador:[],
        idEquipo:"",
        volver:false
    }

    cargarDetalles=()=>{
        var nombre=this.props.nombre;
        var request="api/jugadores/buscarjugadores/"+ nombre

        console.log(this.url+request)

        axios.get(this.url+request).then(response=>{
            console.log("Cargando jugador");
            console.log(response.data[0])
            this.setState({
                jugador:response.data[0]
            })
        })
    }

    volver=(id)=>{
        this.setState({
            idEquipo:id,
            volver:true
        })
    }

    componentDidMount=()=>{
        this.cargarDetalles();
    }

  render() {
    return (
      <div style={{margin:"auto", width:"70%", justifyContent:"center", textAlign:"center"}}>
        {
            this.state.volver ==true &&
            <Navigate to={"/jugadores/"+this.state.idEquipo}></Navigate>
        }
        <h1>{this.state.jugador.nombre}</h1>
        <img src={this.state.jugador.imagen}></img>
        <h2>{this.state.jugador.posicion}</h2>
        <h3>{this.state.jugador.pais}</h3>
        <button onClick={()=>{this.volver(this.state.jugador.idEquipo)}}>Volver</button>
      </div>
    )
  }
}
