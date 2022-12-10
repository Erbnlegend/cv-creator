import React from 'react'
import PropTypes from 'prop-types'

export default function AddSkills (props) {
  const { skills } = props.cv

  const [input, setInput] = React.useState('')
  const skill = document.querySelector('#skill')

  function storeInput (e) {
    setInput(() => (e.target.value))
  }

  function submit (e) {
    e.preventDefault()
    if (skill.value === '') {
      skill.placeholder = 'Must not be empty'
      return
    }
    props.submit({ id: skills.length + 1, skill: input }, 'skills')
    setInput('')
    skill.value = ''
  }

  return (
    <div>
      <h3>SKILLS</h3>
      <form onSubmit={submit}>
      <label htmlFor='skill'>Relevant Skills</label>
        <input
          id='skill'
          type="text"
          name='skill'
          placeholder=''
          value={skills.skill}
          onChange={storeInput}
        />
        <button>Add Skill</button>
      </form>
    </div>
  )
}

AddSkills.propTypes = {
  cv: PropTypes.object,
  submit: PropTypes.func
}
