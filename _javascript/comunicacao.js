function validarFormulario(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nomeRegex = /^([a-zA-Z]?\s?){0,}$/     
    const email = document.getElementById("email").value;     
    const nome = document.getElementById("nome").value;   

    if (!nomeRegex.test(nome)){
        alert("O nome deve conter apenas letras e espaços.")
        return false
    }

    if (!emailRegex.test(email)) {
        alert ("E-mail inválido. Insira um e-mail válido.");
        return false;
    }

    return true;
}