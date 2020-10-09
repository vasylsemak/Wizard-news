const express = require('express');
const app = express();
const morgan = require('morgan');
const { list, find } = require('./post-bank');

app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/posts', (req, res) => {
  const html = `<!DOCTYPE html>
    <html>
    <head>
      <title>Wizard News</title>
    </head>
    <body>
      <ul>
          ${list()
            .map(post => `<li>${post.title}. Author - ${post.name}</li>`)
            .join('')}
      </ul>
    </body>
    </html>
  `;
  res.send(html);
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
