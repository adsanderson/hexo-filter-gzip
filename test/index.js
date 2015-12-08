'use strict';

var test = require('tape');

var Hexo = require('hexo');
var gzip = require('../lib/gzip');

function setupHexo (dummyContent) {
    var hexo = new Hexo(process.cwd(), {silent: true});
    hexo.route.set('some-file.html', dummyContent);
    hexo.route.set('some-file.css', dummyContent);
    hexo.route.set('some-file.js', dummyContent);
    hexo.route.set('some-file.png', dummyContent);
    hexo.route.set('some-file.xml', dummyContent);
    return hexo;
}

test('mock fs test', function (t) {

    var dummyContent = 'some content here sadkfjh sakdlfh sajkdfh ksajldfh ksaljd fhjksadfh ksjadfh salkjdfh ksajldfh aksljd fhjksald fhksajd fhsajkd fhksajld fhjksa';
    var hexo = setupHexo(dummyContent);

    var routes = hexo.route.routes;

    t.plan(5);

    gzip.call(hexo).then(function () {
        t.equal(routes['some-file.png'].data.toString().length, dummyContent.length);
        t.equal(routes['some-file.xml'].data.toString().length, dummyContent.length);

        t.notEqual(routes['some-file.html'].data.toString().length, dummyContent.length);
        t.notEqual(routes['some-file.css'].data.toString().length, dummyContent.length);
        t.notEqual(routes['some-file.js'].data.toString().length, dummyContent.length);
    });
});