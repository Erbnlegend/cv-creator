import React from 'react'
import EditExperienceItem from '../edit/EditExperienceItem'
import PropTypes from 'prop-types'

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

Experience.propTypes = {
  cv: PropTypes.object,
  edit: PropTypes.func,
  remove: PropTypes.func
}
