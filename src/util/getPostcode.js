export default function getPostcode(person) {
  const postcode = person.location.postcode;
  return { ...person, postcode };
}
