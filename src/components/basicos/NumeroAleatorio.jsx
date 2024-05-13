import React from "react";

export default function NumeroAleatorio(props){
    const { min, max } = props;
    const resultado = parseInt(Math.random() * (max - min)) + min;
    return(
        <div>
            <p>Valor mínimo: {min}</p>
            <p>Valor máximo: {max}</p>
            <p>O número gerado aleatoriamente foi: {resultado}</p>
        </div>
    )
}