"use strict";

var _ = require(".");

test('replaces blacklisted words with asterisks', function () {
  expect((0, _.sensitiveWords)('The name of the NX with be Nintendo Switch', ['switch'])).toBe('The name of the NX with be Nintendo ****');
});
test('replaces multiple blacklisted words with asterisks', function () {
  expect((0, _.sensitiveWords)('The name of the NX with be Nintendo Switch. The switch will be awesome.', ['switch'])).toBe('The name of the NX with be Nintendo ****. The **** will be awesome.');
});