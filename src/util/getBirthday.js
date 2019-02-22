export default function getBirthday(person) {
  const bday = new Date(person.dob.date);
  const [year, month, day] = [
    bday.getFullYear().toString().replace(/^\d{2}/, ''),
    (bday.getMonth() + 1).toString(),
    bday.getDate().toString()
  ];
  return { ...person, year, month, day };
}
