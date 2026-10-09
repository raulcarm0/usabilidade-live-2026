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
 
    // Consulta dinâmica de CEP
    // 1.Mapeamento dos elementos do DOM
    const inputCep = document.querySelector("#cep");
    const inputRua = document.querySelector("#rua");
    const inputBairro = document.querySelector("#bairro");
    const inputCidade = document.querySelector("#cidade");
    const inputUf = document.querySelector("#uf");
    const inputNumero = document.querySelector("#numero");
    const feedback = document.querySelector("#feedback");
    const form = document.querySelector("#form-endereco");
 
    // 2. Limpeza dos campos
    const limparCampos = () => {
        inputRua.value = "";
        inputBairro.value = "";
        inputCidade.value = "";
        inputUf.value = "";
    }
 
    // 3. Atualização do feedback
    const setMensagem = (texto, tipo = "") => {
        feedback.textContent = texto;
        feedback.className = `feedback ${tipo}`;
    }
 
    // 4. Função AJAX
    const consultarCep = async (cepLimpo) => {
        const url = `https://brasilapi.com.br/api/cep/v2/${cepLimpo}`;
 
        setMensagem("Buscando dados...", "carregando");
 
        try {
            const resposta = await fetch(url);
 
            if (!resposta.ok) {
                if (resposta.status === 404) {
                    throw new Error("CEP não localizado.");
                }
                throw new Error(`Erro na consulta (Status: ${resposta.status})`)
            }
 
            const dados = await resposta.json();
 
            //Preenchimento
            inputRua.value = dados.street || "";
            inputBairro.value = dados.neighborhood || "";
            inputCidade.value = dados.city || "";
            inputUf.value = dados.state || "";
 
            setMensagem("Endereço preenchido com sucesso!", "sucesso");
            inputNumero.focus();
 
        } catch (erro) {
            limparCampos();
            setMensagem(erro.message, "erro");
        }
    }
 
    inputCep.addEventListener("blur", () => {
        const cepBruto = inputCep.value;
        const cepNumerico = cepBruto.replace(/\D/g, "");
 
        if (cepNumerico === "") {
            limparCampos();
            setMensagem("");
            return;
        }
 
         // Validação do tamanho obrigatório do CEP brasileiro (8 dígitos)
        if (cepNumerico.length !== 8) {
            limparCampos();
            setMensagem("O CEP deve conter 8 dígitos.", "erro");
            return;
        }
 
        if (cepNumerico.length === 8) {
            consultarCep(cepNumerico);
        }
    });
 
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Dados prontos para envio!");
    });
 
});