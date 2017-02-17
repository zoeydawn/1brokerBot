// const express = require('express');
// const router = express.Router();
// axios = require('axios');
//
// const { userData, placeOrder } = require('../models/trade');
//
// // get user info
// router.route('/user')
//   .get((req, res) => {
//     // axios.get(`https://1broker.com/api/v2/user/overview.php?token=${process.env.API_TOKEN}&pretty=1`)
//     //   .then((responce) => {
//     //     // console.log('responce.data:', responce.data);
//     //     res.send(responce.data);
//     //   })
//     //   .catch(err => {
//     //     res.status(400).send(err)
//     //   });
//     // console.log('userData:', userData);
//     userData((err, data) => res.status( err ? 400 : 200).send(err || data));
//     // return userData();
//   });
//   // .then(data => res.send(data));
//
// // get open orders
// // router.route('/orders')
// //   .get((req, res) => {
// //     axios.get(`https://1broker.com/api/v2/order/open.php?token=${process.env.API_TOKEN}&pretty=1`)
// //       .then((responce) => {
// //         // console.log('responce.data:', responce.data);
// //         res.send(responce.data);
// //       })
// //       .catch(err => {
// //         res.status(400).send(err)
// //       });
// //   });
//
// // place order
// router.route('/create')
//   .post((req, res) => {
//     placeOrder((err, data) => res.status( err ? 400 : 200).send(err || data));
//   });
//
// // cancel order
// router.route('/cancel/:id')
//   .delete((req, res) => {
//     console.log('req.params.id:', req.params.id);
//     axios.get(`https://1broker.com/api/v2/position/close.php?token=${process.env.API_TOKEN}&pretty=1&position_id=${req.params.id}`)
//       .then((responce) => {
//         console.log('responce.data:', responce.data);
//         res.send(responce.data);
//       })
//       .catch(err => {
//         res.status(400).send(err)
//       });
//   });
//
//
//
// module.exports = router;
