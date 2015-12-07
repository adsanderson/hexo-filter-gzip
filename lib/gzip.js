'use strict';

var minimatch = require('minimatch');
var zlib = require('zlib');
var accum = require('accum');

function setRoutes(resolve, reject, route, paths) {
   
    paths.forEach(function (path) {
        var gzip = zlib.createGzip();
        var inp = route.get(path);            

        inp
        .pipe(gzip)
        .pipe(accum.buffer(function (buffer) {
            route.set(path, buffer);    
        }));
    });
    
    resolve();
}

module.exports = function() {
    var hexo = this,
        route  = hexo.route;

    var routes = route.list().filter(function(path) {
        return minimatch(path, '**/*.{html,css,js}', { nocase: true });
    });

    return new Promise(function (resolve, reject) {
        setRoutes(resolve, reject, route, routes);           
    });
};