# hexo-filter-gzip

[![Build Status](https://travis-ci.org/adsanderson/hexo-filter-gzip.svg?branch=master)](https://travis-ci.org/adsanderson/hexo-filter-gzip)

**NOTE: Currently there is an issue with hexo server where the gzipped content is not rendered correctly**

A filter for Gzipping HTML, CSS and JS files.

## Options

``` yaml
gzip:
  priority: 10000
  include: '**/*.{html,css,js}'
```

**priority (optional)**: set the priority to make sure the gzip task is executed after any other processing of the HTML, CSS and JS has been completed. Default 10000.

**include (optional)**: pattern to select files which will be gziped. Default `'**/*.{html,css,js}'`