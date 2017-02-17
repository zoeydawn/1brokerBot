require('dotenv').config({ silent: true });

const {
  userData,
  placeOrder,
  cancelOrder,
  editPosition,
  quotes,
  marketDetails,
} = require('./models/trade');

const stopLossPercentage = 5;
const takeProfitPercentage = 25;
const leverage = 200;
const orderOptions = {
  symbol: 'USDJPY',
  margin: 0.01,
  direction: 'short',
  leverage,
  type: 'market',
};

function placeNewOrder(options) {
  placeOrder(options, (err, data) => {
    if(err) {
      console.log('ERROR:', err);
      return;
    }
    return console.log(data);
  });
};

function edit(options) {
  editPosition(options, (err, data) => {
    if(err) {
      console.log('ERROR:', err);
      return;
    }
    return console.log(data);
  });
};

// let tradesCreated = 0;
function trade() {
  userData((err, data) => {
    if(err) {
      console.log('ERROR:', err);
    } else {
      // const { positions_open, orders_open } = data.responce;
      const positions = data.response.positions_open.length;
      const orders = data.response.orders_open.length;
      console.log(data.response);
      // console.log(data.response.positions_open.length);
      if (!positions && !orders) {
        console.log('No open positions or orders. Creating new order.');
        // placeNewOrder(orderOptions);
        placeOrder(orderOptions, (err, data) => {
          if(err) {
            console.log('ERROR:', err);
          } else {
            console.log('New order created:', data);
          }
          // return setTimeout(() => {
          //   trade();
          // }, 20000);
        });
        // tradesCreated++;
      } else {
        console.log(`${positions} open positions`);
        console.log(`${orders} open orders`);
        if (positions) {
          const { entry_price, position_id, stop_loss, take_profit } = data.response.positions_open[0];
          const entryPrice = parseFloat(entry_price);
          newStopLoss = entryPrice + (entryPrice * (stopLossPercentage/leverage) / entryPrice);
          newTakeProfit = entryPrice - (entryPrice * (takeProfitPercentage/leverage) / entryPrice);
          if (newTakeProfit != take_profit) {
            console.log('Setting new stop_loss and take_profit');
            console.log('entry_price:', entry_price);
            console.log('newStopLoss:', newStopLoss);
            // console.log('stopLoss:', stopLoss);
            console.log('newTakeProfit:', newTakeProfit);
            const editOptions = {
              id: position_id,
              stopLoss: newStopLoss,
              takeProfit: newTakeProfit,
            }
            // edit(editOptions);
            editPosition(editOptions, (err, data) => {
              if(err) {
                console.log('ERROR:', err);
              } else {
                console.log(data);
              }
            });
          } else {
            console.log('stop_loss and take_profit looking good');
          }
        }
      }
    }
  });
  // console.log('tradesCreated:', tradesCreated);
  setTimeout(() => {
    trade();
  }, 20000);
};

trade();
