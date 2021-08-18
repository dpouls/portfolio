import React from "react";
import "./Tools.css";

function Tools() {
  let toolInfo = [
    { logo: "Postman", toolTip: "Postman", link: "" },
    { logo: "bootstrap", toolTip: "Bootstrap", link: "" },
    { logo: "aws", toolTip: "Amazon AWS", link: "" },
    { logo: "digitalocean", toolTip: "Digital Ocean", link: "" },
    { logo: "heroku", toolTip: "Heroku", link: "" },
    { logo: "netlify", toolTip: "Netlify", link: "" },
    { logo: "redux", toolTip: "Redux", link: "" },
    { logo: "react", toolTip: "React", link: "" },
    { logo: "Js", toolTip: "JavaScript", link: "" },
    { logo: "node", toolTip: "NodeJS", link: "" },
    { logo: "html", toolTip: "HTML5", link: "" },
    { logo: "css", toolTip: "CSS3", link: "" },
    { logo: "sass", toolTip: "Sass", link: "" },
    { logo: "ExpressJS", toolTip: "ExpressJS", link: "" },
    { logo: "postgresql", toolTip: "PostgreSQL", link: "" },
    { logo: "gitbash", toolTip: "Git Bash", link: "" },
    {
      logo: "github",
      toolTip: "GitHub Profile",
      link: "https://github.com/dpouls",
    },
    {
      logo: "codewars",
      toolTip: "CodeWars.com",
      link: "https://www.codewars.com/users/dpouls",
    },
    { logo: "vs", toolTip: "Visual Studio", link: "" },
    { logo: "vscode", toolTip: "VS Code", link: "" },
    { logo: "aspnet", toolTip: "ASP.NET CORE MVC", link: "" }
  ];

  return (
    <div class="tools-container">
      {toolInfo.map((tool) => {
        console.log(tool);
        if (tool.link.length > 0) {
          return (
            <a target="blank" rel="noreferrer" href={tool.link}>
              <div class="tooltip">
                <img
                  className="logo-images"
                  src={`/images/logos/${tool.logo}.png`}
                  alt=""
                />
                <p id="clickable-tool" className="tooltip-text">
                  {tool.toolTip}
                </p>
              </div>
            </a>
          );
        }
        return (
          <div class="tooltip">
            <img
              className="logo-images"
              src={`/images/logos/${tool.logo}.png`}
              alt=""
            />
            <p className="tooltip-text">{tool.toolTip}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Tools;
