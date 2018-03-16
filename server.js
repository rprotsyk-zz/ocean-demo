const express = require('express');
const path = require ('path');

const app = express();

const PORT = process.env.PORT || 5757;

app.listen(PORT, function () {
    console.log('Working on port ' + PORT);
});
