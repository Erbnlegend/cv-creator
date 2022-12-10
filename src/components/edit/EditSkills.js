import React from 'react'

export default function EditSkills (props) {
  const { id, skill, edit, remove } = props.skill
  console.log(skill)

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
