const RE1 = /^\w+/i;
const RE2 = /\w*-?'?\w+$/i;

export default function sortFunc(crit) {
  return function inner(a,b) {
    if (crit === 'first name') {
      return a.name.match(RE1)[0] > b.name.match(RE1)[0] ? 1 : a.name.match(RE1)[0] < b.name.match(RE1)[0] ? -1 : a.name.match(RE2)[0] > b.name.match(RE2)[0] ? 1 : -1;
    } else if (crit === 'last name') {
      return a.name.match(RE2)[0] > b.name.match(RE2)[0] ? 1 : a.name.match(RE2)[0] < b.name.match(RE2)[0] ? -1 : a.name.match(RE1)[0] > b.name.match(RE1)[0] ? 1 : -1;
    } else {
      return a.city.toLowerCase() > b.city.toLowerCase() ? 1 : a.city.toLowerCase() < b.city.toLowerCase() ? -1 : a.name.match(RE1)[0] > b.name.match(RE1)[0] ? 1 : -1;
    }
  }
}
