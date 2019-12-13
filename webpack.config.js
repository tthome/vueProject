'use strict';

const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development') {
    module.exports = require('./configs/webpack.config.dev');
} else {
    module.exports = require('./configs/webpack.config.prod');
}
