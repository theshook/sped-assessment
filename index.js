require('dotenv').config()

const express = require('express');
const app = express();

app.use(express.json());

/** Routes */
app.use('/api/provinces', require('./routes/ProvincesRoute'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})