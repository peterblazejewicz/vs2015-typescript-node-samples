'use strict';
var express = require('express');
exports.router = express.Router();
/* GET home page. */
exports.router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Express'
    });
});
//# sourceMappingURL=index.js.map