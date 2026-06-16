require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing DB Connection...');
console.log('URI:', process.env.MONGDODB ? process.env.MONGDODB.replace(/:([^:@]{3,})@/, ':***@') : 'UNDEFINED');

mongoose.connect(process.env.MONGDODB)
  .then(() => {
    console.log('SUCCESSFULLY CONNECTED!');
    process.exit(0);
  })
  .catch(err => {
    console.error('FAILED TO CONNECT:');
    console.error(err);
    process.exit(1);
  });
