import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, SearchBar } from './components';
import './App.css';
import BookData from "./Data.json";

const App = () => {
    return (
        <div className="App">
            <div className="navBarDiv">
            <Navbar />
            <SearchBar placeholder="Search Here!" data={BookData}/>
            </div>
            <div className="gradient__test">
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App