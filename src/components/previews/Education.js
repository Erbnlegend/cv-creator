import React from 'react'
import EditEducation from '../edit/EditEducation'

export default function Education (props) {
  const { education } = props.cv

  const [showEdit, setShowEdit] = React.useState(false)

  function toggleEdit () {
    setShowEdit(!showEdit)
  }

  const educationMap = education.map((school, index) => {
    return (
      <div key={index} id={index}>
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
                <button className='delete' onClick={() => props.delete('education', index)}>Delete</button>
              </div>
            </div>
          }
          {showEdit &&
          <EditEducation
            edit={props.edit}
            education={school}
            toggle={toggleEdit}
          />
          }
        </div>
    )
  })

  return (
    <div>
      { educationMap }
    </div>
  )
}
