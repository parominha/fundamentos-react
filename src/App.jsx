import './App.css'
import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/layout/Card";
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';


export default function App(props){
    return(
    <div className="app">
        <h1>Fundamentos React</h1>
        <div className="cards">
            <Card titulo="Gerador de número aleatório" color= '#2f4f4f' >
                <NumeroAleatorio min={1} max={60} />   
            </Card>
            <Card titulo="Sistema de notas">
                <ComParametro
                    aluno="Pedro Silva"
                    nota={9}>            
                </ComParametro>
                <ComParametro
                    aluno="Paloma Azevedo"
                    nota={8}>            
                </ComParametro>
            </Card>
            <Card titulo="Componente com Filhos">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                 </Familia>
            </Card>
        </div>

    </div>
    )
}