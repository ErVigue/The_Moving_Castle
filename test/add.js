const add = require ('../add.js');

QUnit.module('Test Plan');

QUnit.test('TC1', assert => {
    assert.equal(add(1,2), 3);
})
