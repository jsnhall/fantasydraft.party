import React, { useState } from 'react'
import axios from 'axios'
import { Segment, Form, Button, Grid, List, Message, Icon } from 'semantic-ui-react'

export default function Managers() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [managers, setManagers] = useState([])

  function addManager() {
    const managerObj = {name, email}
    setManagers([...managers, managerObj])
    setName('')
    setEmail('')

    axios.post('/managers/store', {
      name,
      email
    })
      .then(bla => console.log(bla))
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1>League Managers</h1>
      <p>Add the name and email of all managers in your league.</p>
      
        <Grid columns={2}>
          <Grid.Column>
            <Segment>
              <h2>Add Manager</h2>
              <Form>
                <Form.Input
                  id="name"
                  label="Name"
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <Form.Input
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Button color="blue" onClick={addManager}>Add Manager</Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h2>Team Managers</h2>
                <p>Total managers: {managers.length}</p>
              </div>
              {
                managers.length === 0 &&
                <Message warning>
                  You haven't added any managers yet.
                </Message>
              }
              {managers.map((manager, i) => (
                <Segment key={i}>
                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <List style={{ marginBottom: '0' }}>
                      <List.Item>
                        <List.Icon name="user outline" />
                        <List.Content>{manager.name}</List.Content>
                      </List.Item>
                      {
                        manager.email &&
                        <List.Item>
                          <List.Icon name="mail outline" />
                          <List.Content>{manager.email}</List.Content>
                        </List.Item>
                      }
                    </List>
                    <Icon name="edit outline"/>
                  </div>
                </Segment>
              ))}
            </Segment>
          </Grid.Column>
      </Grid>      
    </>
  )
}
