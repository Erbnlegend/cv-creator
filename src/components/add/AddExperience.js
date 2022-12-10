import React from 'react'
import PropTypes from 'prop-types'

export default function AddExperience (props) {
  const { experiences } = props.cv

  const ids = {
    company: document.querySelector('#company'),
    position: document.querySelector('#position'),
    tasks: document.querySelector('#tasks'),
    dateFrom: document.querySelector('#dateFrom'),
    dateTo: document.querySelector('#dateTo')
  }

  const [input, setInput] = React.useState(
    {
      company: '',
      position: '',
      tasks: '',
      dateFrom: '',
      dateTo: ''
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
        id: experiences.length + 1,
        company: input.company,
        position: input.position,
        tasks: input.tasks,
        dateFrom: input.dateFrom,
        dateTo: input.dateTo
      },
      'experiences')
    setInput(
      {
        company: '',
        position: '',
        tasks: '',
        dateFrom: '',
        dateTo: ''
      })
    ids.company.value = ''
    ids.position.value = ''
    ids.tasks.value = ''
    ids.dateFrom.value = ''
    ids.dateTo.value = ''
  }

  return (
    <div>
      <h3>EXPERIENCE</h3>
      <form onSubmit={submit}>
      <label htmlFor='company'>Company Name</label>
        <input
          id='company'
          type="text"
          name='company'
          value={experiences.company}
          onChange={storeInput}
        />
        <label htmlFor='position'>Position/Title</label>
        <input
          id='position'
          type="text"
          name='position'
          value={experiences.position}
          onChange={storeInput}
        />
        <label htmlFor='tasks'>Responsibilities</label>
        <textarea
          id='tasks'
          type="text"
          name='tasks'
          value={experiences.tasks}
          onChange={storeInput}
        />
        <label htmlFor='dateFrom'>Start Date</label>
        <input
          id='dateFrom'
          type="month"
          name='dateFrom'
          value={experiences.dateFrom}
          onChange={storeInput}
        />
        <label htmlFor='dateTo'>End Date</label>
        <input
          id='dateTo'
          type="month"
          name='dateTo'
          value={experiences.dateTo}
          onChange={storeInput}
        />
        <button>Add Experience</button>
      </form>
    </div>
  )
}

AddExperience.propTypes = {
  cv: PropTypes.object,
  submit: PropTypes.func
}
