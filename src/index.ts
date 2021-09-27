const keebab = (string: string) => {
  const result = string.split(' ').join('-');
  return result;
};
export default keebab;
