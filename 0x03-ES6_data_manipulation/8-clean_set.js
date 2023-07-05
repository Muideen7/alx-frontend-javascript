function cleanSet(set, startString) {
  const filteredValues = [...set].filter(value => value.startsWith(startString));
  const cleanedString = filteredValues.map(value => value.substring(startString.length)).join('-');
  return cleanedString;
}
