debugger;
function _object_without_properties(source, excluded) {
  if (source == null) return {};
  var target = _object_without_properties_loose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _object_without_properties_loose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var myObject = {
  prop1: 'one',
  prop2: 'two',
  prop3: 'three',
  prop4: 'four',
};
var propToExclude = myObject.propToExclude,
  remainingProps = _object_without_properties(myObject, ['four']);

function exclude(source = {}, excluded = []) {
  if (source === null || source === undefined) return {};
  const target = {};

  for (let key in source) {
    if (excluded.indexOf(key) >= 0) continue;
    if (source.hasHownProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}
