import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default class Apuestas extends Component {

    url=Global.urlApuestas

    state={
        apuestas:[],
        moverse:false
    }

    cargarApuestas=()=>{
        var request="api/apuestas"

        axios.get(this.url+request).then(response=>{

            this.setState({
                apuestas:response.data
            })
        })
    }
    eliminarApuesta=(id)=>{
        var request="api/apuestas/"+id

        axios.delete(this.url+request).then(response=>{
            this.cargarApuestas();
        })
    }
    componentDidMount=()=>{
        this.cargarApuestas();
    }

    nuevaApuesta=()=>{
        this.setState({
            moverse:true
        })
    }
  render() {
    return (
      <div style={{margin:"auto", width:"70%", justifyContent:"center", textAlign:"center"}}>
        {
            this.state.moverse ==true &&
            <Navigate to="/nuevaapuesta"></Navigate>
        }
        <h1>Apuestas</h1>
        <button onClick={this.nuevaApuesta}>Apostar</button>
        <table className='table table-bordered align-middle  text-center'>
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Resultado</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.apuestas.map((apuesta,index)=>{
                    return(<tr key={index}>
                        <td>{apuesta.usuario}</td>
                        <td>{apuesta.resultado}</td>
                        <td>{apuesta.fecha}</td>
                        <td>
                            <button onClick={()=>{this.eliminarApuesta(apuesta.idApuesta)}}>Eliminar</button>
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
