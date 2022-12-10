import React from 'react'

export default function Skills (props) {
  const { skills } = props.cv

  const skillMap = skills.map((skill, index) => {
    return <div className='info skill' onClick={props.edit} key={index} id={index}>{skill.skill}</div>
  })

  return (
    <div>
      {skillMap}
    </div>
  )
}
