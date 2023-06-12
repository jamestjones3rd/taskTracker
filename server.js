const express = require('express');
const app = express();
const port = 7000;

app.use(express.static('tracker'));

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`)
})