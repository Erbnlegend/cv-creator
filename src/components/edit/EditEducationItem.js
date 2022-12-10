import React from 'react'
import EditEducation from '../edit/EditEducation'
import PropTypes from 'prop-types'

export default function EditEducationItem (props) {
  const { school, edit, remove } = props

  const [showEdit, setShowEdit] = React.useState(false)

  function toggleEdit () {
    setShowEdit(!showEdit)
  }

  function removeInstance () {
    remove(school, 'education')
  }

  return (
        <div>
          {!showEdit &&
          <div className="education">
          <div className='flexDate'>
              <div>{school.gradDate}</div>
            </div><div className='flexInfo'>
                <h4>{school.school}</h4>
                <div>{school.study}</div>
                <div>GPA: {school.gpa}</div>
              </div><div className='options'>
                <button className='edit' onClick={toggleEdit}>Edit</button>
                <button className='delete' onClick={removeInstance}>Delete</button>
              </div>
            </div>
          }
          {showEdit &&
          <EditEducation
            edit={edit}
            education={school}
            toggle={toggleEdit}
          />
          }
        </div>
  )
}

EditEducationItem.propTypes = {
  school: PropTypes.object,
  edit: PropTypes.func,
  remove: PropTypes.func
}
