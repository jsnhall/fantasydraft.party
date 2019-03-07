import _ from 'lodash'
import React, { Component } from "react"
import { Table, Dimmer, Loader, Input } from 'semantic-ui-react'

import Modal from '../components/Modal'

class Players extends Component {
  state = {
    column: null,
    direction: null,
    players: [],
    results: [],
    value: '',
    searchIsLoading: false,
    pageIsLoading: true
  }

  componentDidMount() {
    axios.get("/api/players")
      .then(response => {
        this.setState({ 
          players: response.data.DraftRankings,
          pageIsLoading: false
        })
      })
      .catch(err => console.log(err))
  }
  
  handleSearchChange = (e, { value }) => {
    this.setState({ 
      value,
      results: this.filterPlayers(this.state.players, value),
      searchIsLoading: true
    })

    setTimeout(() => {
      this.setState({ searchIsLoading: false })
    }, 500)
  }

  filterPlayers = (players, searchKey) => {
    return players.filter(player => Object.keys(player).some(key => {
      const regex = /^[a-zA-Z]+$/
      
      if (searchKey.match(regex))
        return player[key].toString().toLowerCase().includes(searchKey)
    }))
  }

  checkResults = () => {
    if (this.state.results.length > 0) {
      return this.state.results
    }

    return this.state.players
  }

  handleSort = clickedColumn => () => {
    const { column, players, results, direction} = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        players: _.sortBy(players, [clickedColumn]),
        results: _.sortBy(results, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      players: players.reverse(),
      results: results.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const {
      column,
      direction,
      value,
      searchIsLoading,
      pageIsLoading
    } = this.state

    return (
      <>
        {
          pageIsLoading ?
            <Dimmer active inverted>
              <Loader inverted content='Loading' />
            </Dimmer> :
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <div>
                  <h1>Fantasy Players</h1>
                  <p>Assign fantasy players to league managers.</p>
                </div>
                <Input
                  loading={searchIsLoading}
                  onChange={this.handleSearchChange}
                  value={value}
                  icon="search"
                  placeholder="Search player..."
                  results="true"
                />
              </div>
              <Table sortable celled compact fixed>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell
                      width={2}
                      sorted={column === 'overallRank' ? direction : null}
                      onClick={this.handleSort('overallRank')}
                    >
                      Overall Rank
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      sorted={column === 'displayName' ? direction : null}
                      onClick={this.handleSort('displayName')}
                    >
                      Player
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      width={2}
                      sorted={column === 'tier' ? direction : null}
                      onClick={this.handleSort('tier')}
                    >
                      Tier
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      width={2}
                      sorted={column === 'position' ? direction : null}
                      onClick={this.handleSort('position')}
                    >
                      Position
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      width={2}
                      sorted={column === 'team' ? direction : null}
                      onClick={this.handleSort('team')}
                    >
                      Team
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Manager
                    </Table.HeaderCell>
                    <Table.HeaderCell width={1} />
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {_.map(this.checkResults(), ({ 
                    playerId,
                    overallRank,
                    displayName,
                    position,
                    team, 
                    displayNamePlusTeam,
                    byeWeek
                  }) => (
                    <Table.Row key={playerId}>
                      <Table.Cell>{overallRank}</Table.Cell>
                      <Table.Cell>{displayName}</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>{position}</Table.Cell>
                      <Table.Cell>{team}</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell collapsing textAlign="center">
                        <Modal
                          displayNamePlusTeam={displayNamePlusTeam}
                          displayName={displayName}
                          overallRank={overallRank}
                          position={position}
                          team={team}
                          byeWeek={byeWeek}
                        />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </>
        }
      </>
    )
  }
}

export default Players
