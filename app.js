const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Nirav Bhatt Here and 2 more changes!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
