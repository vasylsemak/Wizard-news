const html = post => `<!DOCTYPE html>
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

module.exports = html;
