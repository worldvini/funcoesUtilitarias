'use strict';

function stringAleatoria(n) {
    var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var vogais = ["a", "e", "i", "o", "u"];
    var novoNome = "";
    for (i = 0; i < n; i++) {
        if (i % 2 == 0)
            novoNome = novoNome + consoantes[Math.floor(Math.random() * 21)]
        else
            novoNome = novoNome + vogais[Math.floor(Math.random() * 5)]
    }
    return novoNome
}

function criarNome() {
    var nomeCompleto;
    nomeCompleto = stringAleatoria(6) + " " + stringAleatoria(10)
    return nomeCompleto
}

function gerarCpf() {
    var cpf = [];
    var soma = 0;
    var mult = 10;
    var resto;

    for (i = 0; i < 9; i++) {
        cpf.push(Math.floor(Math.random() * 10))
        soma = soma + (cpf[i] * (mult - i));
    }

    resto = soma % 11;
    if (resto < 2)
        cpf.push(0);
    else
        cpf.push(11 - resto);

    soma = 0;
    mult++;

    for (i = 0; i < 10; i++) {
        soma = soma + (cpf[i] * (mult - i));
    }

    resto = soma % 11;
    if (resto < 2)
        cpf.push(0);
    else
        cpf.push(11 - resto);

    return cpf.join('');
}

function mascaraNumerica(valor) {
    var valorSemCaracteres = valor.replace('.', '')
    var valorSemCaracteres = valorSemCaracteres.replace(',', '')
    var tamanho = valor.length;
    if (tamanho > 2) {
        var arrayValor = valorSemCaracteres.split('').reverse();
        arrayValor.splice(2, 0, ',')
        if (tamanho > 5) {
            arrayValor.splice(6, 0, '.')
            if (tamanho > 8)
                arrayValor.splice(10, 0, '.')
        }
    }
    return arrayValor.reverse().join('')
}