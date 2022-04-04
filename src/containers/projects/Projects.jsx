import React from 'react';
import Article from '../../components/article/Article';
import { project1, project2, project3, project4, project5 } from './imports';
import './projects.css';

const Projects = () => (
    <div className="blog section__padding" id="projects">
        <div className="blog-heading">
        <h1 className="gradient__text">Projects that I have worked on.</h1>
        </div>
        <div className="blog-container">

            <div className="blog-container_groupB">
            <Article imgUrl={project1} date="Mar, 2022" text="Link Guy Rupee Collector JavaScript Game" reDirect="http://www.google.com" link_text="Weeee"  />
                <Article imgUrl={project2} date="Jan, 2022" text="Drone For Wedding"  reDirect="http://www.google.com" link_text="Weeee"  />
                <Article imgUrl={project3} date="Feb, 2022" text="HawkText With Login and Registration"  reDirect="http://www.google.com" link_text="Weeee"  />
                <Article imgUrl={project4} date="Feb, 2022" text="Crypto Currency Tracker"  reDirect="http://www.google.com" link_text="Weeee"  />
                <Article imgUrl={project5} date="Sep, 2021" text="HTML/CSS Final"  reDirect="http://www.google.com" link_text="Weeee"  />
                <Article imgUrl={project1} date="Coming Soon" text="Link Guy Rupee Collector JavaScript Game"  reDirect="http://www.google.com" link_text="Weeee"  />
            </div>
        </div>
    </div>
);

export default Projects;