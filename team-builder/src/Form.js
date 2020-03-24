import React, { useState, useEffect } from 'react'

function Form(props) {
  const [formValue, setFormValue] = useState({
    fName: '',
    email: '',
    role: ''
  })

  const onInputChange = e => {
    const changedInput = e.target.name
    const newValue = e.target.value
    setFormValue({
      ...formValue,
      [changedInput]: newValue,
    })
  }

  const onFormSubmit = e => {
    e.preventDefault()
    const newTeamMember = {
      first_name: formValue.fName,
      email: formValue.email,
      role: formValue.role 
    }
    props.setUsers([...props.users, newTeamMember])
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="fname">First Name: </label>
        <input id="fname" name="fName" value={formValue.fName} onChange={onInputChange}></input>
        <br />
        <label htmlFor="email">Email: </label>
        <input id="email" name="email" value={formValue.email} onChange={onInputChange}></input>
        <br />
        <label htmlFor="role">Role: </label>
        <input id="role" name="role" value={formValue.role} onChange={onInputChange}></input>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>  
  )
}

export default Form