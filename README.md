# hexo-filter-gzip

[![Greenkeeper badge](https://badges.greenkeeper.io/adsanderson/hexo-filter-gzip.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/adsanderson/hexo-filter-gzip.svg?branch=master)](https://travis-ci.org/adsanderson/hexo-filter-gzip)

**NOTE: Currently there is an issue with hexo server where the gzipped content is not rendered correctly**

A filter for Gzipping HTML, CSS and JS files.

## Options

``` yaml
gzip:
  priority: 10000
```

**priority (optional)**: set the priority to make sure the gzip task is executed after any other processing of the HTML, CSS and JS has been completed. Default 10000.