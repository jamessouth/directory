export default function getCity(person) {
  return person.location.city.trim().replace(/Lousville/i, 'Louisville').replace(/Bueblo/i, 'Pueblo').replace(/mcallen/i, 'McAllen').replace(/flowermound/i, 'Flower Mound').replace(/mckinney/i, 'McKinney').replace(/rochmond/i, 'Richmond');
}
