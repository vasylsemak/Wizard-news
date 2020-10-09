const express = require('express');
const app = express();
const morgan = require('morgan');
const { list, find } = require('./post-bank');
const postsHtml = require('./views/post-list');
const singlePostHtml = require('./views/post-details');

app.use(express.static('public'));
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  const posts = list();
  const postsPage = postsHtml(posts);
  res.send(postsPage);
});

app.get('/posts/:id', (req, res) => {
  const post = find(req.params.id);

  if (!post.id) res.status(404).send(`<h1>No such an item with this ID!</h1>`);
  else res.send(singlePostHtml(post));
});

// All non-existing Routes
app.get('*', (req, res) => {
  res.send(`<h2>URL doesn't exist. Please type "/" for home route.</h2>`);
});

// Listening the server
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
