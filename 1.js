let str = ["bima", "ada", "satu", "halah", "nurses run"]

function palindrome(string) {
    let result  = []
    for (let i =0; i<string.length; i++) {
        let trimed = string[i].replace(/\s/g, "")
        let swap = ""
        for (let j = trimed.length-1; j >=0; j--) {
            swap += trimed[j]
        }
        if (trimed === swap) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
}

console.log(palindrome(str))