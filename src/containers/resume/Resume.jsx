import React from 'react';
import hawkinsResume from '../../assets/hawkins_matthew_resume_2022.png';
import './resume.css';

const Resume = () => (
    <div className="resume__container section__padding matrix__background" id="resume">
        <h1 className="gradient__text">Matthew Hawkins Resume</h1>
        <div className="resume_image">
        <img src={hawkinsResume} alt="hawkins matthew resume" /> </div>
    </div>
);

export default Resume;