export default function getUsername(person) {
  const username = person.login.username;
  return { ...person, username };
}
