import React from 'react';
import './Tools.css';
import aspnet from '../../resources/logos/aspnet.png'
import aws from '../../resources/logos/aws.png'
import bootstrap from '../../resources/logos/bootstrap.png'
import codewars from '../../resources/logos/codewars.png'
import css from '../../resources/logos/css.png'
import digitalocean from '../../resources/logos/digitalocean.png'
import ExpressJS from '../../resources/logos/ExpressJS.png'
import git from '../../resources/logos/git.png'
import gitbash from '../../resources/logos/gitbash.png'
import github from '../../resources/logos/github.png'
import heroku from '../../resources/logos/heroku.png'
import html from '../../resources/logos/html.png'
import Js from '../../resources/logos/Js.png'
import logo from '../../resources/logos/logo.svg'
import netlify from '../../resources/logos/netlify.png'
import node from '../../resources/logos/node.png'
import postgresql from '../../resources/logos/postgresql.png'
import Postman from '../../resources/logos/Postman.png'
import react from '../../resources/logos/react.png'
import redux from '../../resources/logos/redux.png'
import vs from '../../resources/logos/vs.png'
import vscode from '../../resources/logos/vscode.png'
import sass from '../../resources/logos/sass.png'

function Tools() {

    let logos = [react,Js,node,html,css,sass,ExpressJS,postgresql,git,gitbash,github,Postman,bootstrap,aws,digitalocean,heroku,netlify,redux,vs,vscode,aspnet,codewars,];
    let toolTipText = ["React","JavaScript","NodeJS","HTML5","CSS3","Sass","ExpressJS","PostgreSQL","Git","Git Bash","Github","Postman","BootStrap","AWS","Digital Ocean","Heroku","Netlify","Redux","Visual Studio","VS Code","Asp.Net","CodeWars.com"];

    return (
        <div class="tools-container">
            {logos.map((image,index) => {
                console.log(image);
                return (
                    <div class='tooltip'>
                    <img  className='logo-images' src={image} alt=""/>
                    <p className="tooltip-text">{toolTipText[index]}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Tools
