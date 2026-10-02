document.addEventListener('DOMContentLoaded', () => {
    var btnMsg = document.getElementById("btnMensagem");
    var btnCard = document.getElementById("btnCard");
 
    btnMsg.onclick = function() {
        var divMsg = document.getElementById("mensagem");
        divMsg.innerHTML = '<strong>Texto atualizado com sucesso via clique!</strong>';
    }
 
    btnCard.onclick = function() {
        var divCard = document.getElementById("card");
        if (divCard.style.display == 'block') {
            divCard.style.display = 'none';
        } else {
            divCard.style.display = 'block';
        }
 
    }
});