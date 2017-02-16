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

function placeOrder(options, cb) {
  const { symbol, margin, direction, leverage, type } = options;
  axios.get(`https://1broker.com/api/v2/order/create.php?token=${process.env.API_TOKEN}&pretty=1&symbol=${symbol}&margin=${margin}&direction=${direction}&leverage=${leverage}&order_type=${type}`)
    .then((responce) => {
      // console.log('responce.data:', responce.data);
      // res.send(responce.data);
      return cb(null, responce.data);
    })
    .catch(err => {
      // res.status(400).send(err)
      return cb(err);
    });
};

function cancelOrder(id, cb) {
  axios.get(`https://1broker.com/api/v2/position/close.php?token=${process.env.API_TOKEN}&pretty=1&position_id=${id}`)
  .then((responce) => {
    // console.log('responce.data:', responce.data);
    // res.send(responce.data);
    return cb(null, responce.data);
  })
  .catch(err => {
    // res.status(400).send(err)
    return cb(err);
  });
}

module.exports.userData = userData;
module.exports.placeOrder = placeOrder;
module.exports.cancelOrder = cancelOrder;
