require('dotenv').config({ silent: true });

const {
  userData,
  placeOrder,
  cancelOrder,
  editPosition,
  quotes,
  marketDetails,
} = require('./models/trade');

// ----------- // GET USER DATA // ----------- //
function getUserData() {
  userData((err, data) => {
    if(err) {
      console.log('ERROR:', err);
      return;
    }
    return console.log(data.response);
  });
};

// ----------- // GET QUOTES // ----------- //
function getQuotes(arr) {
  quotes(arr, (err, data) => {
    if(err) {
      console.log('ERROR:', err);
      return;
    }
    return console.log(data.response);
  });
};

// ----------- // GET MARKET DETAILS // ----------- //
function details(symbol) {
  marketDetails(symbol, (err, data) => {
    if(err) {
      console.log('ERROR:', err);
      return;
    }
    return console.log(data.response);
  });
};

// ----------- // PLACE ORDER // ----------- //
function placeNewOrder(options) {
  placeOrder(options, (err, data) => {
    if(err) {
      console.log('ERROR:', err);
      return;
    }
    return console.log(data);
  });
};

// ----------- // EDIT ORDER // ----------- //
function edit(options) {
  editPosition(options, (err, data) => {
    if(err) {
      console.log('ERROR:', err);
      return;
    }
    return console.log(data);
  });
};

// ----------- // CANCEL ORDER // ----------- //
function cancel(id) {
  cancelOrder(id, (err, data) => {
    if(err) {
      console.log('ERROR:', err);
      return;
    }
    return console.log(data.response);
  });
};

// getUserData();

// getQuotes(['USDJPY', 'GOLD']);

// details('USDJPY');

// const newOrderOptions = {
//   symbol: 'USDJPY',
//   margin: 0.02,
//   direction: 'long',
//   leverage: '1',
//   type: 'market',
// };
// placeNewOrder(newOrderOptions);

// const editOptions = {
//   id: 1076567,
//   stopLoss: 200,
//   takeProfit: 75,
// }
// edit(editOptions);


function go() {
  userData((err, data) => {
    if(err) {
      console.log('ERROR:', err);
    } else {
      console.log(data.response);
      // console.log(data.response.positions_open.length);
      if (!data.response.positions_open.length) {
        console.log('TRUE');
      }
    }
  });
  setTimeout(() => {
    go();
  }, 30000)
};

// go();
