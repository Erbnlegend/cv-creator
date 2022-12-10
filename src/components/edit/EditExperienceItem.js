import React from 'react'
import EditExperience from '../edit/EditExperience'
import PropTypes from 'prop-types'

export default function EditExperienceItem (props) {
  const { experiences, edit, remove } = props

  const [showEdit, setShowEdit] = React.useState(false)

  function toggleEdit () {
    setShowEdit(!showEdit)
  }

  function removeInstance () {
    remove(experiences, 'experiences')
  }

  return (
        <div>
          {!showEdit &&
          <div className="experiences">
          <div className='flexDate'>
              <div>{experiences.dateFrom}</div>
              <div>{experiences.dateTo}</div>
            </div><div className='flexInfo'>
                <h4>{experiences.company}</h4>
                <div>{experiences.position}</div>
                <div>{experiences.tasks}</div>
              </div><div className='options'>
                <button className='edit' onClick={toggleEdit}>Edit</button>
                <button className='delete' onClick={removeInstance}>Delete</button>
              </div>
            </div>
          }
          {showEdit &&
          <EditExperience
            edit={edit}
            experiences={experiences}
            toggle={toggleEdit}
          />
          }
        </div>
  )
}

EditExperienceItem.propTypes = {
  experiences: PropTypes.object,
  edit: PropTypes.func,
  remove: PropTypes.func
}
