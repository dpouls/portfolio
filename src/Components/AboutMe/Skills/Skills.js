import React from 'react'

function Skills() {
    return (
            <section className="skills-container">
                <h1 className="about-me-header">Top Skills</h1>
                <div className='skill'>
                    <label>React</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-react'>95%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>JavaScript</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-js'>95%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>HTML5</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-html'>95%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>CSS3 - Sass</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-css'>90%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>Node - Express</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-ne'>95%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>APIs - Postman</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-api'>95%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>PostgreSQL - SQL</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-pql'>99%</div>
                    </div>
                </div>
            </section>
    )
}

export default Skills
