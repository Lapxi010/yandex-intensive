function MyAwesomeSet(array) {

  const res = []

  if (array) {
    array.map(val => {
      if (!res.includes(val)) {
        res.push(val)
      }
    })
  }
  return {
    add(val) {
      if (!res.includes(val)) {
        res.push(val)
      }
      return this
    },
    get size() {
      return res.reduce(acc => acc + 1, 0)
    },
    has(val) {
      if (!res.includes(val)) {
        return false
      }
      return true
    },
    delete(val) {
      let c = 0;
      for (let i of res) {
        if (i === val || (res.indexOf(val) === -1 && Number.isNaN(val) && Number.isNaN(res[c]))) {
          console.log(i)
          res.splice(c, 1)
          return true
        }
        c++
      }
      return false
    },
    clear() {
      res.map((_, i) => { delete res(i) })
    }

  };
}
let array = [1, 2, 3, 4, 5]
let set = new MyAwesomeSet(array)
console.log(set.size === array.length)

let array1 = [4, 4, 8, 15, 15, 16, 23, 42]
let set1 = new MyAwesomeSet(array1)
console.log(set1.size === new Set(array1).size)

let object = {}
array = [{}, object, 42, NaN, undefined]
set = MyAwesomeSet(array)

console.assert(set.has(23) === false, 'has not 23')
console.assert(set.has({}) === false, 'has not {}')

console.assert(set.has(42) === true, 'has 42')
console.assert(set.has(NaN) === true, 'has NaN')
console.assert(set.has(object) === true, 'has object')
console.assert(set.has(undefined) === true, 'has undefined')


set.add(NaN).add(undefined)

console.assert(set.size === array.length, 'add NaN & undefined')

set.add({})
array.push({})
console.assert(set.size === array.length, 'add {}')


res = set.delete(23)
console.assert(res === false, '23 is not deleted')
console.assert(set.size === array.length, 'same size after delete 23')

res = set.delete({})
console.assert(res === false, '{} is not deleted')
console.assert(set.size === array.length, 'same size after delete {}')

res = set.delete(42)
console.assert(res === true, '42 is deleted')
console.assert(set.has(42) === false, 'do not includes 42')

res = set.delete(object)
console.assert(res === true, 'object is deleted')
console.assert(set.has(object) === false, 'do not includes object')

res = set.delete(NaN)
console.assert(res === true, 'NaN is deleted')
console.assert(set.has(NaN) === false, 'do not includes NaN')

res = set.delete(undefined)
console.assert(res === true, 'undefined is deleted')
console.assert(set.has(undefined) === false, 'do not includes undefined')

set.clear()
console.assert(set.size === 0, 'empty after clear')

set.add(4).add(4).add(8).add(15).add(16).add(23).add(42).add(42)
console.assert(set.size === 6, 'add handels not unique values')

set.clear()
set.add({}).add({}).add({})
set.add(object).add(object).add(object).add(object).add(object)
console.assert(set.size === 4, 'add handels not unique refs')

