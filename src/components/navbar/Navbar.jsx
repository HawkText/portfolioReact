import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/hawk_logo.png';
import './navbar.css';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
        return (
        <div className="">
            <div className="navbar-links">
            <div className="navbar-links_logo">
                <img src={logo} />
            </div>
            <div className="navbar-links_container">
                <p><a href="#home">Home</a></p>
                <p><a href="#aboutMe">About Me</a></p>
                <p><a href="#projects">Projects</a></p>
                <p><a href="#resume">Resume</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>
            </div>
            <div className="navbar-sign">

            </div>
            <div className="navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
                <div className="navbar-menu_container-links">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#aboutMe">About Me</a></p>
                    <p><a href="#projects">Projects</a></p>
                    <p><a href="#resume">Resume</a></p>
                    <p><a href="#contact">Contact</a></p>
                </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;