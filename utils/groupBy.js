export default function groupBy(array, key) {
  return array.reduce((result, currentValue) => {
    if (!(currentValue[key] in result)) {
      result[currentValue[key]] = [];
    }
    result[currentValue[key]].push(currentValue);
    return result;
  }, {});
}
