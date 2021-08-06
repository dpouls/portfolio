import React from "react";
import "./Project.css";

function Project(props) {
  let projectInfo = props.projectInfo;
  return (
    <section className="project-card">
      <img
        className="main-project-img"
        src={projectInfo.imgUrl}
        alt=""
      />
      <div className="project-details">
        <h3>{projectInfo.title}</h3>
        <p>{projectInfo.desc}</p>
        <strong id='tech-used-header'>Tech Used</strong>
        <ul>
          {projectInfo.techUsed.map((t, i) => {
            return <li>{t}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Project;