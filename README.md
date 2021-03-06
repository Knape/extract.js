# Extract.js

[![Build Status](https://travis-ci.org/Knape/extract.js.svg?branch=master)](https://travis-ci.org/Knape/extract.js)
[![Coverage Status](https://coveralls.io/repos/github/Knape/extract.js/badge.svg?branch=master)](https://coveralls.io/github/Knape/extract.js?branch=master)
[![Code Climate](https://lima.codeclimate.com/github/Knape/extract.js/badges/gpa.svg)](https://lima.codeclimate.com/github/Knape/extract.js)

Check or get nested properties on objects in javascript

## Installation

Install the package from [npm](https://npmjs.com/release)

```bash
npm install --save extract.js
```

## Usage

extract.js is a tiny util library for either extracting or checking properties on a nested object, both dot and bracket notation.

```js
import extract from 'extract.js';
const object = { foo: { bar: 'foobar' }, bar: [{foo: 'foobar'}] }
extract.get(object, 'foo.bar'); // => 'foobar'
extract.get(object, 'bar[0].foo'); // => 'foobar'
extract.get(object, 'foo.bar.foobar'); // => undefined
extract.has(object, 'foo.bar'); // => true
extract.has(object, 'foo.bar.foobar'); // => false
```

## License

[MIT](LICENSE). Copyright (c) 2016 Philip Knape.
