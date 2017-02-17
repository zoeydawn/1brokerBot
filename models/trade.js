axios = require('axios');

function userData(cb) {
  axios.get(`https://1broker.com/api/v2/user/overview.php?token=${process.env.API_TOKEN}&pretty=1`)
    .then((responce) => {
      return cb(null, responce.data);
    })
    .catch(err => {
      return cb(err);
    });
};

function quotes(assets, cb) {
  const assetStr = assets.join(',');
  axios.get(`https://1broker.com/api/v2/market/quotes.php?token=${process.env.API_TOKEN}&pretty=1&symbols=${assetStr}`)
    .then((responce) => {
      return cb(null, responce.data);
    })
    .catch(err => {
      return cb(err);
    });
};

function marketDetails(symbol, cb) {
  axios.get(`https://1broker.com/api/v2/market/details.php?token=${process.env.API_TOKEN}&pretty=1&symbol=${symbol}`)
    .then((responce) => {
      return cb(null, responce.data);
    })
    .catch(err => {
      return cb(err);
    });
};

function placeOrder(options, cb) {
  const { symbol, margin, direction, leverage, type } = options;
  axios.get(`https://1broker.com/api/v2/order/create.php?token=${process.env.API_TOKEN}&pretty=1&symbol=${symbol}&margin=${margin}&direction=${direction}&leverage=${leverage}&order_type=${type}`)
    .then((responce) => {
      return cb(null, responce.data);
    })
    .catch(err => {
      return cb(err);
    });
};

function cancelOrder(id, cb) {
  axios.get(`https://1broker.com/api/v2/position/close.php?token=${process.env.API_TOKEN}&pretty=1&position_id=${id}`)
  .then((responce) => {
    return cb(null, responce.data);
  })
  .catch(err => {
    return cb(err);
  });
};

function editPosition(options, cb) {
  const { id, stopLoss, takeProfit } = options;
  axios.get(`https://1broker.com/api/v2/position/edit.php?token=${process.env.API_TOKEN}&pretty=1&position_id=${id}&stop_loss=${stopLoss}&take_profit=${takeProfit}&trailing_stop_loss=false`)
  .then((responce) => {
    return cb(null, responce.data);
  })
  .catch(err => {
    return cb(err);
  });
};

module.exports.userData = userData;
module.exports.quotes = quotes;
module.exports.placeOrder = placeOrder;
module.exports.cancelOrder = cancelOrder;
module.exports.editPosition = editPosition;
module.exports.marketDetails = marketDetails;
