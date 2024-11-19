// Listas ?

// Array - Conjunto de elementos de mesmo tipo de única dimensão
let numeros: number[] = [1, 2, 3, 4, 5, 6];

let matrizNumeros: number[][] = [
  [1, 2, 3, 4, 5, 6],
  [1, 5, 5, 6, 67, 1],
];

// Array de um array de números - multidimensional
let matrizEscalar: number[][] = [
  [2, 0, 0],
  [0, 2, 0],
  [0, 0, 2],
];

numeros.push(10);
// numeros.push("10") // entrada inválida

// Lista - Conjunto de elementos de tipos diferentes
let elementos: (number | string | boolean)[] = [
  1,
  "cezar",
  "cezar.mezzalira@email.com",
  true,
  "4699981470",
];

// [id, nome, email, ativo, celular]
let matriz: (number | string | boolean)[][] = [
  [1, "Cezar", "cezar.mezzalira@email.com", true, "4699981470"],
  [2, "Gustavo", "gustavo@email.com", true, "4612312321321"],
];

// Tupla - conjunto de valores finito com tipos definidos
let cadastros: [number, string, string, boolean, string] = [
  1,
  "Cezar",
  "cezar.mezzalira@email.com",
  true,
  "4699981470",
];

const linha = "00000000000000|00000000000000000|100,25|100,25|S|AAAAMM";

const campos = linha.split("|");

console.log(linha);
console.log(campos);

// Tuplas são imutáveis
// [cnpj, nome_empresa, receita_bruta, receita_tributacao, valido, data]
const valores: [string, string, number, number, boolean, string] = [
  campos[0],
  campos[1],
  parseFloat(campos[2]),
  parseFloat(campos[3]),
  campos[4] === "S" ? true : false,
  campos[5],
];
console.log(valores);


const matrizProdutos:[number ,string ,boolean ,string ,string] []=[];
matrizProdutos.push([1 "cadeiras",10,8 true,"95150235]","202495155635"])
matrizProdutos.push([2 "mesa",20,8 true,"95150234","20249515025637"])
matrizProdutos.push([3 "cama"28,5 true,"95150233","20249515025631"])
matrizProdutos.push([4 "sofa" ,35,5 true ,"95150268","202495150230"])
matrizProdutos.push([5 "geradeira" ,40,4 true,"95150239" ,"202495150239"])
matrizProdutos.push([6 "televisor",11,5 true, "95150233" ,"202495150232"])

console.log(matrizProdutos)




