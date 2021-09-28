const keebab = (string: string) => {
  if (string !== 'string') {
    throw new TypeError(`Expected string, received ${string}!`);
  }
  const result = string.split(' ').join('-');
  return result;
};
export default keebab;
