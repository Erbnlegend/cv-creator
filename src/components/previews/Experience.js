import React from 'react'

export default function Experience (props) {
  const { experiences } = props.cv

  const experienceMap = experiences.map((experience, index) => {
    return (
      <div className="experiences" key={index} id={index}>
        <div className='flexDate'>
          <div>{experience.dateFrom}</div>
          <div>{experience.dateTo}</div>
        </div>
        <div className='flexInfo'>
          <h4>{experience.position}</h4>
          <div className='company'>{experience.company}</div>
          <div>{experience.tasks}</div>
        </div>
        <div className='options'>
          <button className='edit'>Edit</button>
          <button className='delete'>Delete</button>
        </div>
      </div>
    )
  })

  return (
    <div>
      { experienceMap }
    </div>
  )
}
