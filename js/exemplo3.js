/*
Carrega todos os objetos do documento HTML no DOM primeiro e depois libera para
fazer os procedimentos dentro do bloco...
*/
document.addEventListener('DOMContentLoaded', () => {
    var campoCep = document.getElementById("cep");
 
    campoCep.addEventListener('input', (e) => {
        // Vai substituir TUDO que não for número (RegExp não número = \D)
        var valorCep = e.target.value.replace(/\D/g, '');
 
        // Colocar o "-" automaticamente.
        if (valorCep.length > 5) {
            e.target.value = valorCep.slice(0, 5) + '-' + valorCep.slice(5,8);
        } else {
            e.target.value = valorCep;
        }
 
    });
});