import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
    <div className="header section__padding" id="home">
            <div className="header-image slide-in-elliptic-right-bck">
                <img src={ai} />
            </div>
        <div className="header-content">
        <h1 className="gradient__text">Welcome to the portfolio of Matthew Hawkins</h1>
        <p className='gradient__text'>My name is Matthew Hawkins and I eat, breath, and dream coding. Please check out any of my previous projects that I have completed below or search above for any number of interesting things this website has to offer!</p>
        </div>

    </div>
);

export default Header;