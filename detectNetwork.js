// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

 if (cardNumber === null || cardNumber === undefined) {
  return "null";
 }
 var prefixOne = parseInt(cardNumber.slice(0, 1));
 var prefixTwo = parseInt(cardNumber.slice(0, 2));
 var prefixThree = parseInt(cardNumber.slice(0, 3));
 var prefixFour = parseInt(cardNumber.slice(0, 4));
 var prefixSix = parseInt(cardNumber.slice(0, 6));

 if ((prefixTwo === 34 || prefixTwo === 37) && cardNumber.length === 15) {
  return 'American Express';
 }

 if ((prefixTwo === 38 || prefixTwo === 39) && cardNumber.length === 14) {
  return "Diner's Club";
 }

 if (prefixOne === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  return 'Visa';
 }

 if ((prefixTwo >= 51 && prefixTwo <= 55) && (cardNumber.length === 16)) {
  return 'MasterCard';
 }

 if ((prefixFour === 6011 || prefixTwo === 65 || prefixThree >= 644 && prefixThree <= 649) && cardNumber.length === 16 || cardNumber.length === 19) {
  return 'Discover';
 }

 if (prefixTwo === 62 && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
  return 'China UnionPay';
 }
 if ((prefixFour === 5018 || prefixFour === 5020 || prefixFour === 5038 || prefixFour === 6304) && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
  return 'Maestro';
 }

 if ((prefixFour === 4903 || prefixFour === 4905 || prefixFour === 4911 || prefixFour === 4936 || prefixFour === 6333 || prefixFour === 6759 || prefixSix === 564182 || prefixSix === 633110) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
  {
   return 'Switch';
  }
 }
};

/*
detectNetwork('38345678901234');
detectNetwork('373456789012345');
detectNetwork('39345678901234');
detectNetwork('343456789012345');


detectNetwork('38345678901234');
detectNetwork('39345678901234');
detectNetwork('343456789012345');
detectNetwork('373456789012345');
detectNetwork('4123456789012');
detectNetwork('4123456789012345');
detectNetwork('4123456789012345678');
detectNetwork('5112345678901234');
detectNetwork('5212345678901234');
detectNetwork('5312345678901234');
detectNetwork('5412345678901234');
detectNetwork('5512345678901234'); */ 