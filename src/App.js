import React from 'react'

import { Footer, Projects, Resume, Contact, Aboutme, Header } from './containers';
import { Brand, Navbar, SearchBar } from './components';
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
            <Aboutme />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </div>
    )
}

export default App