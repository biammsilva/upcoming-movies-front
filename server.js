const express = require('express');
const path = require('path');
const app = express();

let app_name = 'upcoming-movies-front';

app.use(express.static(__dirname + `/dist/${app_name}`));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + `/dist/${app_name}/index.html`));
});

app.listen(process.env.PORT || 3000);