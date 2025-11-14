const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    paginas: 1178,
    disponivel: true
};

console.log("Título (notação de ponto):", livro.titulo);
console.log("Autor (notação de colchetes):", livro['autor']);

livro.editora = "Martins Fontes";

livro.detalhes = function() {
    return `"${this.titulo}" por ${this.autor}, ${this.paginas} páginas, editora ${this.editora}. Status: ${this.disponivel ? "Disponível" : "Indisponível"}`;
};

console.log("\nDetalhes do livro:");
console.log(livro.detalhes());

const biblioteca = {
    nome: "Biblioteca Central",
    livros: [
        livro,
        {
            titulo: "1984",
            autor: "George Orwell",
            paginas: 328,
            disponivel: true,
            editora: "Companhia das Letras",
            detalhes: function() {
                return `"${this.titulo}" por ${this.autor}, ${this.paginas} páginas, editora ${this.editora}. Status: ${this.disponivel ? "Disponível" : "Indisponível"}`;
            }
        },
        {
            titulo: "Dom Casmurro",
            autor: "Machado de Assis",
            paginas: 256,
            disponivel: false,
            editora: "Editora Garnier",
            detalhes: function() {
                return `"${this.titulo}" por ${this.autor}, ${this.paginas} páginas, editora ${this.editora}. Status: ${this.disponivel ? "Disponível" : "Indisponível"}`;
            }
        }
    ],
    
    listarLivros: function() {
        console.log(`\n=== LIVROS DA ${this.nome.toUpperCase()} ===`);
        this.livros.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.detalhes()}`);
        });
    },
    
    buscarPorAutor: function(autor) {
        return this.livros.filter(livro => 
            livro.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }
};

biblioteca.listarLivros();

console.log("\n=== BUSCA POR AUTOR 'Tolkien' ===");
const livrosTolkien = biblioteca.buscarPorAutor("Tolkien");
livrosTolkien.forEach(livro => console.log(livro.detalhes()));

console.log("\n=== ACESSO DIRETO ===");
console.log("Primeiro livro:", biblioteca.livros[0].titulo);
console.log("Quantidade de livros:", biblioteca.livros.length);