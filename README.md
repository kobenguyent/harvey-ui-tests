[![Build Status](https://travis-ci.org/PeterNgTr/harvey-ui-tests.svg?branch=master)](https://travis-ci.org/PeterNgTr/harvey-ui-tests)

# Introduction

Basically, this is used for e2e tests.

# How to use

This e2e test is done using CodeceptJS https://codecept.io/

### Tech

e2e test uses a number of open source projects to work properly:

* https://nodejs.org/en/ - evented I/O for the backend
* https://codecept.io/ - CodeceptJS

### Installation

e2e test requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies.

```sh
$ cd harvey-ui-tests
$ npm install -d
```

### How to trigger UI test


This is using Puppeteer helper, hence Selenium WebDriver is not needed

To run all e2e tests just simply type

```sh
$ yarn start
```





