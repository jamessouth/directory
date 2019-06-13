export default function navigateEmployees(emps, updateFunc) {
  return function(dir, beginIndex) {
    const start = dir === 'next' ? parseInt(beginIndex, 10) + 1 : parseInt(beginIndex, 10) - 1;
    for(
      let i = dir === 'next' ? 0 : emps.length;
      dir === 'next' ? i < emps.length : i > -1;
      dir === 'next' ? i++ : i--
    ){
      if(emps[(i + start) % emps.length].isVisible) {
        updateFunc(emps[(i + start) % emps.length]);
        break;
      }
    }
  }
}
