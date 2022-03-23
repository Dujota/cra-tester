const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
if(process.env.NODE_ENV === 'production'){
    app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
    app.use(express.static(path.join(__dirname, 'build')));
}