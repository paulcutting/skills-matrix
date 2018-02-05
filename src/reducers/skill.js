import uuid from 'node-uuid';

export default (state, action) => {
  switch (action.type) {
    case 'ADD_SKILL':

      console.log('Adding skill: ' + action.text);
      console.log('State: ' + state);
      //let { teamMembers } = state;

      let newTeamMembers = []

      state.teamMembers.forEach(person => {
        newTeamMembers.push({
          ...person
        })
      });

      newTeamMembers.forEach(newPerson => {
        newPerson.skills.push({
          id: uuid(),
          name: action.text,
          score: 0
        })
      });

      return newTeamMembers;

    case 'REMOVE_SKILL':
      return state;

    default:
      return state;
  }
};