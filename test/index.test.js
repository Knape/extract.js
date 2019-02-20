/* globals describe, beforeEach, expect */
/* eslint no-unused-expressions: 0 */

const extract = require('../src/index');

const object = { foo: { bar: { foobar: 'hello', } } };
const objectArray = { foo: [{ bar: { foobar: 'hello', } }] };

describe('Util functions', () => {
  describe('Extract nested properties from an object', () => {
    test('Should extract "hello" from object with nested properties "foo.bar.foobar" correctly', () => {
      expect(extract.get(object, 'foo.bar.foobar'))
      .toEqual('hello');
    });

    test('Should extract "{foobar: hello}" from object with nested properties "foo.bar" correctly', () => {
      expect(extract.get(object, 'foo.bar'))
      .toEqual({foobar: 'hello'});
    });

    test('Should return null if we pass empty string to object', () => {
      expect(extract.get(object, ''))
      .toEqual(null);
    });

    test('Should return null if we pass incorect extract string to object', () => {
      expect(extract.get(object, 'yada'))
      .toEqual(null);
    });

    test('Should return value instead of null if we pass incorect extract string to object and a default value', () => {
      expect(extract.get(object, 'yada', 'foo'))
      .toEqual('foo');
    });


    test('Should return null if we pass nothing to object', () => {
      expect(extract.get(object))
      .toEqual(null);
    });

    test('Should return value if we pass object array', () => {
      expect(extract.get(objectArray, 'foo[0].bar.foobar'))
      .toEqual('hello');
    });
  });

  describe('check nested properties from an object', () => {
    test('Should extract "hello" from object with nested properties "foo.bar.foobar" correctly', () => {
      expect(extract.has(object, 'foo.bar.foobar'))
      .toBeTruthy();
    });

    test('Should extract "{foobar: hello}" from object with nested properties "foo.bar" correctly', () => {
      expect(extract.has(object, 'foo'))
      .toBeTruthy();
    });

    test('Should return undefined if we pass empty string to object', () => {
      expect(extract.has(object, ''))
      .toBeFalsy();
    });

    test('Should return undefined if we pass incorect extract string to object', () => {
      expect(extract.has(object, 'yada'))
      .toBeFalsy();
    });

    test('Should return undefined if we pass nothing to object', () => {
      expect(extract.has(object))
      .toBeFalsy();
    });

    test('Should return value if we pass object array', () => {
      expect(extract.has(objectArray, 'foo[0].bar.foobar'))
      .toBeTruthy();
    });
  });
});
