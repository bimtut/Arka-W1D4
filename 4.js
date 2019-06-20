// let a = [[3, 4,3], [1, 2,3]] //2,3 || bawah-samping. penentuan orod matiks adalah baris, kolom
// let b = [[7, 5], [6, 4], [3,7]] //3,2
//matirk bisa dikali jika kolom a = baris b
//hail =nya matrik berordo = barAxkolb

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
        /*
        pseudocode
        1. buat aray yang akan jadi kandang akhirnya
        2. kandang akhir dan kandang dalam memiliki ikuran ordo matrix yg sesuai aturan matematika
        3. hitung nilai tiap titik di kandang akhir. berdasarkan urutan atau aturan matematika
        4. tampung nilai tiap titik di kandang sementara (array)
        5. masukkan nilai ke kandang akhir dengan cara looping ambil dari nilai di kandang smeentra.
        6. agar urut maka pengambilan nilai pakai index dengan index yang increment
        */
       
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