import React from 'react'

import { Footer, Blog, Possibility, Features, Projects, Header } from './containers';
import { CTA, Brand, Navbar, SearchBar } from './components';
import './App.css';
import BookData from "./Data.json";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__test">
            <div className="navBarDiv">
            <Navbar />
            <SearchBar placeholder="Search Here!" data={BookData}/>
            </div>
                <Header />
            </div>
            <Brand />
            <Projects />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App