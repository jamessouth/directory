export default function cleanup(person) {
  ['dob', 'location', 'login', 'picture'].forEach(k => delete person[k]);
  return { ...person };
}
