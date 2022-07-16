var num = document.getElementById('txtn')
var tab = document.getElementById('seltab')
var res = document.getElementById('res')
var valores = []

function numeros(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
       return true 
    }else {
        return false
    }
}

function lista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    res.innerHTML = ''
    if (numeros(num.value) && lista(num.value, valores)) {
        var n = Number(num.value)
        valores.push(n)
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        item.value = `tab${n}`
        tab.appendChild(item)
    } else {
        window.alert ('Valor informado inválido ou já existente na tabela!')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert ('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        var min = Math.min.apply(null, valores)
        var max = Math.max.apply(null, valores)
        res.innerHTML += `<p>O maior valor informado foi ${max}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${min}.</p>`
        var soma = 0
        for (var i = 0; i < valores.length; i++) {
            soma += valores[i]
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        var media = soma/valores.length
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }

}