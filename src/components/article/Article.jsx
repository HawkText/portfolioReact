import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, reDirect, link_text }) => (
    <div className="blog-container_article">
        <div className="blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="blog-container_article-content">
        <div>
            <p>{date}</p>
            <h3><a href={reDirect}>{text}</a></h3>
        </div>
        <p><a href={reDirect}>{link_text}</a></p>
        </div>
    </div>
);

export default Article;