'use strict';

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import logger = require('morgan');
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';

import * as routes from './routes/index';
import * as users from './routes/users';
//const users = require('./routes/users');

const app: express.Application = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes.router);
app.use('/users', users.router);

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
  let err = new Error('Not Found');
  res.status(404);
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(res.statusCode || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(res.statusCode || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
