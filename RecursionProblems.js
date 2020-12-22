// Recursion Problems
// implement lodash get problem
// implement deepclone functionlity
// implement power
// implement fib



//lodash get problem

function getProp( object, keys, defaultVal ){
  keys = Array.isArray( keys )? keys : keys.split('.');
  object = object[keys[0]];
  if( object && keys.length>1 ){
    return getProp( object, keys.slice(1));
  }
  return object === undefined? defaultVal : object;
}


// 
