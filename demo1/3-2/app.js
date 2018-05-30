// es module
import sum from './sum';
console.log('sum(23, 24) = ', sum(23,24))

// commonjs
var minus = require('./minus');
console.log('minus(23,17) = ', minus(23,17));

// amd
require(['./muti'], function(muti) {
    console.log('muti(2,3) = ',muti(2,3))
})