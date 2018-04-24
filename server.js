const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
});