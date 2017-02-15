const express = require('express');
const router = express.Router();

axios = require('axios');

router.route('/')
  .get((req, res) => {
    axios.get(`https://1broker.com/api/v2/user/overview.php?token=${process.env.API_TOKEN}&pretty=1`)
      .then((responce) => {
        console.log('responce.data:', responce.data);
        res.send(responce.data);
      })
      .catch(err => {
        res.status(400).send(err)
      });
  })

// console.log('user:', user);

module.exports = router;
