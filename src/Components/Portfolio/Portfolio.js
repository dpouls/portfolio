import React from 'react';
import './Portfolio.css';
import Project from './Project/Project';
function Portfolio() {
    let projectInfo = [ {
        imgUrl: '/images/sunny/discover.png',
        liveUrl: 'http://147.182.251.51:7000/',
        title: 'Sunny',
        desc : "Personal project. Instagram website clone where users upload images of sunsets, follow others, and discover new content. Test account username and password: asdf",
        techUsed: ['React','Node','Express','PosgreSQL','Redux','Sass','NPM Packages',' Encrypted authorization','AWS S3 Bucket']
    },{
        imgUrl: '/images/moneta/1.png',
        liveUrl: 'http://147.182.251.51:6789/',
        title: 'Moneta',
        desc : "Group project. Point of Sale system for a small Ice Cream Shop, CRUD operations, Stripe Payments, and admin controls to allow products/employees to be created/edited/deleted. Created the front and back end of the main cart page, the receipt, customer data, and some other features.",
        techUsed: ['React','Node','Express','PosgreSQL', 'Stripe Payments','Redux','Sass','NPM Packages',' Encrypted authorization']
    },{
        imgUrl: '/images/moneta/2.png',
        liveUrl: 'http://147.182.251.51:7000/',
        title: 'Golden Property Management',
        desc : 'Website/Web app that allows property managers to organize renters and properties. Renters can log in to pay rent and also submit maintenance requests. Property managers can log in to add/delete/edit/view renters, requests, and properties. Landlords can add/delete/edit/view renters, maintenance requests, and properties. New functionality will allow users to see what properties are available to rent.',
        techUsed: ['React','Node','Express','PosgreSQL','Stripe Payments','React Bootstrap','Sass','NPM Packages',' Encrypted authorization.']
    },]
    return (
        <div id='projects' className="portfolio-container">
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
