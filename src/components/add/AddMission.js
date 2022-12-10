import React from 'react'

export default function AddMission (props) {
  const { mission } = props.cv

  return (
    <div className='addMission'>
      <h3>MISSION</h3>
      <form>
      <label htmlFor='mission'>Mission</label>
        <textarea
          type="text"
          name='text'
          data-section='mission'
          value={mission.text}
          onChange={props.handleChange}
        />
      </form>
    </div>
  )
}
