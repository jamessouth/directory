import abbrev from './abbrev';

export default function getEmail(person) {
  const email = person.email.replace(/^\w+(?=\.)/, abbrev).replace(/(\w)\1{2}/g, '$1$1').replace(/^tomothy(?=\.)/, 'timothy');
  return { ...person, email };
}
