import React from 'react'
import './Skill.css'
import { SkillsList } from '../../utils/SkillsList'

const Skill = () => {
  return (
    <div id='skills' className='skills container'>
      <div className="skill-title">
        <h1>My Skills</h1>
        <p>👉 including programming Languages, freameworks,
          databases, front-end & back-end technologies & APIs
        </p>
      </div>
      <div className="skill-cards">
        <div className="row">
        {SkillsList.map(skill =>(
          <div key={skill._id} className="col-md-3">
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center ">
                    <skill.icon className='skill-icon'/>
                  <div className="media-body">
                     {skill.name}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Skill