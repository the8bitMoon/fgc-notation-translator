import escapeRegExp from './escapeRegExp.js';

export default function buildPattern(map) {
  console.log('map:', map);
  const array = map.map(element => escapeRegExp(element.notation));
  const patternString = '(' + array.join('|') + ')';
  return new RegExp(patternString);
}
