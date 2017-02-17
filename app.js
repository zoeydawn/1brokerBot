require('dotenv').config({ silent: true });

const {
  userData,
  placeOrder,
  cancelOrder,
  editPosition,
  quotes,
  marketDetails,
} = require('./models/trade');

function trade() {
  userData((err, data) => {
    if(err) {
      console.log('ERROR:', err);
    } else {
      const { positions_open, orders_open } = data.responce;
      console.log(data.response);
      // console.log(data.response.positions_open.length);
      if (!positions_open.length && !orders_open.length) {
        console.log('NO OPEN POSITIONS OR ORDERS');
      } else {
        console.log(`${positions_open.length} positions open`);
        console.log(`${orders_open.length} orders open`);
      }
    }
  });
  setTimeout(() => {
    trade();
  }, 20000)
};

trade();
