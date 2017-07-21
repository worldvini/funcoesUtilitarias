'use strict'



document.getElementById('gerandoNameAleatorio').addEventListener('click', function() {
    document.getElementById('nameAleatorio').value = criarNome();
})

document.getElementById('gerandoCPF').addEventListener('click', function() {
    document.getElementById('validoCPF').value = gerarCpf();
})

document.getElementById('valueMask').addEventListener('keyup', function(e) {
    console.log(e.target.value)
    e.target.value = mascaraNumerica(e.target.value);
})