import React from 'react';
import Feature from '../../components/feature/Feature';
import './aboutme.css';
import frontlogo from '../../assets/front_end_web_dev_logo.png';
import backlogo from '../../assets/back_end_web_dev.png';
import gamelogo from '../../assets/game_controller_logo.png';

const AboutMe = () => (
    <div className="gpt3__whatgpt3" id="aboutMe">
        <div className="gpt3__whatgpt3-container">
        <img src={frontlogo} />
        <Feature title="Languages" text="HTML
JAVASCRIPT
CSS
JAVA
PYTHON
"/>
        <Feature title="bla bla" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div>
        <div className="gpt3__whatgpt3-container">
        <img src={backlogo} />
        <Feature title="Frameworks" text="REACTJS
BOOTSTRAP
FLASK
DJANGO
JQUERY
SPRING
"/>
        <Feature title="Back-end" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div>
        <div className="gpt3__whatgpt3-container">
        <img src={gamelogo} />
        <Feature title="Pro Gamer" text="REACTJS
BOOTSTRAP
FLASK
DJANGO
JQUERY
SPRING" />
        <Feature title="Pro Gamer" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div>
    </div>
);

export default AboutMe;