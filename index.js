const dictionary = {
  0: 'sıfır',
  1: 'bir',
  2: 'iki',
  3: 'üç',
  4: 'dört',
  5: 'beş',
  6: 'altı',
  7: 'yedi',
  8: 'sekiz',
  9: 'dokuz',
  10: 'on',
  20: 'yirmi',
  30: 'otuz',
  40: 'kırk',
  50: 'elli',
  60: 'altmış',
  70: 'yetmiş',
  80: 'seksen',
  90: 'doksan',
}

function getTurkishNumber(num) {
  if (!(num >= 0 && num <= 99)) throw new Error('Please give a number between 0 and 100.')

  if (num in dictionary) return dictionary[num]

  const digits = num.toString().split('')

  return digits.map((digit, index) => dictionary[digit * Math.pow(10, digits.length - 1 - index)]).join(' ')
}

module.exports = getTurkishNumber
