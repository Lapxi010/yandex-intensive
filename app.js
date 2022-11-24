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


const tmp = async (input) => {
  let answer = []

  await input.size(async (v) => {
    for (let i = 0; i < v; i++) {
      await input.read(i, (el) => {
        if (typeof el !== 'object') {
          answer.push(el)
        } else {
          tmp(el).then(val => answer.push(val))
        }
      }
      )
    }
  })

  return answer
}

const OpenArr = (arr) => {
  let res = []
  for (let i of answer) {
    if (typeof i === 'Array') {
      res.push(OpenArr(i))
    } else {
      res.push(i)
    }
  }
  return res
}

async function solution(input) {
  let answer = []
  await input.size(async (v) => {
    for (let i = 0; i < v; i++) {
      await input.read(i, (el) => {
        if (typeof el !== 'object') {
          answer.push(el)
        } else {
          tmp(el).then(val => answer.push(val))
        }
      })
    }
  })

  let res = []
  for (let i of answer) {
    if (typeof i === 'Array') {
      res.push(OpenArr(i))
    } else {
      res.push(i)
    }
  }
}
