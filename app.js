require('dotenv').config({ silent: true });
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const api = require('./routes/api');

app.use('/api', api);

app.listen(PORT, function () {
  console.log(`Express listinging on port ${PORT}`);
})
