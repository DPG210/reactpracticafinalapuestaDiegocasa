import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default class Jugadores extends Component {

    url=Global.urlApuestas

    state={
        jugadores:[],
        jugador:[],
        volver:false,
        detalles:false
    }

    verJugadores=()=>{
        var id=this.props.idequipo;

        var request="api/jugadores/jugadoresequipos/"+id

        axios.get(this.url+request).then(response=>{
            console.log("Cargando jugadores");
            console.log(response.data)
            this.setState({
                jugadores:response.data
            })
        })
    }

    volver=()=>{
        this.setState({
            volver:true
        })
    }

    detalles=(jugador)=>{
        console.log("Este es mi nombre"+ jugador);
        this.setState({
            jugador:jugador,
            detalles:true
        })
    }

    componentDidMount=()=>{
        this.verJugadores();
    }

  render() {
    return (
      <div style={{margin:"auto", width:"70%"}}>
        {
            this.state.volver ==true &&
            <Navigate to={"/equipos/"+this.props.idequipo}></Navigate>
        }
        {
            this.state.detalles == true &&
            <Navigate to={"/detalles/"+this.state.jugador}></Navigate>
        }
        <button onClick={this.volver}>Volver</button>
        <table className='table table-bordered align-middle  text-center'>
            <thead >
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                {   
                    this.state.jugadores.map((jugador,index)=>{
                        return(<tr key={index} value={jugador.nombre}>
                            <td>{jugador.nombre}</td>
                            <td>
                            <img src={jugador.imagen} style={{width:"70px", height:"70px"}}></img>
                            </td>
                            <td>
                            <button onClick={()=>{this.detalles(jugador.nombre)}}>Detalles</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
