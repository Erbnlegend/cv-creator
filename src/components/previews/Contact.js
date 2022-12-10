import React from 'react'

export default function Contact (props) {
  const { contact } = props.cv

  return (
    <div>
      <div className='name'>{contact.firstName} {contact.lastName}</div>
      <div className='description'>{contact.title}</div>
      <h3>Personal Info</h3>
      <h2>Phone:</h2>
      <div className='info'>{contact.phone}</div>
      <h2>Email:</h2>
      <div className='info'>{contact.email}</div>
    </div>
  )
}
