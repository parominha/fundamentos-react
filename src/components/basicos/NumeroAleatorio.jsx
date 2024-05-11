import React from "react";

export default function NumeroAleatorio(props){
    const { min, max } = props;
    const resultado = parseInt(Math.random() * (max - min)) + min;
    return(
        <div>
            <h2>Gerador de números aleatórios</h2>
            <p>Valor mínimo: {min}</p>
            <p>Valor máximo: {max}</p>
            <p>O número gerado aleatoriamente foi: {resultado}</p>
        </div>
    )
}