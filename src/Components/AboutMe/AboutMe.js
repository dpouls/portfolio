import React from 'react';
import {useState} from 'react';
import './AboutMe.css';

// import me from '../../resources/me.jpg'
import NewSkills from './Skills/NewSkills';
import Skills from './Skills/Skills';




function AboutMe() {
  const [CvClicked, setCvClicked] = useState(false)
  return (
    <div id='about-me' className="about-me">
        <div className="about-col col-left">
            <img id="img-me" src='/images/me.jpg' alt="Dallin Poulson" />
            <br />
            <br />
            <h1>Dallin Poulson</h1>
            <p>Provo, UT</p>
            <p>385.200.4172</p>
            <p>dallinpoulson@gmail.com</p>
            <br />
            <p>Utah Valley University 2022</p>
            <p>Information Systems<br/> Web and Application Development</p>
        </div>
        <div className="about-col col-right">
        <h1 className="about-me-header">About Me</h1>
            <p id="about-me-p">I am a Full Stack Web Developer who specializes in the <strong className='pern'>PERN</strong><strong className="pern-expanded"> -{'>'} PostgreSQL, ExpressJS, React, NodeJs</strong> stack. I have a passion for problem solving and enjoy the process of seeing a project come together. My background as a developer began with a 13 week fully immersive coding bootcamp through DevMountain in Lehi, UT. With that time I was able to build my first projects, both on my own and in a group environment.
            <br/>
            <br/>
            Now I am finishing up a bachelors degree at Utah Valley University in <strong>Information Systems</strong> with an emphasis in <strong>Web and Application Development</strong>.
            <br />
            <br />
            I spend my free time with my wife, Abby, and my little golden doodle Honey. We like to go to the mountains and play games with friends and family!
            <br />
            <br />
            <p>I am currently looking for employment as a web developer or intern.</p>
            Check out my <strong><span onClick={() => setCvClicked(!CvClicked)} id='cv'>Resume/CV</span></strong>!
            </p>
            {CvClicked ? (
              <iframe src="https://drive.google.com/file/d/1eyPgRF4msV1CBpB7d78mAK7gl_DEtbGm/preview" width="100%" height="480" allow="autoplay"></iframe>
            
            
            ) : null}

            <Skills/>
            <NewSkills/>

        </div>
        
    </div>
  );
}

export default AboutMe;
