const express = require('express');
const app = express();
const morgan = require('morgan');
const { list, find } = require('./post-bank');

app.use(express.static('public'));
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/posts', (req, res) => {
  const html = `<!DOCTYPE html>
    <html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list">
        <header><img src="/logo.png"/>Wizard News</header>
        ${list()
          .map(
            post => `
          <div class='news-item'>
            <p>
              <span class="news-position">${post.id}. ▲</span>${post.title}
              <small>(by ${post.name})</small>
            </p>
            <small class="news-info">
              ${post.upvotes} upvotes | ${post.date}
            </small>
          </div>`
          )
          .join('')}
      </div>
    </body>
  </html>`;

  res.send(html);
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = find(id);
  const html = `<!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list single-item">
        <header><img src="/logo.png"/>Single page</header>
          <div class='news-item'>
            <p>
              ${post.title}<small>(by ${post.name})</small>
            </p>
            <p>
              ${post.content}
            </p>
          </div>
      </div>
    </body>
  </html>`;

  res.send(html);
});

// Listening the server
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
