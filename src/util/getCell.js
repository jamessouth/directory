export default function getCell(person) {
  const cell = person.cell.replace('-', ' ');
  return { ...person, cell };
}
