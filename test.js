require('dotenv').config({ silent: true });

const { userData, placeOrder, cancelOrder } = require('./models/trade');

// ----------- // GET USER DATA // ----------- //
userData((err, data) => {
  if(err) {
    console.log('ERROR:', err);
    return;
  }
  return console.log(data.response);
});

// ----------- // PLACE ORDER // ----------- //
// const options = {
//   symbol: 'USDJPY',
//   margin: 0.02,
//   direction: 'short',
//   leverage: '1',
//   type: 'market',
// };
// placeOrder(options, (err, data) => {
//   if(err) {
//     console.log('ERROR:', err);
//     return;
//   }
//   return console.log(data);
// });

// ----------- // CANCEL ORDER // ----------- //
// const id = 1076532;
// cancelOrder(id, (err, data) => {
//   if(err) {
//     console.log('ERROR:', err);
//     return;
//   }
//   return console.log(data.response);
// });
