import React from 'react'
import PropTypes from 'prop-types'

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

AddMission.propTypes = {
  cv: PropTypes.object,
  handleChange: PropTypes.func
}
