import React from "react";
import './Card.css'

export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#708090',
        borderColor: props.color || '#708090'
    }

    return(
        <div className="card" style={cardStyle}>
            <div className="title">{props.titulo}</div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}