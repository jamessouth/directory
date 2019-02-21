import US_STATES from './US_STATES';

export default function getState(person) {
  const state = US_STATES[Object.keys(US_STATES).find(s => s === person.location.state.trim().toUpperCase())];
  return { ...person, state };
}
