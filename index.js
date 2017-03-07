'use strict';

var gzip = hexo.config.gzip || {};
var priority = gzip.priority || 10000;

if (process.env.NODE_ENV !== 'development') {
  hexo.extend.filter.register('after_generate', require('./lib/gzip'), priority);
}
