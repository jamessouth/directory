import caps from './caps';

export default function getName(person) {
  return `${person.name.first.trim()
    .replace(/([A-zÀ-ÿğŞı]+|\w+[A-zÀ-ÿğŞı]*)\w*$/gi, caps)
    .replace(/jean-/, 'Jean-')
    .replace(/Tomothy|Timmothy/, 'Timothy')
    .replace(/filipe/, 'Filipe')
    .replace(/hans-/, 'Hans-')
    .replace(/zine-/, 'Zine-')
    .replace(/sue-/, 'Sue-')
    .replace(/ernst-/, 'Ernst-')
    .replace(/klaus-/, 'Klaus-')
    .replace(/aart-/, 'Aart-')
    .replace(/anne-/, 'Anne-')
    .replace(/franz-/, 'Franz-')} ${person.name.last.trim()
      .replace(/([A-zÀ-ÿğŞı]+|\w+[A-zÀ-ÿğŞı]*)\w*$/gi, caps)
      .replace(/cdonal/, 'cDonal')
      .replace(/toole/, "'Toole")
      .replace(/brien/, "'Brien")
      .replace(/donoghue/, "'Donoghue")
      .replace(/mahony/, "'Mahony")
      .replace(/(\w)\1{2}/g, '$1$1')
      .replace(/jean-/, 'Jean-')
      .replace(/^mccoy/i, 'McCoy')
      .replace(/^mck\w+/i, 'McKinney')}`;
}
