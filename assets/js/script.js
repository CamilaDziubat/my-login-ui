document.getElementById('senha').addEventListener('input', function() {
    const senha = this.value;
    const errorMessage = validarSenha(senha);
    const errorElement = document.getElementById('senhaError');

    if (errorMessage) {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = ""; // Limpa a mensagem se a senha for válida
    }
});
