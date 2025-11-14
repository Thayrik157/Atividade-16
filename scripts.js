function saudar(nome) {
    return `Olá, ${nome}!`;
}

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function apresentarProduto(nomeProduto, preco = 0) {
    return `Produto: ${nomeProduto} - Preço: R$ ${preco.toFixed(2)}`;
}

console.log("=== TESTE DA FUNÇÃO SAUDAR ===");
console.log(saudar("Maria"));
console.log(saudar("João"));
console.log(saudar("Ana"));

console.log("\n=== TESTE DA FUNÇÃO CALCULAR MÉDIA ===");
console.log(`Média das notas 7, 8, 9: ${calcularMedia(7, 8, 9).toFixed(2)}`);
console.log(`Média das notas 5.5, 6.5, 7.5: ${calcularMedia(5.5, 6.5, 7.5).toFixed(2)}`);
console.log(`Média das notas 10, 9, 8: ${calcularMedia(10, 9, 8).toFixed(2)}`);

console.log("\n=== TESTE DA FUNÇÃO APRESENTAR PRODUTO ===");
console.log(apresentarProduto("Notebook", 2500.00));
console.log(apresentarProduto("Mouse")); // Usando valor padrão para preço
console.log(apresentarProduto("Teclado", 150.00));
console.log(apresentarProduto("Monitor", 899.99));

console.log("\n=== TESTES ADICIONAIS ===");

const nomeUsuario = "Carlos";
const produtoFavorito = "Smartphone";
const precoProduto = 1200.00;

console.log(saudar(nomeUsuario));
console.log(apresentarProduto(produtoFavorito, precoProduto));

const notaA = 8.5;
const notaB = 7.0;
const notaC = 9.2;
const media = calcularMedia(notaA, notaB, notaC);

console.log(`Notas: ${notaA}, ${notaB}, ${notaC} - Média: ${media.toFixed(2)}`);

console.log("\n=== CASOS ESPECIAIS ===");
console.log("Produto sem preço definido:", apresentarProduto("Cadeira"));
console.log("Produto com preço zero:", apresentarProduto("Amostra Grátis", 0));
console.log("Média com notas baixas:", calcularMedia(4, 5, 6).toFixed(2));