// Store ids should be alphabetic to avoid sparse-array enums

// prettier-ignore
const CHAR_MAP = {
  0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', a: 'k',
  b: 'l', c: 'm', d: 'n', e: 'o', f: 'p', g: 'q', h: 'r', i: 's', j: 't', k: 'u', l: 'v',
  m: 'w', n: 'x', o: 'y', p: 'z'
}

export const generateStoreId = () => {
  return Math.random()
    .toString(26)
    .slice(2)
    .split('')
    .map(char => CHAR_MAP[char])
    .join('')
}

export default generateStoreId
