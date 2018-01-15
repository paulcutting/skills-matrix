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
      teamMembers: teamMembers,
      skills: skills
    };
  }


  handleAddTeamMember = (name) => {
    console.log('Adding team member: ' + name);
    let { skills } = this.state;

    this.setState({
      teamMembers: [
        ...this.state.teamMembers,
        {
          id: uuid(),
          name: name,
          skills: skills
        }
      ]
    })
  }


  handleAddSkill = (skillName) => {
    console.log('Adding skill: ' + skillName);
    let { teamMembers, skills } = this.state;

    teamMembers.forEach(person => {
      person.skills.push({
        name: skillName,
        score: 0
      })
    });

    skills.push({
      name: skillName,
      score: 0
    })

    this.setState({
      teamMembers: teamMembers,
      skills: skills
    })
  }


  handleClickSkill = (skill) => {
    skill.score++;
    this.forceUpdate();
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
                    <AddSkill onAddSkill={this.handleAddSkill} />
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
