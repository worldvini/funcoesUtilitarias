'use strict';

function stringAleatoria(n) {
    var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var vogais = ["a", "e", "i", "o", "u"];
    var novoNome = "";
    for (var i = 0; i < n; i++) {
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

    for (var i = 0; i < 9; i++) {
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

    for (var i = 0; i < 10; i++) {
        soma = soma + (cpf[i] * (mult - i));
    }

    resto = soma % 11;
    if (resto < 2)
        cpf.push(0);
    else
        cpf.push(11 - resto);

    return cpf.join('');
}

function mascaraNumerica(valor = '') {
    if (!inputValue || isNaN(Number(inputValue))) {
        return inputValue
    }

    if (typeof inputValue === 'number') {
        inputValue = inputValue.toFixed(2).toString()
    }

    var test = /\D/g
    var valueWithoutCaracteres = inputValue.replace(test, '')
    var size = valueWithoutCaracteres.length

    if (size > 2) {
        var arrValue = valueWithoutCaracteres.split('').reverse()
        arrValue.splice(2, 0, ',')

        if (size > 5) {
            arrValue.splice(6, 0, '.')
            if (size > 8)
                arrValue.splice(10, 0, '.')
        }
        return arrValue.reverse().join('')
    }

    return inputValue

}

function moneyLeftZero(value) {
    var leftZero = 4 - value.length
    if (leftZero <= 0) {
        var offZero = value.length - 4
        if (offZero > 0) {
            /* value com lenght maior que 4, verifica se tem 0 
            * a esquerda até o valor ficar igual a 4 ou encontrar algo diferente de 0
            */
            var notSeeOtherCaracter = true
            var arrayValue = value.split('')
            for (var i = 0; i < offZero; i++) {
                if (arrayValue[i] != '0') {
                    notSeeOtherCaracter = true
                }
                if (arrayValue[i] == '0' && notSeeOtherCaracter) {
                    arrayValue.splice(0, 1)
                }
            }
            return arrayValue.join('')
        }
        //value com lenght igual a 4, retorna o value
        return value
    }
    //value lenght menor que 4, completa com 0 a esquerda
    for (var i = 0; i < leftZero; i++) {
        value = '0' + value
    }
    return value
}

function slugify(message) {

    if (message)
        return message
            .toLowerCase()
            .replace(/[àÀáÁâÂãäÄÅåª]+/g, "a") // Special Characters #1
            .replace(/[èÈéÉêÊëË]+/g, "e") // Special Characters #2
            .replace(/[ìÌíÍîÎïÏ]+/g, "i") // Special Characters #3
            .replace(/[òÒóÓôÔõÕöÖº]+/g, "o") // Special Characters #4
            .replace(/[ùÙúÚûÛüÜ]+/g, "u") // Special Characters #5
            .replace(/[ýÝÿŸ]+/g, "y") // Special Characters #6
            .replace(/[ñÑ]+/g, "n") // Special Characters #7
            .replace(/[çÇ]+/g, "c") // Special Characters #8
            .replace(/[ß]+/g, "ss") // Special Characters #9
            .replace(/[Ææ]+/g, "ae") // Special Characters #10
            .replace(/[Øøœ]+/g, "oe") // Special Characters #11
            .replace(/[%]+/g, "pct") // Special Characters #12
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(/[^\w\-]+/g, "") // Remove all non-word chars
            .replace(/\-\-+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, "");            		// Trim - from end of text
    return ''

}

function holidayFactory(data, descricao) {
    /* Retira array[0] e array[1] */
    var [dia, mes] = data.split('/')

    return {
        data,
        dia,
        mes,
        descricao
    }
}

var feriados = [
    holidayFactory("01/01/xxxx", "Confraternização Universal"),
    holidayFactory("21/04/xxxx", "Tiradentes"),
    holidayFactory("01/05/xxxx", "Dia do Trabalho"),
    holidayFactory("07/05/xxxx", "Independência do Brasil"),
    holidayFactory("12/10/xxxx", "Nossa Senhora Aparecida"),
    holidayFactory("02/11/xxxx", "Finados"),
    holidayFactory("21/04/xxxx", "Tiradentes"),
    holidayFactory("15/11/xxxx", "Proclamação da República"),
    holidayFactory("25/12/xxxx", "Natal")
]

function createRandomKey() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0
            , v = c == 'x' ? r : (r & 0x3 | 0x8)

        return v.toString(16)
    })
}



function comparandoObjetos(obj1, obj2) {


}