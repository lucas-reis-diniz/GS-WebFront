import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.scss';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/Login');
    };

    return (
        <div className="header-container">
            <div className="header-container-logo">
                <h1>OCEANS</h1>
                <h2>WATCH</h2>
            </div>
            <div className="header-container-links">
                <Link to='/'>Home</Link>
                <Link to='/Data'>Dados</Link>
                <Link to='/About'>Sobre nós</Link>
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="logout-btn">
                        <i className="bi bi-box-arrow-right"></i> Logout
                    </button>
                ) : (
                    <Link to='/Login'>Login</Link>
                )}
            </div>
        </div>
    );
}

export default Header;
