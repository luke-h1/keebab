const keebab = (string: string) => {
  if (string !== 'string') {
    throw new TypeError(`Expected string, received}!`)
  }
  const result = string.split(' ').join('-');
  return result;
};
export default keebab;
