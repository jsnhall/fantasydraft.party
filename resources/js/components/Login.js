import React from 'react'
import { Segment, Button, Form } from 'semantic-ui-react'

export default function Login() {
  return (
    <div
      style={{
        width: '550px',
        display: 'block',
        margin: 'auto'
      }}
    >
      <h1>Sign in to your account</h1>
      <Segment>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input type="email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" />
          </Form.Field>
          <Button
            style={{
              marginBottom: '1em'
            }}
            type="submit"
            fluid
            primary
          >
            Login
          </Button>
          <a href="">Forgot Password?</a>
        </Form>
      </Segment>
    </div>
  )
}
