const cryptoRandomString = require('crypto-random-string');

const random = cryptoRandomString(16);

console.log('random: ' + random.toString());