let a = [[3, 4], [1, 2]], b = [[7, 5], [6, 4]]

function sumMatrix(a, b) {
    let kolA=a[0].length, barA=a.length, kolB=b[0].length, barB=b.length
    console.log(barA, kolA, barB, kolB)
    if (kolA == barB) {
        let result = []
        for (let i = 0; i<barA; i++) {
            let inside = []
            for (let j = 0; j < kolB; j++) {
                inside.push(0)
            }
            result.push(inside)
        }
               
        for (let i = 0; i<barA; i++) {//ngeloop dalam a. i akan nambah kalo penambahan dengan kolom b selesai
            for (let j = 0; j<kolB; j++) {
                let total = 0
                for (let k = 0; k<barB; k++) {
                    total += (a[i][k]*b[k][j]) 

                } 
                result[i][j] = total
                total=0               
            }
        }
        return result
    } else {
        return `ERROR\nmatrix yang anda masukkan tidak bisa dikalikan\nMASUKKAN MATRIX BARU !!!`
    }
}

console.log(sumMatrix(a,b))