const test = require('node:test');
const assert = require('node:assert');
const { saludo } = require('../src/app');

test('saluda al mundo por defecto', () => {
  assert.strictEqual(saludo(), 'Hola, mundo!');
});

test('saluda por nombre', () => {
  assert.strictEqual(saludo('Rancher'), 'Hola, Rancher!');
});