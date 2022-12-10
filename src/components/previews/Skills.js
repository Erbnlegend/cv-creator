import React from 'react'
import EditSkillsItem from '../edit/EditSkillsItem'
import PropTypes from 'prop-types'

export default function Skills (props) {
  const { skills } = props.cv

  const skillMap = skills.map((skill, index) => {
    return (
        <EditSkillsItem
        key={index}
        skill={skill}
        edit={props.edit}
        remove={props.remove}
        />
    )
  })

  return (
    <div>
      {skillMap}
    </div>
  )
}

Skills.propTypes = {
  cv: PropTypes.object,
  edit: PropTypes.func,
  remove: PropTypes.func
}
