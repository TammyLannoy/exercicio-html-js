var idade = 22
console.log(`voce tem ${idade} anos.`)
if (idade < 16){
console.log(`não vota`)

} else if (idade < 18  || idade > 65) {
        console.log (`Voto opcional`)
    } else if (idade >= 18) {
        console.log (`voto obrigatorio`)
    } //se a idade nao é menor que 18, obviamente ela é maior ou igual a 18 entao nao tem a necessidade de colocar ELSE IF idade >= 18. 