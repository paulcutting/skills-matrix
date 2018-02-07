import React, { Component } from 'react';
import './App.css';
import uuid from 'node-uuid';
import {createStore} from 'redux'

import { Grid, Row, Col, Panel } from 'react-bootstrap';

import AddTeamMember from './components/AddTeamMember.js';
import AddSkill from './components/AddSkill.js';
import SkillsTable from './components/SkillsTable.js';

import reducer from './reducers/skill'


const store = createStore(reducer);


class App extends Component {

  constructor(props) {
    console.log('...starting!')
    let noTeamMembers = [];
    let teamMembers = [
      {
        id: uuid(),
        name: 'Fred',
        skills: [
          { name: 'react', score: 3 },
          { name: 'redux', score: 2 },
          { name: 'javascript', score: 2 },
          { name: 'C#', score: 0 }
        ]
      },
      {
        id: uuid(),
        name: 'Wilma',
        skills: [
          { name: 'react', score: 3 },
          { name: 'redux', score: 2 },
          { name: 'javascript', score: 2 },
          { name: 'C#', score: 0 }
        ]
      },
      {
        id: uuid(),
        name: 'Barney',
        skills: [
          { name: 'react', score: 1 },
          { name: 'redux', score: 1 },
          { name: 'javascript', score: 1 },
          { name: 'C#', score: 0 }
        ]
      },
      {
        id: uuid(),
        name: 'Betty',
        skills: [
          { name: 'react', score: 1 },
          { name: 'redux', score: 1 },
          { name: 'javascript', score: 1 },
          { name: 'C#', score: 4 }
        ]
      },
      {
        id: uuid(),
        name: 'Paul',
        skills: [
          { name: 'react', score: 0 },
          { name: 'redux', score: 0 },
          { name: 'javascript', score: 0 },
          { name: 'C#', score: 3 }
        ]
      }
    ]

    let skills = [
      { name: 'react', score: 0 },
      { name: 'redux', score: 0 },
      { name: 'javascript', score: 0 },
      { name: 'C#', score: 0 }
    ]

    super(props);
    this.state = {
      teamMembers: noTeamMembers
    };
  }


  handleAddTeamMember = (name) => {
    store.dispatch({
      type: 'ADD_TEAMMEMBER',
      text: name
    })
  }


  handleAddSkill = (skillName) => {
    store.dispatch({
      type: 'ADD_SKILL',
      text: skillName
    });
  }

  handleClickSkill = (skill) => {
    (skill.score < 4) ? skill.score++ : skill.score = 0;
    this.forceUpdate();
  }

  render() {
    let { teamMembers } = this.state;
    const transparentBg = { background: 'transparent' }
    const addSkillIsEnabled =  teamMembers.length > 0

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
                    <AddSkill buttonEnabled = {addSkillIsEnabled} onAddSkill={this.handleAddSkill} />
                  </Panel.Body>
                </Panel>
              </Col>
              <Col xs={12} md={8}>
                <Panel bsStyle="primary">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">Skills Matrix</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <SkillsTable skillsTable={...store.getState()} onClickSkill={this.handleClickSkill} />
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
