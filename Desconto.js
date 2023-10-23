var preço = 100.00
var quantidade = 2
var desconto = 10
var adição = preço + quantidade
var calcdesconto = desconto * 100

console.log('Total:',adição)

if (adição >= 100){
  console.log ('Aplique um desconto de 10%');
} else {
    console.log ('Não aplique desconto');
}
