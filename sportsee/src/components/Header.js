import React from "react";
import logo from "../assets/logo.png"
import '../styles/header.css'

function Header() {
// Logo "Sportsee" and navigation
    return (<div className="header">
        
        <img src={logo} alt='logo' className="header-logo"></img>
        <nav className="header-nav">
            <a href='/accueil' className="link">Accueil</a>
            <a href='/profil' className="link">Profil</a>
            <a href='/reglages' className="link">Réglage</a>
            <a href='/communauté' className="link">Communauté</a>
        </nav>

    </div>)
}

export default Header