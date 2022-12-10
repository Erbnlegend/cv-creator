import React from 'react'

export default function EditExperience (props) {
  const { id, company, position, tasks, dateFrom, dateTo } = props.experiences

  function togglePreview () {
    // call app edit to change state
    props.toggle()
    submitEdit()
  }

  function submitEdit () {
    props.edit(
      {
        id: input.id,
        company: input.company,
        position: input.position,
        tasks: input.tasks,
        dateFrom: input.dateFrom,
        dateTo: input.dateTo
      },
      'experiences')
  }

  const [input, setInput] = React.useState(
    {
      id,
      company,
      position,
      tasks,
      dateFrom,
      dateTo
    }
  )

  function storeInput (e) {
    const { name, value } = e.target

    setInput(() => ({ ...input, [name]: value }))
  }

  return (
    <div>
      <div className="experiences">
        <div className='flexDate'>
        <label htmlFor='dateFrom'>From</label>
          <input
            type='text'
            name='dateFrom'
            value={input.dateFrom}
            onChange={storeInput}

          />
        <label htmlFor='dateTo'>To</label>
          <input
            type='text'
            name='dateTo'
            value={input.dateTo}
            onChange={storeInput}

          />
        </div>
        <div className='flexInfo'>
        <label htmlFor='company'>company</label>
          <input
            type='text'
            name='company'
            value={input.company}
            onChange={storeInput}

          />
          <label htmlFor='position'>Position</label>
          <input
            type='text'
            name='position'
            value={input.position}
            onChange={storeInput}
          />
          <label htmlFor=''>tasks:</label>
          <textarea
            type='text'
            name='tasks'
            value={input.tasks}
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
