import React from "react";
import '../styles/keydata.css'
import PropTypes from 'prop-types'

function KeyData({ count, unit, icon, type }) {
    
    return(<div className="keydata">
        <div className="img-container">
            <img src={icon} alt="icon" className="img-icon"></img>
        </div>
        <div className="left-content">
            <span>{count}</span>
            <span>{unit}</span>
            <p>{type}</p>
        </div>
    </div>)

}

export default KeyData

KeyData.propTypes = {
    count: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    unit: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string
  }