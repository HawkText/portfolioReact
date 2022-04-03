import React from 'react';
import Article from '../../components/article/Article';
import { project1, project2, project3, project4, project5 } from './imports';
import './projects.css';

const Projects = () => (
    <div className="gpt3__blog section__padding" id="projects">
        <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Projects that I have worked on.</h1>
        </div>
        <div className="gpt3__blog-container">

            <div className="gpt3__blog-container_groupB">
            <Article imgUrl={project1} date="Mar, 2022" text="Link Guy Rupee Collector JavaScript Game" />
                <Article imgUrl={project2} date="Sep 26, 2021" text="Drone For Wedding" />
                <Article imgUrl={project3} date="Sep 26, 2021" text="HawkText With Login and Registration" />
                <Article imgUrl={project4} date="Sep 26, 2021" text="Crypto Currency Tracker" />
                <Article imgUrl={project5} date="Sep 26, 2021" text="HTML/CSS Final" />
                <Article imgUrl={project1} date="Mar, 2022" text="Link Guy Rupee Collector JavaScript Game" />
            </div>
        </div>
    </div>
);

export default Projects;