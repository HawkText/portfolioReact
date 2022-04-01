import React from 'react';
import { jsLogo, javaLogo, pylogo, htmlLogo, reactlogo } from './imports';
import './brand.css';

const Brand = () => (
    <div className="gpt3__brand section__padding">
        <div>
        <img className="logos_bar_div_reactlogo" src={reactlogo} />
        </div>
        <div>
        <img className="logos_bar_div_jslogo" src={jsLogo} />
        </div>
        <div>
        <img className="logos_bar_div_javalogo" src={javaLogo} />
        </div>
        <div>
        <img className="logos_bar_div_pylogo" src={pylogo} />
        </div>
        <div>
        <img className="logos_bar_div_html" src={htmlLogo} />
        </div>
    </div>
);

export default Brand;