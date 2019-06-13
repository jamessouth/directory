import pipe from './pipe';
import getName from './getName';
import getCity from './getCity';
import getState from './getState';
import getStreet from './getStreet';
import getPostcode from './getPostcode';
import getBirthday from './getBirthday';
import getUsername from './getUsername';
import getPhoto from './getPhoto';
import setVisibility from './setVisibility';
import getCell from './getCell';
import getEmail from './getEmail';
import cleanup from './cleanup';

export default function processPeople(people) {
  return people
    .map((person, i) => {
      const key = `${person.login.salt}_${i}`;
      return { ...person, key };
    })
    .map(pipe(
      getName,
      getCity,
      getState,
      getStreet,
      getPostcode,
      getBirthday,
      getUsername,
      getPhoto,
      setVisibility,
      getCell,
      getEmail,
      cleanup
    ));
}
