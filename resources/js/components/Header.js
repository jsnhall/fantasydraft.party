import React from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Players from './Players'
import Managers from './Managers'

export default function Header() {
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
                <Button primary compact>Sign Up</Button>
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container style={{ margin: '2em 0' }}>
          <Route path="/players/" component={Players} />
          <Route path="/managers/" component={Managers} />
        </Container>
      </>
    </Router>
  )
}
