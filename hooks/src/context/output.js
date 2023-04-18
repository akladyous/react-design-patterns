function _define_property(e, r, t) {
  if (r in e) {
    Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    e[r] = t;
  }
  return e;
}
function _object_spread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    var n = Object.keys(t);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      n = n.concat(
        Object.getOwnPropertySymbols(t).filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        }),
      );
    }
    n.forEach(function (r) {
      _define_property(e, r, t[r]);
    });
  }
  return e;
}
var users = [
  {
    name: 'one',
  },
  {
    name: 'two',
  },
  {
    name: 'three',
  },
  {
    name: 'four',
  },
];
var x = _object_spread(
  {},
  {
    users: users,
  },
);
