// g - Global
// i - Ignore Case

const text = 'Carlos assinou o abaixo-assinado.'
console.log(text.match(/C|ab/))
console.log(text.match(/c|ab/i))
console.log(text.match(/ab|c/gi))