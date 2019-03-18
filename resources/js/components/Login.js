import React, { useState } from 'react'
import { Segment, Button, Form } from 'semantic-ui-react'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(email, password)
  }

  return (
    <div
      style={{
        width: '550px',
        display: 'block',
        margin: 'auto'
      }}
    >
      <h1>Log in to your account</h1>
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input 
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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
            Log in
          </Button>
          <a href="">Forgot Password?</a>
        </Form>
      </Segment>
    </div>
  )
}
