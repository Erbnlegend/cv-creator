import React from 'react'
import AddContact from './add/AddContact'
import AddEducation from './add/AddEducation'
import AddExperience from './add/AddExperience'
import AddMission from './add/AddMission'
import AddSkills from './add/AddSkills'

import PropTypes from 'prop-types'

export default function Add (props) {
  return (
    <div className='form'>
      <AddMission
        cv={props.cv}
        handleChange={props.handleChange}
        submit={props.submit}
      />
      <AddContact
        cv={props.cv}
        handleChange={props.handleChange}
        submit={props.submit}
      />
      <AddExperience
        cv={props.cv}
        handleChange={props.handleChange}
        submit={props.submit}
      />
      <AddSkills
        cv={props.cv}
        handleChange={props.handleChange}
        submit={props.submit}
      />
      <AddEducation
        cv={props.cv}
        handleChange={props.handleChange}
        submit={props.submit}
      />
    </div>
  )
}

Add.propTypes = {
  cv: PropTypes.object,
  handleChange: PropTypes.func,
  submit: PropTypes.func
}
