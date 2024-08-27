let num = [5, 8, 2, 9, 3]
num.sort()
num.push (7)
num.length
console.log(num)
console.log(`O Vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
}   else {
    onsole.log(`O valor está na posicao ${pos}`)

    }


