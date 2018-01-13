
import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';

class AddTeamMember extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    let name = this.inputName.value;

    if (name.length > 0) {
      this.inputName.value = '';
      this.props.onAddTeamMember(name);
    } else {
      this.inputName.value.focus();
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="formInlineName">
            <FormControl inputRef={(input) => this.inputName = input} type="text" placeholder="Team Member" />
            <Button bsStyle="primary" type="submit" >Add Team Member</Button>
          </FormGroup>{' '}
        </form>
      </div>
    );
  }
};

export default AddTeamMember;


