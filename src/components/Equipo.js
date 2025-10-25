import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import Jugadores from './Jugadores';
import { Navigate } from 'react-router-dom';

export default class Equipo extends Component {

    url=Global.urlApuestas

    state={
        equipo:[],
        volver:false,
        jugador:false
    }

    cargarEquipo=()=>{
        var id=this.props.id;
        var request="api/equipos/"+id;

        axios.get(this.url+request).then(response=>{
            console.log("Cargando el quipo")

            this.setState({
                equipo:response.data
            })

        })

    }

    verJugadores=()=>{
        this.setState({
            jugador:true
        })
    }

    

    componentDidMount=()=>{
        this.cargarEquipo();
    }

    componentDidUpdate=(oldProps)=>{
        if(oldProps.id != this.props.id){
            this.cargarEquipo();
            
        }
    }

    volver=()=>{
        this.setState({
            volver:true
        })
    }

  render() {
    return (
      <div style={{margin:"auto", width:"60%", textAlign:"center"}}>
        {
            this.state.volver == true &&
            <Navigate to="/"></Navigate>
        }
        {
            this.state.jugador == true &&
            <Navigate to={"/jugadores/" + this.state.equipo.idEquipo}></Navigate>
        }
        <h1>{this.state.equipo.nombre}</h1>
        <img src={this.state.equipo.imagen} style={{width:"50px", height:"50px"}}></img>
        <p>{this.state.equipo.descripcion}</p>
        <button onClick={this.verJugadores}>Jugadores</button>
        <button onClick={this.volver} style={{margin:"10px"}}>Volver</button><br></br>
      </div>
    )
  }
}
