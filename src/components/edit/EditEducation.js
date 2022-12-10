import React from 'react'
import PropTypes from 'prop-types'

export default function EditEducation (props) {
  const { id, school, study, gpa, gradDate } = props.education

  function togglePreview () {
    // call app edit to change state
    props.toggle()
    submitEdit()
  }

  function submitEdit () {
    props.edit(
      {
        id: input.id,
        school: input.school,
        study: input.study,
        gpa: input.gpa,
        gradDate: input.gradDate
      },
      'education')
  }

  const [input, setInput] = React.useState(
    {
      id,
      school,
      study,
      gpa,
      gradDate
    }
  )

  function storeInput (e) {
    const { name, value } = e.target

    setInput(() => ({ ...input, [name]: value }))
  }

  return (
    <div>
      <div className="education">
        <div className='flexDate'>
        <label htmlFor='gradDate'>Grad Date:</label>
          <input
            type='text'
            name='gradDate'
            value={input.gradDate}
            onChange={storeInput}

          />
        </div>
        <div className='flexInfo'>
        <label htmlFor='school'>School</label>
          <input
            type='text'
            name='school'
            value={input.school}
            onChange={storeInput}

          />
          <label htmlFor='study'>Degree</label>
          <input
            type='text'
            name='study'
            value={input.study}
            onChange={storeInput}
          />
          <label htmlFor=''>GPA:</label>
          <input
            type='text'
            name='gpa'
            value={input.gpa}
            onChange={storeInput}
          />
        </div>
        <div className='options'>
          <button className='save' onClick={togglePreview}>Save</button>
        </div>
      </div>
    </div>
  )
}

EditEducation.propTypes = {
  edit: PropTypes.func,
  education: PropTypes.object,
  toggle: PropTypes.func
}
