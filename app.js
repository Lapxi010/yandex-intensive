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

// async function recurs(el, sb) {
//     let i = 0
//     el.size((size) => {
//       if(size > i) {
//         el.read(i, (val) => {
//           i++
//           console.log(i)
//           if(typeof val === "number") {
//             sb(val)
//           }else{
//             recurs(val, sb)
//           }
//         })
//       }
//     })
// }
//
// async function a(input){
//   let ans = []
//   // await input.read(0, (el) => {
//   //   recurs(el, (e) => ans.push(e))
//   // })
//   await input.read(1, (el) => {
//     recurs(el, (e) => ans.push(e))
//   })
//   // await input.read(0, (el) => {
//   //   recurs(el, (e) => ans.push(e))
//   // })
//   console.log(ans)
// }
// a(input)

solution(input).then(result => {
  const answer = [8, 15, 16, 42, 23, 4];
  const isEqual = String(answer) === String(result);
  if (isEqual) {
    console.log('OK');
  } else {
    console.log('WRONG');
  }
});

// async function openArr (arr){
//   let res = []
//   if (arr !== undefined) {
//     for (let i of arr) {
//       if (typeof i !== 'object') {
//         res.push(i)
//       } else {
//         res.push(...await openArr(i))
//       }
//     }
//   }
//
//   return res
// }
//
//
// const tmp = async (input) => {
//   let answer = []
//   if(typeof input !== 'object') {
//     return [input]
//   }
//   let s = []
//   await input.size(async (v) => {
//     for(let i = 0; i < v; i++) {
//       s.push(i)
//     }
//     for await (let k of s) {
//       let a = promisify(input.read)
//       await a(k).then(async el => await tmp(el).then((val) => {
//         answer.push( val)
//       }))
//
//     }
//   })
//   return answer
// }
//
// function promisify(f) {
//   return function (...args) {
//     return new Promise((resolve) => {
//       args.push((res) => resolve(res));
//       f.call(this, ...args);
//     });
//   };
// }
//
// async function prepareDate(input) {
//   let answer = []
//   let s = []
//   await input.size(async (v) => {
//     for(let i = 0; i < v; i++) {
//       s.push(i)
//     }
//     for await (let k of s) {
//       let a = promisify(input.read)
//       await a(k).then(async el => await tmp(el).then(val => {
//         answer.push(val)
//       }))
//     }
//   })
//   return answer
// }
// async function add(el, cb) {
  // if(typeof input === 'number') {
  //   return [input]
  // }
  // await new Promise(resolve => {
  //   input.size(async size => {
  //     for(let i = 0; i < size; i++) {
  //       await new Promise(resolve => {
  //         input.read(i, async el =>  {
  //           await tmp(el).then(async v => answer.push(v))
  //         })
  //         resolve(answer)
  //       })
  //     }
  //   })
  //   resolve(answer)
  // })
  // await el.size(async (v) => {
  //   let s = []
  //   for (let i = 0; i < v; i++) {
  //     s.push(i)
  //   }
  //   for await (let i of s) {
  //     await el.read(i, async (el)=> {
  //       if(typeof el === 'object'){
  //         await add(el, cb)
  //       }else {
  //         cb(el)
  //       }
  //     })
  //   }
  // })

  // await el.size(async (v) => {
  //   let s = []
  //   for (let i = 0; i < v; i++) {
  //     s.push(i)
  //   }
  //   for await (let i of s) {
  //     await el.read(i, async (el)=> {
  //       if(typeof el === 'object'){
  //         await add(el, cb)
  //       }else {
  //         cb(el)
  //       }
  //     })
  //   }
  // })
// }
//
// async function solution(input) {
//   let answer = []
//   input.size(async (v)=> {
//     let s = []
//     for (let i = 0; i < v; i++) {
//       s.push(i)
//     }
//     for await (let i of s) {
//       input.read(i, async (el)=> {
//         if(typeof el === 'object'){
//           await add(el, (v) => {answer.push(v)})
//         }else {
//           answer.push(el)
//         }
//       })
//     }
//   })
//   console.log(answer)
//   return answer
//   // input.size(async (v)=> {
//   //   let s = []
//   //   for (let i = 0; i < v; i++) {
//   //     s.push(i)
//   //   }
//   //   for await (let i of s) {
//   //     input.read(i, async (el)=> {
//   //       if(typeof el === 'object'){
//   //         await add(el, (v) => {answer.push(v)})
//   //       }else {
//   //         answer.push(el)
//   //       }
//   //     })
//   //   }
//   // })
// }
// async function solution(input) {
//   let a = await prepareDate(input)
//   console.log(a)
//   let b = await openArr(a)
//   console.log(b)
//   return b
// }
// 'use strict';
//
// (() => {
//   const timeoutMS = 100;
//
//   const _async = (fn, cb) => {
//     setTimeout(() => {
//       cb(fn());
//     }, Math.random() * timeoutMS);
//   };
//
//   const AsyncArray = function(a = []) {
//     if (!new.target) {
//       return new AsyncArray(a);
//     }
//
//     this.read = (index, cb) =>
//         _async(() => a[index], cb);
//
//     this.size = (cb) =>
//         _async(() => a.length, cb);
//   };
//
//   Object.freeze(AsyncArray);
//   globalThis.AsyncArray = AsyncArray;
// })();
//
// const input = AsyncArray([
//   8,
//   AsyncArray([
//     15,
//     16,
//   ]),
//   AsyncArray([
//     AsyncArray([
//       AsyncArray([
//         42,
//         AsyncArray([
//           AsyncArray([]),
//           23,
//         ]),
//       ]),
//     ]),
//     4,
//   ]),
// ]);
//
//
//
// solution(input).then(result => {
//   const answer = [8, 15, 16, 42, 23, 4];
//   const isEqual = String(answer) === String(result);
//   if (isEqual) {
//     console.log('OK');
//   } else {
//     console.log('WRONG');
//   }
// });
//
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
  if(typeof input === 'number') {
    return [input]
  }
  await new Promise(resolve => {
    input.size(async size => {
      for(let i = 0; i < size; i++) {
        await new Promise(resolve => {
          input.read(i, async el =>  {
            await tmp(el).then(async v => answer.push(v))
          })
          resolve()
        })
      }
    })
    resolve()
  })
  return answer
}


async function prepareDate(input) {
  let answer = []
  await new Promise(resolve => {
    input.size(async size => {
      for(let i = 0; i < size; i++) {
        await new Promise(resolve => {
          input.read(i, async el =>  {
            if (typeof el === 'number'){
              answer.push(el)
            }else {
              await tmp(el).then(async v => answer.push(v))
            }
            resolve(openArr(answer))
          })
        })
      }
    })
    resolve(openArr(answer))
  })
  return answer
}

async function solution(input) {
  let a = await prepareDate(input)
  console.log(a)
}
