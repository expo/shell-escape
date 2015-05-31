// Based on this code
// https://github.com/xxorax/node-shell-escape/blob/master/shell-escape.js

function escape(s) {
  if (/[^A-Za-z0-9_\/:=-]/.test(s)) {
    s = "'"+s.replace(/'/g,"'\\''")+"'";
    s = s.replace(/^(?:'')+/g, '') // unduplicate single-quote at the beginning
      .replace(/\\'''/g, "\\'" ); // remove non-escaped single-quote if there are enclosed between 2 escaped
  }
  return s;
}

module.exports = function (stringOrArray) {
  if (typeof(stringOrArray) === 'object') {
    var ret = [];
    stringOrArray.forEach(function(s) {
      if (/[^A-Za-z0-9_\/:=-]/.test(s)) {
        s = "'"+s.replace(/'/g,"'\\''")+"'";
        s = s.replace(/^(?:'')+/g, '') // unduplicate single-quote at the beginning
        .replace(/\\'''/g, "\\'" ); // remove non-escaped single-quote if there are enclosed between 2 escaped
      }
      ret.push(s);
    });
    return ret.join(' ');
  } else {
    return escape(stringOrArray);
  }
}
