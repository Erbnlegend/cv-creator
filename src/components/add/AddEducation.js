import React from 'react'
import PropTypes from 'prop-types'

export default function AddEducation (props) {
  const { education } = props.cv

  const ids = {
    school: document.querySelector('#school'),
    study: document.querySelector('#study'),
    gpa: document.querySelector('#gpa'),
    gradDate: document.querySelector('#grad')
  }

  const [input, setInput] = React.useState(
    {
      school: '',
      study: '',
      gpa: '',
      gradDate: ''
    }
  )

  function storeInput (e) {
    const { name, value } = e.target

    setInput(() => ({ ...input, [name]: value }))
  }

  function submit (e) {
    e.preventDefault()
    props.submit(
      {
        id: education.length + 1,
        school: input.school,
        study: input.study,
        gpa: input.gpa,
        gradDate: input.gradDate
      },
      'education')
    setInput(
      {
        school: '',
        study: '',
        gpa: '',
        gradDate: ''
      })
    ids.school.value = ''
    ids.study.value = ''
    ids.gpa.value = ''
    ids.gradDate.value = ''
  }

  return (
    <div>
      <h3>EDUCATION</h3>
      <form onSubmit={submit}>
      <label htmlFor='school'>School Name</label>
        <input
          id='school'
          type="text"
          name='school'
          value={education.school}
          onChange={storeInput}
        />
        <label htmlFor='study'>Field of Study</label>
        <input
          id='study'
          type="text"
          name='study'
          value={education.study}
          onChange={storeInput}
        />
        <label htmlFor='gpa'>GPA</label>
        <input
          id='gpa'
          type="text"
          name='gpa'
          value={education.gpa}
          onChange={storeInput}
        />
        <label htmlFor='gradDate'>Graduation Date</label>
        <input
          id='grad'
          type="month"
          name='gradDate'
          value={education.gradDate}
          onChange={storeInput}
        />
        <button>Add Education</button>
      </form>
    </div>
  )
}

AddEducation.propTypes = {
  cv: PropTypes.object,
  submit: PropTypes.func
}
