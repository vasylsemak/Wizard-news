const express = require('express');
const app = express();
const morgan = require('morgan');
const { list, find } = require('./post-bank');

app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
