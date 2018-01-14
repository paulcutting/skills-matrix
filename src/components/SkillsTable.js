import React from 'react';
import { Table } from 'react-bootstrap';

function unique(array) {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i].name === a[j].name) {
        // Combine config
        a.splice(j--, 1);
      }
    }
  }
  return a;
};

class MemberSkills extends React.Component {
  render() {
    let { teamMember } = this.props;

    return (
      teamMember.skills.map((skill) => {
        return (
          <td>{skill.score}</td>
        )
      })
    )
  }
}


class SkillsTable extends React.Component {
  render() {
    var { skillsTable } = this.props;

    // Extract skills list from team list.
    let skills = []

    skillsTable.forEach(person => {
      skills = unique(skills.concat(person.skills))
    });

    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {
              skills.map((skill) => {
                return (
                  <th>{skill.name}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            skillsTable.map((teamMember) => {
              return (
                <tr>
                  <td>{teamMember.name}</td>
                  <MemberSkills teamMember={teamMember} />
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    )
  }
}

export default SkillsTable;