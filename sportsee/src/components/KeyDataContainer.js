import React from "react";
import KeyData from "./KeyData";
import energy from "../assets/energy.png"
import chicken from "../assets/chicken.png"
import apple from "../assets/apple.png"
import cheeseburger from "../assets/cheeseburger.png"
import '../styles/keydatacontainer.css'
import PropTypes from 'prop-types'

function KeyDataContainer({kal, pro, carbo, lipid}) {

    //Formated number for "kal"
    kal = new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
      }).format(kal)

    return (<div className="keydatacontainer">
        <KeyData icon={energy} count={kal} unit="kCal" type="Calories"/>
        <KeyData icon={chicken} count={pro} unit="g" type="Proteines"/>
        <KeyData icon={apple} count={carbo} unit="g" type="Glucides"/>
        <KeyData icon={cheeseburger} count={lipid} unit="g" type="Lipides"/>
    </div>)
}

export default KeyDataContainer

KeyDataContainer.propTypes = {
    kal: PropTypes.number,
    pro: PropTypes.number,
    carbo: PropTypes.number,
    lipid: PropTypes.number
  }