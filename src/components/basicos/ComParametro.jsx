import React from "react"

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'aprovado' : 'reprovado'
    return (
    <div>
        <h1></h1>
        <p>O aluno { props.aluno } tem nota { props.nota } e está { status }</p>
    </div>
    )
}