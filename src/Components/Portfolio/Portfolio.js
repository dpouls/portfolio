import React from 'react';
import './Portfolio.css';
import Project from './Project/Project';
function Portfolio() {
    let projectInfo = [ {
        imgUrl: '',
        title: 'Sunny',
        desc : "Personal project. Instagram website clone where users upload images of sunsets, follow others, and discover new content.",
        techUsed: ['React','Node','Express','PosgreSQL','Redux','Sass','NPM Packages']
    },{
        imgUrl: '',
        title: 'Moneta',
        desc : "Personal project. Instagram website clone.",
        techUsed: ['React','Node','Express','PosgreSQL','Redux','Sass','NPM Packages']
    },{
        imgUrl: '',
        title: 'Golden Property Management',
        desc : "Personal project. Instagram website clone.",
        techUsed: ['React','Node','Express','PosgreSQL','Redux','Sass','NPM Packages']
    },]
    return (
        <div className="portfolio-container">
            <h1 id='projects-header'>Projects</h1>
            {projectInfo.map((p,i) => {
                return (
                    <Project projectInfo={projectInfo[i]} />

                )
            })}
        </div>
    )
}

export default Portfolio
