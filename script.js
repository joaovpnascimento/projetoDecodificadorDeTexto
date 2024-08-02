const textArea = document.getElementById('texto');
let botaoCopiar = document.querySelector('.decodificador__caixadetexto__botao');
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function btnEncripitar() {
    const textoEncripitado = encriptar(textArea.value);
    textArea.value = textoEncripitado;
    botaoCopiar.disabled = false;
}

function btnDesencriptar() {
    const textoDesencripitado = desencriptar(textArea.value);
    textArea.value = textoDesencripitado;
    botaoCopiar.disabled = false; 
}

function encriptar (stringEncripitada) {
    stringEncripitada = stringEncripitada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncripitada.includes(matrizCodigo[i][0])) {
            stringEncripitada = stringEncripitada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncripitada;
}

function desencriptar (stringDesencripitada) {
    stringDesencripitada = stringDesencripitada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencripitada.includes(matrizCodigo[i][1])) {
            stringDesencripitada = stringDesencripitada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencripitada;
}

botaoCopiar.addEventListener('click', function() {
    navigator.clipboard.writeText(textArea.value)
        .then(function() {
            alert('Texto copiado para a área de transferência!');
        })
        .catch(function(err) {
            alert('Erro ao copiar texto: ' + err);
        });
});