import React from 'react'

function NewSkills() {
    return (
        <section className="skills-container">
            
                <h1 className="about-me-header">Newer Skills</h1>
                <div className='skill'>
                    <label>MySQL - SQLServer  - NoSQL</label>
                    <div className="skill-bar" >
                        <div className="skill-fill" id='skill-mysql'>60%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>Redux</label>
                    <div className="skill-bar" >
                        <div className="skill-fill" id='skill-rx'>50%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>C# - ASP.NET</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-asp'>50%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>C# - Xamarin Forms</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-xam'>50%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>Amazon AWS - S3 Buckets</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-aws'>50%</div>
                    </div>
                </div>
                <div className='skill'>
                    <label>PHP</label>
                    <div className="skill-bar" >
                        <div className="skill-fill"  id='skill-php'>40%</div>
                    </div>
                </div>
            </section>
    )
}

export default NewSkills
