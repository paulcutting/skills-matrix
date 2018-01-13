import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'node-uuid';

import { Grid, Row, Col, PageHeader, Panel, Button, Table } from 'react-bootstrap';

import TeamMemberList from './components/TeamMemberList.js';
import AddTeamMember from './components/AddTeamMember.js';

class App extends Component {

  constructor(props) {
    console.log('...starting!')

    let teamMembers = [
      {
        id: uuid(),
        name: 'Fred',
        react: 3,
        redux: 2,
        javascript: 2
      },
      {
        id: uuid(),
        name: 'Wilma',
        react: 3,
        redux: 2,
        javascript: 2
      },
      {
        id: uuid(),
        name: 'Barney',
        react: 2,
        redux: 0,
        javascript: 2,
        csharp: 4
      },
      {
        id: uuid(),
        name: 'Betty',
        react: 1,
        redux: 1,
        javascript: 4
      }
    ]

    super(props);
    this.state = {
      teamMembers: teamMembers
    };
  }


  handleAddTeamMember = (name) => {
    console.log('Adding team member: ' + name);
    this.setState({
      teamMembers: [
        ...this.state.teamMembers,
        {
          id: uuid(),
          name: name,
          react: 0,
          redux: 0,
          javascript: 0,
          csharp: 0
        }
      ]
    })
  }

  render() {
    let { teamMembers } = this.state;
    const transparentBg = { background: 'transparent' }

    return (
      <div className="App">
        <div className="page-header">
          <h3> Skills Matrix</h3>
          <h4> <small> Record and analyse your team's skills. </small> </h4>
        </div>

        <div className="jumbotron col-sm-10 col-sm-offset-1" style={transparentBg} >
          <Grid className="Grid-style">
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <Panel bsStyle="primary">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">Edit</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <AddTeamMember onAddTeamMember={this.handleAddTeamMember} />
                  </Panel.Body>
                </Panel>
              </Col>
              <Col xs={12} md={8}>
                <Panel bsStyle="primary">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">Skills Matrix</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>React</th>
                          <th>Redux</th>
                          <th>JavaScript</th>
                          <th>C#</th>
                        </tr>
                      </thead>
                      <TeamMemberList teamMembers={teamMembers} />
                    </Table>
                  </Panel.Body>
                </Panel>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
