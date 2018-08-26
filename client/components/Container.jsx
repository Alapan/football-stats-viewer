import React from 'react';
const $ = require('jquery');
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

export default class Container extends React.Component {

  constructor() {
    super();
    this.state = {
      footballData: ''
    };
  }

  componentDidMount() {
    // 2000 is the World Cup ID
    $.ajax({
      url: 'http://api.football-data.org/v2/competitions/2000/matches',
      method: 'GET',
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-Auth-Token', '18531bdfdc0b4ba9a732ebf5e62abf4f');
      },
      success: (data) => {
      	this.setState({
          footballData: data
      	});
      }
    });
  }

  renderTable() {
    const matches = this.state.footballData.matches;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Group</TableCell>
              <TableCell>Team 1</TableCell>
              <TableCell>Team 2</TableCell>
              <TableCell>Winner</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { matches.map(match => {
          	  return (
                <TableRow key={match.id}>
                  <TableCell>{match.utcDate}</TableCell>
                  <TableCell>{match.stage}</TableCell>
                  <TableCell>{match.group}</TableCell>
                  <TableCell>{match.homeTeam.name}</TableCell>
                  <TableCell>{match.awayTeam.name}</TableCell>
                  {( () => {
                    if (match.score.winner === 'HOME_TEAM') {
                      return <TableCell>{match.homeTeam.name}</TableCell>;
                    } else {
                      return <TableCell>{match.awayTeam.name}</TableCell>;
                    }
                  })()}
                  <TableCell>
                    {match.score.fullTime.homeTeam}-{match.score.fullTime.awayTeam}
                  </TableCell>
                </TableRow>
              );
             })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  render() {
    if (this.state.footballData) {
      return this.renderTable();
    }
    return null;
  }
}
