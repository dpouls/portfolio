import React from 'react';
import './Tools.css';

function Tools() {

    let logos = ["react","Js","node","html","css","sass","ExpressJS","postgresql","gitbash","github","Postman","bootstrap","aws","digitalocean","heroku","netlify","redux","vs","vscode","aspnet","codewars"];
    let toolTipText = ["React","JavaScript","NodeJS","HTML5","CSS3","Sass","ExpressJS","PostgreSQL","Git Bash","Github","Postman","BootStrap","AWS","Digital Ocean","Heroku","Netlify","Redux","Visual Studio","VS Code","Asp.Net","CodeWars.com"];

    return (
        <div class="tools-container">
            {logos.map((image,index) => {
                console.log(image);
                return (
                    <div class='tooltip'>
                    <img  className='logo-images' src={`/images/logos/${image}.png`} alt=""/>
                    <p className="tooltip-text">{toolTipText[index]}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Tools
