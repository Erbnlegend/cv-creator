import React from 'react'
import PropTypes from 'prop-types'

export default function Mission (props) {
  const { mission } = props.cv

  return (
    <div>
      <div className='mission'>{mission.text}</div>
    </div>
  )
}

Mission.propTypes = {
  cv: PropTypes.object
}
