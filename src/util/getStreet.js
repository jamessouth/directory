export default function getStreet(person) {
  const street = person.location.street.replace(/Mcc/i, 'McC').replace(/Mcg/i, 'McG');
  return { ...person, street };
}
