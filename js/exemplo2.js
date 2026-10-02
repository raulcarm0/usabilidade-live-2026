/*
Carrega todos os objetos do documento HTML no DOM primeiro e depois libera para
fazer os procedimentos dentro do bloco...
*/
document.addEventListener('DOMContentLoaded', () => {
    var caixa = document.getElementById("caixaHover");
 
    caixa.addEventListener('mouseover', () => {
        caixa.style.background = 'seagreen';
        caixa.textContent = 'Mouse sobre a caixa!';
    });
 
        caixa.addEventListener('mouseout', () => {
        caixa.style.background = 'tomato';
        caixa.textContent = 'Passe o mouse aqui!';
    });
});