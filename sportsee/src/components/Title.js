import React from "react";
import '../styles/title.css';

function Title({firstName}) {
    return (<div className="title">
        <h1>Bonjour <span className="firstName">{firstName}</span></h1>
        <p>Félicitation</p>
    </div>)
} 


export default Title