import React from 'react'
import EditExperienceItem from '../edit/EditExperienceItem'

export default function Experience (props) {
  const { experiences } = props.cv

  const experienceMap = experiences.map((experience, index) => {
    return (
      <EditExperienceItem
      key={index}
      experiences={experience}
      edit={props.edit}
      remove={props.remove}
    />
    )
  })

  return (
    <div>
      { experienceMap }
    </div>
  )
}
