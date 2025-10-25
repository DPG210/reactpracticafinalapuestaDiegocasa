import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default class NuevaApuesta extends Component {

    url=Global.urlApuestas

    state={
        status:false
    }

    cajaId=1;
    cajaNombre=React.createRef();
    cajaApuesta=React.createRef();
    cajaFecha=React.createRef();

    crearApuesta=(event)=>{
        event.preventDefault();

        const form=event.target;

        if(!form.checkValidity()){
            form.reportValidity();
            console.log("VALIDACIÓN FALLIDA. No se envía la apuesta.");
        // Simplemente terminamos la función aquí.
        return;
        }


        var request="api/apuestas"

        var apuesta={
            idApuesta:this.cajaId,
            usuario:this.cajaNombre.current.value,
            resultado:this.cajaApuesta.current.value,
            fecha:this.cajaFecha.current.value
        }

        axios.post(this.url+request,apuesta).then(response=>{
            this.setState({
                status:true
            })
        })
    }



  render() {
    return (
      <div>
        {
            this.state.status ==true &&
            <Navigate to="/apuestas"></Navigate>
        }
        <h1>Nueva Apuesta</h1>
        <form onSubmit={this.crearApuesta}>
            
            <label>Usuario</label>
            <input type='text' ref={this.cajaNombre}></input><br></br>
            <label>Resultado</label>
            <input type='text' ref={this.cajaApuesta}></input><br></br>
            {/* <label>Fecha</label>
            <input type='date' ref={this.cajaFecha}></input><br></br> */}
            <label>Fecha</label>
            <input type='text' placeholder='dd/mm/aaaa' pattern="\d{2}/\d{2}/\d{4}" ref={this.cajaFecha}></input>
            <button>Crear apuesta</button>
        </form>
      </div>
    )
  }
}
