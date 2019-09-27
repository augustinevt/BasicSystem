"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sensitiveWords = void 0;

var sensitiveWords = function sensitiveWords(content, words) {
  return content.replace(new RegExp(words.join('|'), 'ig'), '****');
};

exports.sensitiveWords = sensitiveWords;