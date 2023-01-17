import React from "react";
import '../styles/title.css';
import PropTypes from 'prop-types'

function Title({firstName}) {
   
   return (<div className="title">
        <h1>Bonjour <span className="firstName">{firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
    </div>)
} 


export default Title

Title.propTypes = {
    firstName: PropTypes.string
}