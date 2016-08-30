var express = require('express');
var stormpath = require('express-stormpath');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

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
