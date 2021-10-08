//2.A.
var phrase = 'this phrase will turn to upper case';
var phraseConverted = phrase.toUpperCase();
console.log(phraseConverted);

//2.B.
var quote = 'i want some coffee';
var shortQuote = quote.substring(0,5);
console.log(shortQuote);

//2.C.
var endQuote = quote.substring(18,15);
console.log(endQuote);

//2.D.
var firstLetter = quote.substring(0,1);
var firstLetterCapital = firstLetter.toUpperCase();
var restQuote = quote.substring(2,18);
var fullQuote= firstLetterCapital + restQuote;
console.log(fullQuote);

//2.E.
var blankSpace = quote.indexOf(' ');
console.log(blankSpace);

//2.F.
var longPhrase = 'cold coffee';
var firstWordCapital = longPhrase.substring(0,1).toUpperCase();
var firstWordRest = longPhrase.substring(1,5);
var secondWordCapital = longPhrase.substring(5,6).toUpperCase();
var secondWordRest = longPhrase.substring(6,11);

console.log(firstWordCapital+firstWordRest + secondWordCapital+secondWordRest);