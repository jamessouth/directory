export default function getPhoto(person) {
  const photo = person.picture.large;
  return { ...person, photo };
}
