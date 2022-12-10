import React from 'react'

export default function AddContact (props) {
  const { contact } = props.cv

  return (
    <div>
      <h3>CONTACT</h3>
      <form>
      <label htmlFor='firstName'>First Name</label>
        <input
          type="text"
          name='firstName'
          data-section='contact'
          value={contact.firstName}
          onChange={props.handleChange}
        />
        <label htmlFor='firstName'>Last Name</label>
        <input
          type="text"
          name='lastName'
          data-section='contact'
          value={contact.lastName}
          onChange={props.handleChange}
        />
        <label htmlFor='firstName'>Profession</label>
        <input
          type="text"
          name='title'
          data-section='contact'
          value={contact.title}
          onChange={props.handleChange}
        />
        <label htmlFor='firstName'>Phone</label>
        <input
          type="text"
          name='phone'
          data-section='contact'
          value={contact.phone}
          onChange={props.handleChange}
        />
        <label htmlFor='firstName'>Email</label>
        <input
          type="email"
          name='email'
          data-section='contact'
          value={contact.email}
          onChange={props.handleChange}
        />
      </form>
    </div>
  )
}
