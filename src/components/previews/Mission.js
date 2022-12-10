import React from 'react'

export default function Mission (props) {
  const { mission } = props.cv

  return (
    <div>
      <div className='mission'>{mission.text}</div>
    </div>
  )
}
