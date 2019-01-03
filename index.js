'use strict';
const converter = require('./src/convert');

module.exports.convert = function (options) {
    return converter.convert(options);
};