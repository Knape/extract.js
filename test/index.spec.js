const extract = require('../src/index');
const expect = require('chai').expect;

const object = { foo: { bar: { foobar: 'hello', } } };

describe('Util functions', () => {
  describe('Extract nested properties from an object', () => {
    it('Should extract "hello" from object with nested properties "foo.bar.foobar" correctly', () => {
      expect(extract.get(object, 'foo.bar.foobar'))
      .to.equal('hello');
    });

    it('Should extract "{foobar: hello}" from object with nested properties "foo.bar" correctly', () => {
      expect(extract.get(object, 'foo.bar'))
      .to.deep.equal({foobar: 'hello'});
    });

    it('Should return null if we pass empty string to object', () => {
      expect(extract.get(object, ''))
      .to.deep.equal(null);
    });

    it('Should return null if we pass incorect extract string to object', () => {
      expect(extract.get(object, 'yada'))
      .to.deep.equal(null);
    });

    it('Should return value instead of null if we pass incorect extract string to object and a default value', () => {
      expect(extract.get(object, 'yada', 'foo'))
      .to.deep.equal('foo');
    });


    it('Should return null if we pass nothing to object', () => {
      expect(extract.get(object))
      .to.deep.equal(null);
    });
  });

  describe('check nested properties from an object', () => {
    it('Should extract "hello" from object with nested properties "foo.bar.foobar" correctly', () => {
      expect(extract.has(object, 'foo.bar.foobar'))
      .to.be.true;
    });

    it('Should extract "{foobar: hello}" from object with nested properties "foo.bar" correctly', () => {
      expect(extract.has(object, 'foo'))
      .to.be.true;
    });

    it('Should return undefined if we pass empty string to object', () => {
      expect(extract.has(object, ''))
      .to.be.false;
    });

    it('Should return undefined if we pass incorect extract string to object', () => {
      expect(extract.has(object, 'yada'))
      .to.be.false;
    });

    it('Should return undefined if we pass nothing to object', () => {
      expect(extract.has(object))
      .to.be.false;
    });
  });
});
