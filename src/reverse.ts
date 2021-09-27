
const regexUnicode = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
const regexAstral = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;


async function reverse(string: string) {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected a string, received ${string}!`);
  }
  let str: string = '';
  str = string.replace(regexUnicode, ($0, $1, $2) => {
    return reverse($2) + $1;
  }).replace(regexAstral, '$2$1'); 

  let result: string = '';
  for (let i = str.length -1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
export default reverse;
