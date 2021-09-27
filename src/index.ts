const kebab = (string: string) => {
  const result = string.split(' ').join('-');
  return result;
};
export default kebab;
