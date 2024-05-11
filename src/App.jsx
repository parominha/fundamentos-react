import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";

export default function App(props){
    return(
    <div>
        <h1>Fundamentos React</h1>
        <NumeroAleatorio min={1} max={60}></NumeroAleatorio>
        <Primeiro></Primeiro>
        <ComParametro
        aluno="Pedro Silva"
        nota={9}>            
        </ComParametro>
        <ComParametro
        aluno="Paloma Azevedo"
        nota={8}>            
        </ComParametro>
    </div>
    )
}