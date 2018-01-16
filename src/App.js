import React, { Component } from 'react';
import './App.css';
import uuid from 'node-uuid';

import { Grid, Row, Col, Panel } from 'react-bootstrap';

import AddTeamMember from './components/AddTeamMember.js';
import AddSkill from './components/AddSkill.js';
import SkillsTable from './components/SkillsTable.js';

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
    console.log('Adding team member: ' + name);
    let { teamMembers } = this.state;

    // Pure function - do not mutate array.
    let newTeamMembers = [];

    teamMembers.forEach(person => {
      newTeamMembers.push({
        ...person
      })
    });

    // get list of skills from existing users
    let newMemberSkills = [];
    if (teamMembers.length > 0) {
      teamMembers[0].skills.forEach(skill => {
        newMemberSkills.push({
          name: skill.name,
          score: 0
        });
      })
    }

    newTeamMembers.push(
      {
        id: uuid(),
        name: name,
        skills: newMemberSkills
      }
    );

    this.setState({
      teamMembers: newTeamMembers
    });

    console.log(this.state.teamMembers);
  }


  handleAddSkill = (skillName) => {
    console.log('Adding skill: ' + skillName);
    let { teamMembers } = this.state;

    let newTeamMembers = []

    teamMembers.forEach(person => {
      newTeamMembers.push({
        ...person
      })
    });

    newTeamMembers.forEach(newPerson => {
      newPerson.skills.push({
        name: skillName,
        score: 0
      })
    });

    this.setState({
      teamMembers: newTeamMembers
    })

    console.log(this.state.skills);
    console.log(this.state.teamMembers);
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
                    <SkillsTable skillsTable={teamMembers} onClickSkill={this.handleClickSkill} />
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
