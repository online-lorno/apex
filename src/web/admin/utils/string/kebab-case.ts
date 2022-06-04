// https://github.com/angus-c/just/tree/master/packages/string-kebab-case

const wordSeparators =
  // eslint-disable-next-line no-useless-escape
  /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/
const capital_plus_lower = /[A-ZÀ-Ý\u00C0-\u00D6\u00D9-\u00DD][a-zà-ÿ]/g
const capitals = /[A-ZÀ-Ý\u00C0-\u00D6\u00D9-\u00DD]+/g

const kebabCase = (str: string) => {
  // replace word starts with space + lower case equivalent for later parsing
  // 1) treat cap + lower as start of new word
  str = str.replace(capital_plus_lower, function (match) {
    // match is one caps followed by one non-cap
    return ' ' + (match[0].toLowerCase() || match[0]) + match[1]
  })
  // 2) treat all remaining capitals as words
  str = str.replace(capitals, function (match) {
    // match is a series of caps
    return ' ' + match.toLowerCase()
  })
  return str.trim().split(wordSeparators).join('-')
}

export default kebabCase
