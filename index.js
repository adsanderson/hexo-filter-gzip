'use strict';

// Object.assign()

// console.log(hexo.config);

var gzip = hexo.config.gzip || {}; 

var priority = gzip.priority || 10000;

hexo.extend.filter.register('after_generate', require('./lib/gzip'), priority);