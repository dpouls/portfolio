import './AboutMe.css';
import me from '../../resources/me.jpg'
import NewSkills from './Skills/NewSkills';
import Skills from './Skills/Skills';
import Tools from '../Tools/Tools';


function AboutMe() {
  return (
    <div className="about-me">
        <div className="about-col col-left">
            <img id="img-me" src={me} alt="Photo of Dallin Poulson" />
        </div>
        <div className="about-col col-right">
        <h1 className="about-me-header">About Me</h1>
            <p id="about-me-p">I am a Full Stack Web Developer who specializes in the <strong>PERN</strong> stack. I have a passion for problem solving and enjoy the process of seeing a project come together. My background as a developer began with a 13 week fully immersive coding bootcamp through DevMountain in Lehi, UT. With that time I was able to build my first projects, both on my own and in a group environment.
            <br/>
            <br/>
            Now I am finishing up a bachelors degree at Utah Valley University in <strong>Information Systems</strong> with an emphasis in <strong>Web and Application Development</strong>.
            </p>

            <Skills/>
        <NewSkills/>

        </div>
        <Tools/>
    </div>
  );
}

export default AboutMe;
