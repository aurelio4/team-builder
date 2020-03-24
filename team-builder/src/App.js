import React, { useState, useEffect } from 'react'
import Form from './Form.js'
import './App.css'

const users = [{
  "first_name": "Elonore",
  "email": "erendell0@businesswire.com",
  "role": "Senior Developer"
}, 
{
  "first_name": "Jock",
  "email": "jkydd1@home.pl",
  "role": "Sales Representative"
}]

function App() {
  const [teamMembers, setTeamMembers] = useState()

  useEffect(() => {
    setTeamMembers(users)
  }, [])

  return !teamMembers 
  ? <p>Loading...</p>
  : (
    <div className="App">
      <header>
        <Form users={teamMembers} setUsers={setTeamMembers} />
        {teamMembers.map(member => {
          return (
            <ul>
              <li>{member.first_name}</li>
              <li>{member.email}</li>
              <li>{member.role}</li>
            </ul>
          )
        })}
      </header>
    </div>
  );
}

export default App;
