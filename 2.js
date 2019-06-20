let arr =  [123, 9, 27]
function reducer(acc, cur) {return Number(acc)+Number(cur)}

function oneDigit(array) {
    let result = 0, flag = false, resLength = result.toString()
    while (resLength.length > 1 || result == 0) {
        if (array.length > 1 && flag == false) {
            result = array.reduce(reducer)
            resLength = result.toString()
            flag =  true
        } else {
            let splitNumber = result.toString().split('')
            result = splitNumber.reduce(reducer)
            resLength = result.toString()
        }
    }
    return result
}

console.log(oneDigit(arr))