import React from 'react'
import Contact from './previews/Contact'
import Education from './previews/Education'
import Experience from './previews/Experience'
import Skills from './previews/Skills'
import Mission from './previews/Mission'

export default function CompletedData (props) {
  return (
    <div className='completed'>
      <div className='contact contact-container'>
        <Contact
          cv={props.cv}
        />
        <div className='skills-container'>
          <h3>Skills</h3>
          <Skills
            cv={props.cv}
            edit={props.edit}
            delete={props.delete}
          />
        </div>
      </div>
      <div className='preview-container'>
        <div className='mission-container'>
          <Mission
            cv={props.cv}
          />
        </div>
        <div className='experience-container'>
        <h3>Experience</h3>
          <Experience
            cv={props.cv}
            edit={props.edit}
            delete={props.delete}
          />
        </div>
        <div className='education-container'>
        <h3>Education</h3>
          <Education
            cv={props.cv}
            edit={props.edit}
            delete={props.delete}
          />
        </div>
      </div>
    </div>
  )
}
