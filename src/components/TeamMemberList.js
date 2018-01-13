import React from 'react';
import { Table } from 'react-bootstrap';


class TeamMemberList extends React.Component {
  render() {
    var { teamMembers } = this.props;
    return (
      <tbody>
        {
          teamMembers.map((teamMember) => {
            return (
              <tr>
                <td>{teamMember.name}</td>
              </tr>
            )
          })
      }
      </tbody>
    )
  }
}

export default TeamMemberList;