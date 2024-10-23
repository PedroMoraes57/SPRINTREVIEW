function inputNome(){
    var nomeRegex =  /^[a-zA-Z\s]+$/;
    var nome = document.getElementById('nome').value

    if (!nomeRegex.test(nome)) {
        document.getElementById('nome').style.border = '2px solid #e63636'
        document.getElementById('avisoNome').style.display = 'block';
    }
    else if(nomeRegex.test(nome)){
        document.getElementById('avisoNome').style.display = 'none';
        document.getElementById('nome').style.border = '1px solid #181818'
    }
}
function inputSenha() {
    var senha = document.getElementById('senha').value
    var avisoSenha = document.getElementById('avisoSenha')

    if (senha.length < 8) {
        avisoSenha.textContent = "A senha deve conter pelo menos 8 caracteres."
        document.getElementById('senha').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[A-Z]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 letra maiúscula."
        document.getElementById('senha').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[a-z]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 letra minúscula."
        document.getElementById('senha').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[0-9]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 número."
        document.getElementById('senha').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[#@$!%*?&]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 caractere especial (@, $, !, %, *, ?, &)"
        document.getElementById('senha').style.border = '2px solid #e63636'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else {
        document.getElementById('senha').style.border = '1px solid #181818'
        document.getElementById('avisoSenha').style.display = 'none'
    }
}