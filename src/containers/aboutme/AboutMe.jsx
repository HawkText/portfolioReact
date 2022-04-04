import React from 'react';
import Feature from '../../components/feature/Feature';
import './aboutme.css';
import frontlogo from '../../assets/front_end_web_dev_logo.png';
import backlogo from '../../assets/back_end_web_dev.png';
import gamelogo from '../../assets/game_controller_logo.png';

const AboutMe = () => (
        <div className="aboutme" id="aboutMe">
        <div className="aboutme-container">
        <img src={frontlogo} />
        <Feature title="Languages" text="HTML
JAVASCRIPT
CSS
JAVA
PYTHON
"/>
        <Feature title="Quote #1" text='“Good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun.” -Linus Torvalds' />
        </div>
        <div className="aboutme-container">
        <img src={backlogo} />
        <Feature title="Frameworks" text="REACTJS
BOOTSTRAP
FLASK
DJANGO
JQUERY
SPRING
"/>
        <Feature title="Quote #2" text='“The best programmers are not marginally better than merely good ones.  They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.” - Randall E. Stross' />
        </div>
        <div className="aboutme-container">
        <img src={gamelogo} />
        <Feature title="Pro Gamer" text="APEX LEGENDS
JEDI OUTCAST
DONKEY KONG COUNTRY
QUAKE 2
" />
        <Feature title="Quote #3" text='“Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.” - Stephen Hawking' />
        </div>
</div>
);

export default AboutMe;