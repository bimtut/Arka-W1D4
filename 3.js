let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function transpose(array) {
    let resultArr = []
    for (let k = 0; k < array.length; k++) {
        resultArr.push([])
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            resultArr[j].push(array[i][j])
        }
    }
    return resultArr
}

console.log(transpose(arr))