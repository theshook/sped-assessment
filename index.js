require('dotenv').config();

/** Modules */
const startUpDebugger = require('debug')('app:startup');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
/** End Modules */

const express = require('express');
const app = express();

/** Set view engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/** Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/datatables/media/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startUpDebugger('Morgan enabled...');
}
/** End Middlewares */

/** Routes */
app.use('/provinces', require('./routes/ProvincesRoute'));
app.use('/api/schools', require('./routes/SchoolRoutes'));
/** End Routes */

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
