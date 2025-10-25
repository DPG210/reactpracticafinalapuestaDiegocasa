import React, { Component } from 'react'
import { BrowserRouter,Route, Routes, useParams } from 'react-router-dom'
import MenuApuestas from './MenuApuestas'
import Home from './Home'
import Equipo from './Equipo'
import Jugadores from './Jugadores'
import Detalles from './Detalles'
import Apuestas from './Apuestas'
import NuevaApuesta from './NuevaApuesta'

export default class Router extends Component {
  render() {
    
    function EquipoElement(){
        let {idequipo}=useParams()

        return <Equipo id={idequipo}></Equipo>
    }

    function JugadoresElement(){
        let {equipo}=useParams()

        return <Jugadores idequipo={equipo}></Jugadores>
    }

    function DetallesElement (){
        let {nombre}=useParams();

        return <Detalles nombre={nombre}></Detalles>
    }

    return (
      <BrowserRouter>
        <MenuApuestas></MenuApuestas>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/equipos/:idequipo" element={<EquipoElement></EquipoElement>}></Route>
            <Route path="/jugadores/:equipo" element={<JugadoresElement></JugadoresElement>}></Route>
            <Route path="/detalles/:nombre" element={<DetallesElement></DetallesElement>}></Route>
            <Route path="/apuestas" element={<Apuestas></Apuestas>}></Route>
            <Route path="/nuevaapuesta" element={<NuevaApuesta></NuevaApuesta>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
