import getCity from './getCity';
import getState from './getState';
import getStreet from './getStreet';
import getPhoto from './getPhoto';
import cleanup from './cleanup';
import getCell from './getCell';
import getEmail from './getEmail';
import setVisibility from './setVisibility';
import getBirthday from './getBirthday';
import getUsername from './getUsername';
import getPostcode from './getPostcode';
import getName from './getName';
import pipe from './pipe';

export default function processPeople(people){

  return people.map((person, i) => {
    const key = `${person.login.salt}_${i}`;
    return { ...person, key };
  }).map(pipe(getName, getCity, getState, getStreet, getPostcode, getBirthday, getUsername, getPhoto, setVisibility, getCell, getEmail, cleanup));



    // people.forEach((p,i) => {
			// p.name = getName(p);
			// p.location.city = getCity(p);
			// for(let st in states_hash){
			// 	if(p.location.state.toLowerCase() === st.toLowerCase()){
			// 		p.location.state = states_hash[st];
			// 		break;
			// 	}
			// }
			// p.location.street = p.location.street.replace(/Mcc/i, 'McC').replace(/Mcg/i, 'McG');
			// p.bday = new Date(p.dob.date);
			// [p.yr, p.mo, p.day] = [p.bday.getFullYear().toString().replace(/^\d{2}/, ''), (p.bday.getMonth() + 1).toString(), p.bday.getDate().toString()];
			// p.user = p.login.username;
			// p.key = p.login.salt + '_' + i;
			// p.pic = p.picture.large;
			// p.isVisible = true;
			// p.cell = p.cell.replace('-', ' ');
			// p.email = p.email.replace(/^\w+(?=\.)/, abbrev).replace(/(\w)\1{2}/g, '$1$1').replace(/^tomothy(?=\.)/, 'timothy');
			// delete p.login;
			// delete p.picture;
			// delete p.bday;
			// delete p.dob;
    // });
		// return people;
  }
