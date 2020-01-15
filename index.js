require('dotenv').config();

/** Modules */
const startUpDebugger = require('debug')('app:startup');
const morgan = require('morgan')
const helmet = require('helmet');
/** End Modules */

const express = require('express');
const app = express();

/** Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startUpDebugger('Morgan enabled...');
}
/** End Middlewares */

/** Routes */
app.use('/api/provinces', require('./routes/ProvincesRoute'));
app.use('/api/schools', require('./routes/SchoolRoutes'));
/** End Routes */

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});