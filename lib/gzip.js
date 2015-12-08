'use strict';

var minimatch = require('minimatch');
var zlib = require('zlib');
var async = require('async');
var accum = require('accum');

function setRoutes(resolve, reject, route, paths) {
    async.forEach(paths, function (path, callback){
        var gzip = zlib.createGzip();
        var inp = route.get(path);

        inp
        .pipe(gzip)
        .pipe(accum.buffer(function (buffer) {
            route.set(path, buffer);
            callback();
        }));
    }, function(err) {
        resolve();
    });
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