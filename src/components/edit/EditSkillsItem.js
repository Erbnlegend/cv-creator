import React from 'react'
import EditSkills from '../edit/EditSkills'

export default function EditSkillsItem (props) {
  const { skill, edit, remove } = props

  const [showEdit, setShowEdit] = React.useState(false)

  function toggleEdit () {
    setShowEdit(!showEdit)
  }

  function removeInstance () {
    remove(skill, 'skills')
  }

  return (
        <div>
          {!showEdit &&
          <div className="skill">
              <div onClick={toggleEdit}>{skill.skill}</div>
              <div className='options'>
                <button className='delete-sm' onClick={removeInstance}>X</button>
              </div>
          </div>
          }
          {showEdit &&
          <EditSkills
            edit={edit}
            skill={skill}
            toggle={toggleEdit}
          />
          }
        </div>
  )
}
