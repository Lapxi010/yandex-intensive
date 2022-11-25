'use strict';

(() => {
  const timeoutMS = 100;

  const _async = (fn, cb) => {
    setTimeout(() => {
      cb(fn());
    }, Math.random() * timeoutMS);
  };

  const AsyncArray = function(a = []) {
    if (!new.target) {
      return new AsyncArray(a);
    }

    this.read = (index, cb) =>
      _async(() => a[index], cb);

    this.size = (cb) =>
      _async(() => a.length, cb);
  };

  Object.freeze(AsyncArray);
  globalThis.AsyncArray = AsyncArray;
})();

const input = AsyncArray([
  8,
  AsyncArray([
    15,
    16,
  ]),
  AsyncArray([
    AsyncArray([
      AsyncArray([
        42,
        AsyncArray([
          AsyncArray([]),
          23,
        ]),
      ]),
    ]),
    4,
  ]),
]);



solution(input).then(result => {
  const answer = [8, 15, 16, 42, 23, 4];
  const isEqual = String(answer) === String(result);
  if (isEqual) {
    console.log('OK');
  } else {
    console.log('WRONG');
  }
});

async function openArr (arr){
  let res = []
  if (arr !== undefined) {
    for (let i of arr) {
      if (typeof i !== 'object') {
        res.push(i)
      } else {
        res.push(...await openArr(i))
      }
    }
  }

  return res
}


const tmp = async (input) => {
  let answer = []
  if(typeof input !== 'object') {
    return [input]
  }
  let s = []
  await input.size(async (v) => {
    for(let i = 0; i < v; i++) {
      s.push(i)
    }
    for await (let k of s) {
      let a = promisify(input.read)
      await a(k).then(async el => await tmp(el).then((val) => {
        answer.push( val)
      }))

    }
  })
  return answer
}

function promisify(f) {
  return function (...args) {
    return new Promise((resolve) => {
      args.push((res) => resolve(res));
      f.call(this, ...args);
    });
  };
}

async function prepareDate(input) {
  let answer = []
  let s = []
  await input.size(async (v) => {
    for(let i = 0; i < v; i++) {
      s.push(i)
    }
    for await (let k of s) {
      let a = promisify(input.read)
      await a(k).then(async el => await tmp(el).then(val => {
        answer.push(val)
      }))
    }
  })
  return answer
}

async function solution(input) {
  let a = await prepareDate(input)
  console.log(a)
  let b = await openArr(a)
  console.log(b)
  return b
}
