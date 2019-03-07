import React from 'react'
import { Modal, Header, Button, Select } from 'semantic-ui-react'

export default function modal(props) {
  return (
    <Modal
      trigger={
        <Button
          circular
          size="mini"
          icon="plus"
          color="blue"
          style={{ margin: 0 }}
        />
      }
      size="mini"
    >
      <Modal.Header>{props.displayName} ({props.position})</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            <b>Overall Rank:</b> {props.overallRank}<br />
            <b>Position:</b> {props.position}<br />
            <b>Team:</b> {props.team}<br />
            <b>Bye Week:</b> {props.byeWeek}<br />
          </p>
          <p>Assign {props.displayName} to a team manager</p>
          <Select
            placeholder='Managers'
            options={[
              {text: 'Team 1'},
              {text: 'Team 2'},
              {text: 'Team 3'},
              {text: 'Team 4'},
              {text: 'Team 5'},
              {text: 'Team 6'},
              {text: 'Team 7'},
              {text: 'Team 8'},
              {text: 'Team 9'},
              {text: 'Team 10'},
            ]}
            style={{ marginRight: '1em' }}
          />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
