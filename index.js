/*! fromentries. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = function fromEntries (iterable) {
  return [...iterable].reduce(function (obj, [key, val]) {
    obj[key] = val
    return obj
  }, {})
}
