export default function getStreet(person) {
  const street = `${person.location.street.number} ${person.location.street.name.replace(/Mcc/i, 'McC').replace(/Mcg/i, 'McG')}`;
  return { ...person, street };
}
