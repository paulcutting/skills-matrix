
import React from 'react';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

class AddSkill extends React.Component {
  onSubmit = (e) => {
    console.log('Add Skill: ' + this.inputSkillName.value);
    e.preventDefault();
    let skillName = this.inputSkillName.value;

    if (skillName.length > 0) {
      this.inputSkillName.value = '';
      this.props.onAddSkill(skillName);
    } else {
      this.inputSkillName.value.focus();
    }
  }
  render() {
    let { buttonEnabled } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="formInlineSkillName">
            <FormControl inputRef={(input) => this.inputSkillName = input} type="text" placeholder="Skill" />
            <Button disabled={!buttonEnabled} bsStyle="primary" type="submit" >Add Skill</Button>
          </FormGroup>{' '}
        </form>
      </div>
    );
  }
};

export default AddSkill;


