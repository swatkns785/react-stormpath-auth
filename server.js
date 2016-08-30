var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.use(stormpath.init(app, {
    web: {
        produces: ['application/json']
    }
}));

app.on('stormpath.ready', function () {
    app.listen(8000, 'localhost', function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('listening on http://localhost:8000');
    });
});
