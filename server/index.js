const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});