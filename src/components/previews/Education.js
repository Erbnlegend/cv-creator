import React from 'react'
import EditEducationItem from '../edit/EditEducationItem'
import PropTypes from 'prop-types'

export default function Education (props) {
  const { education } = props.cv

  const educationMap = education.map((school, index) => {
    return (
      <EditEducationItem
        key={index}
        school={school}
        edit={props.edit}
        remove={props.remove}
      />
    )
  })

  return (
    <div>
      { educationMap }
    </div>
  )
}

Education.propTypes = {
  cv: PropTypes.object,
  remove: PropTypes.func,
  edit: PropTypes.func
}
