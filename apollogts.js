// Lógica do Sistema Apollo GTS
const display = document.getElementById('mensagem');

function iniciarSistema() {
    display.innerHTML = "<h2>SISTEMA INICIADO COM SUCESSO! 🚀</h2>";
    console.log("Apollo GTS rodando...");
}

// Inicia após 2 segundos para dar um efeito de carregamento
setTimeout(iniciarSistema, 2000);
