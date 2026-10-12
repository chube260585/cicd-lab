const test = require('node:test');
const assert = require('node:assert');
const { saludo } = require('../src/app');

test('saluda al mundo por defecto', () => {
  assert.strictEqual(saludo(), 'Que Tal, mundo!');
});

test('saluda por nombre', () => {
  assert.strictEqual(saludo('Rancher'), 'Que Tal, Rancher!');
});