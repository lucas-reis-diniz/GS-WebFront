import {} from "react";
import { Link } from "react-router-dom";
import './Header.scss'
import Home from '../../pages/Home/Home.jsx'
import About from "../../pages/About/About.jsx";
import Login from "../../pages/Login/Login.jsx";
import Data from "../../pages/Data/Data.jsx";

function Header() {
    return (
        <>
           <div className="header-container">
             <div className="header-container-logo">
                <h1>OCEANS</h1>
                <h2>WATCH</h2>
             </div>
             <div className="header-container-links">
                <Link to='/'>Home</Link>
                <Link to='/Data'>Dados</Link>
                <Link to='/About'>Sobre nós</Link>
                <Link to='/Login'>Login</Link>
             </div>
           </div>
        </>
    )
}

export default Header;