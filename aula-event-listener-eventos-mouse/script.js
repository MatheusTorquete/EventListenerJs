// let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
// let valorSubtotal = document.getElementById("valor-subtotal");
// let subtotalInfo = {
//   quantidade: 1,
//   valor: 11.66,
// };
// quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
// valorSubtotal.innerText = subtotalInfo.valor;


// array dos produtos
const produtos = [
  {
    nome: "Dom Casmurro",
    valor: 11.99
  }
]

// Capturando Elementos
const addButton = document.getElementById("btn-adicionar-produto-01");
const input = document.getElementById("quantidade-produto-01");



// Eventos
addButton.addEventListener("click", ()=> {
  input.value = Number(input.value) + 1
});