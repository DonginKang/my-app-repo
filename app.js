const express = require('express');
const app = express();
const version = "v1.0";

app.get('/', (req, res) => {
  res.send(`Hello from GitHub Actions! Version: ${version}`);
});

app.listen(8080, () => console.log('App is running on port 8080'));
