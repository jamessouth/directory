export default function handleChange(updateFunc, propFunc) {
  return function(ev) {
    updateFunc(ev.target.value);
    propFunc(ev.target.value);
  }
}
