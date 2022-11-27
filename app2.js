module.exports = async function(input){
    let a = 0;
    a = await new Promise( resolve => {
        let ans = []
        input.size(async size => {
            for (let i = 0; i < size; i++) {
                ans.push(await new Promise(resolve => {
                    input.read(i, async el => {
                        if(typeof el === 'number'){
                            resolve([el])
                        }else{
                            resolve(add(el))
                        }
                    })
                }))
            }
            resolve(ans)
        })
    })
    let p = openArr(a)
    return p
}

function openArr (arr){
    let res = []
    if (arr !== undefined) {
        for (let i of arr) {
            if (typeof i !== 'object') {
                res.push(i)
            } else {
                res.push(...openArr(i))
            }
        }
    }

    return res
}

async function add(input) {
    let ans = []
    ans = await new Promise(resolve => {
        let ans = []
        input.size(async size => {
            for (let i = 0; i < size; i++) {
                ans.push(await new Promise(resolve => {
                    input.read(i, async el => {
                        if(typeof el === 'number'){
                            resolve([el])
                        }else{
                            resolve(add(el))
                        }
                    })
                }))
            }
            resolve(ans)
        })
    })
    return ans
}
