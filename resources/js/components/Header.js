import React, { useState } from 'react'
import axios from 'axios'
import { Menu, Button, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './Login'
import Register from './Register'
import Players from './Players'
import Managers from './Managers'

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState()

  const checkAuth = () => {
    axios.post('/check/auth')
      .then(res => {
        if (res.data) {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }
      })
      .catch(err => console.log(err))
  }

  checkAuth();

  const logOut = () => {
    console.log(isAuthenticated)
    axios.post('/logout')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <Router>
      <>
        <Menu>
          <Menu.Item>
            <a href="/" className="logo">
              FANTASYDRAFT<strong>PARTY</strong>
            </a>
          </Menu.Item>

          <Menu.Item>
            <Link to="/players">Players</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/managers">Managers</Link>
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <div style={{ alignSelf: 'center' }}>
                {
                  !isAuthenticated ?
                  <>
                    <Link to="/login">
                      <Button
                        primary
                        basic
                        compact 
                        style={{
                          fontWeight: 'bold',
                          marginRight: '1em'
                        }}
                      >
                        Log In
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button primary compact>Sign Up</Button>
                    </Link>
                  </> :
                  <Button
                    primary
                    basic
                    compact 
                    style={{
                      fontWeight: 'bold',
                      marginRight: '1em'
                    }}
                    onClick={logOut}
                  >
                    Log Out
                  </Button>
                }
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container style={{ margin: '2em 0' }}>
          <Route path="/login/" component={Login} />
          <Route path="/signup/" component={Register} />
          <Route path="/players/" component={Players} />
          <Route path="/managers/" component={Managers} />
        </Container>
      </>
    </Router>
  )
}
