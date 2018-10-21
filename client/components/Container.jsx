import React from 'react';
const $ = require('jquery');
//import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

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
    const backgroundImage = require('../img/logo.jpg');

    const StyledPaper = styled(Paper)`
      background-image: url('build/${backgroundImage}');
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;
      background-size: cover;
    `;

    const StyledTableCell = styled(TableCell)`
      color: white !important;
    `;

    const matches = this.state.footballData.matches;
    return (
      <StyledPaper>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Stage</StyledTableCell>
              <StyledTableCell>Group</StyledTableCell>
              <StyledTableCell>Team 1</StyledTableCell>
              <StyledTableCell>Team 2</StyledTableCell>
              <StyledTableCell>Winner</StyledTableCell>
              <StyledTableCell>Score</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { matches.map(match => {
              const {
                id,
                homeTeam,
                awayTeam,
                utcDate,
                stage,
                group,
                score
              } = match;

              return (
                <TableRow key={id}>
                  <StyledTableCell>{utcDate}</StyledTableCell>
                  <StyledTableCell>{stage}</StyledTableCell>
                  <StyledTableCell>{group}</StyledTableCell>
                  <StyledTableCell>{homeTeam.name}</StyledTableCell>
                  <StyledTableCell>{awayTeam.name}</StyledTableCell>
                  {( () => {
                    if (score.winner === 'HOME_TEAM') {
                      return (
                        <StyledTableCell>
                          {homeTeam.name}
                        </StyledTableCell>
                      );
                    } else {
                      return (
                        <StyledTableCell>
                          {awayTeam.name}
                        </StyledTableCell>
                      );
                    }
                  })()}
                  <StyledTableCell>
                    {score.fullTime.homeTeam}-{score.fullTime.awayTeam}
                  </StyledTableCell>
                </TableRow>
              );
             })}
          </TableBody>
        </Table>
      </StyledPaper>
    );
  }

  render() {
    if (this.state.footballData) {
      return this.renderTable();
    }
    return null;
  }
}
