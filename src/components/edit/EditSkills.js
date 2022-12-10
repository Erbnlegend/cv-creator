import React from 'react'
import PropTypes from 'prop-types'

export default function EditSkills (props) {
  const { id, skill } = props.skill

  function togglePreview () {
    // call app edit to change state
    props.toggle()
    submitEdit()
  }

  function submitEdit () {
    props.edit(
      {
        id: input.id,
        skill: input.skill
      },
      'skills')
  }

  const [input, setInput] = React.useState(
    {
      id,
      skill
    }
  )

  function storeInput (e) {
    const { name, value } = e.target

    setInput(() => ({ ...input, [name]: value }))
  }

  return (
      <div>
        <input
        className='info skill'
        name='skill'
        id={id}
        value={input.skill}
        onChange={storeInput}

      />
      <button className='save-sm' onClick={togglePreview}>Save</button>
      </div>
  )
}

EditSkills.propTypes = {
  skill: PropTypes.object,
  edit: PropTypes.func,
  toggle: PropTypes.func
}
