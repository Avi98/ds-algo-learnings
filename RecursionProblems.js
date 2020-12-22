// Recursion Problems
// implement lodash get problem
// implement deepclone functionlity
// implement power
// implement fib
// someRecursive Solution


//lodash get problem

function getProp( object, keys, defaultVal ){
  keys = Array.isArray( keys )? keys : keys.split('.');
  object = object[keys[0]];
  if( object && keys.length>1 ){
    return getProp( object, keys.slice(1));
  }
  return object === undefined? defaultVal : object;
}

// fib 0,1,1,2,3,5,8

function fibRecursive(num){
  if(num < 2){
    return num
  }
  return fib(num-1) + fib(num-2);
}

//for 1 fib will always be 1, cause 0+1
function fibItrative(num){
  let sumArr = [0,1]
  
  for(let i=0;i<=num; i++){
    if(i > 1){
     const a = sumArr[i-1]
     const b = sumArr[i-2]
     
     sumArr.push(a+b)
    }
  }
  
  return sumArr
}

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb){
  if(arr.length === 0){
    return
  }
  const val = arr.shift()
  const res = cb(val)
  someRecursive(arr, cb)
  
  return res
}



