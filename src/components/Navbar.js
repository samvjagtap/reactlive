import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar(props) {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('home')

    useEffect(() => {
        if (location.pathname === '/about') {
            setActiveTab('about')
        } if (location.pathname === '/home') {
            setActiveTab('home')
        }
    }, [props.mode])
    
    let name = 'Sameer'
    let lname = 'Jagtap'
    
    
    const handalActiveTab = (tab) => {
        setActiveTab(tab);
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink id='idNavLink' className="nav-link" to="/" onClick={() => handalActiveTab('home')} 
                                    style={{ borderBottom: activeTab === 'home' ? props.underLineStyle : '' }}
                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id='idNavLink' className="nav-link" to={`/about/${name}/${lname}`} onClick={() => handalActiveTab('about')}
                                    style={{ borderBottom: activeTab === 'about' ? props.underLineStyle : '' }}
                                >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id='idNavLink' className="nav-link" to="/search" onClick={() => handalActiveTab('search')} 
                                    style={{ borderBottom: activeTab === 'search' ? props.underLineStyle : '' }}
                                >Search</NavLink>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className="form-check form-switch">
                            <input style={{backgroundColor : props.mode === 'dark' ? '#212529' : 'white'}} onClick={props.toggleMode} className="form-check-input" type="checkbox" id="idModeController" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
