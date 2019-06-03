import React, { useState } from 'react'
import { Segment, Button, Form, Message } from 'semantic-ui-react'
import axios from 'axios'

import ErrorMsg from './ErrorMsg'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  // Errors
  const [nameError, setNameError] = useState([])
  const [emailError, setEmailError] = useState([])
  const [passwordError, setPasswordError] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('/register', {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .then(res => console.log(res.data))
      .catch(err => {
        let errors = err.response.data.errors

        setNameError(errors.name)
        setEmailError(errors.email)
        setPasswordError(errors.password)
      })
  }

  return (
    <div
      style={{
        width: '550px',
        display: 'block',
        margin: 'auto'
      }}
    >
      <h1>Create your account</h1>
      <Segment>
        <Form method="POST" onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input 
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            { nameError && nameError.map((msg, i) => <ErrorMsg key={i} msg={msg} />) }
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input 
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            { emailError && emailError.map((msg, i) => <ErrorMsg key={i} msg={msg} />) }
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            { passwordError && passwordError.map((msg, i) => <ErrorMsg key={i} msg={msg} />) }
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
          </Form.Field>
          <Button
            style={{
              marginBottom: '1em'
            }}
            type="submit"
            fluid
            primary
          >
            Sign up
          </Button>
        </Form>
      </Segment>
    </div>
  )
}
