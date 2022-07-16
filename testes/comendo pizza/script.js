function enviar() {
    var tamanho = document.getElementsByName('tamanho')
    var restam = document.getElementById('res-tam')
    var resped = document.getElementById('res-ped')
    if (tamanho[0].checked) {
        restam.innerHTML = `Você escolheu a pizza tamanho pequena, ela tem 8 pedaços.`
        var pedaco = 8
        var botao = document.createElement("input");  
        botao.type = 'button';  
        botao.value = 'Comer pedaço';  
        botao.onclick = function() {comer()};  
        document.body.appendChild(botao);
        function comer() {
            while (pedaco > 0 && pedaco <= 8) {
                pedaco --
                resped.innerHTML += `Ainda restam ${pedaco} <br>`
                break
            }
        }
    } else if (tamanho[1].checked) {
        restam.innerHTML = `Você escolheu a pizza tamanho média, ela tem 12 pedaços.`
        var pedaco = 12
        var botao = document.createElement("input");  
        botao.type = 'button';  
        botao.value = 'Comer pedaço';  
        botao.onclick = function() {comer()};  
        document.body.appendChild(botao);
        function comer() {
            while (pedaco > 0 && pedaco <= 12) {
                pedaco --
                resped.innerHTML += `Ainda restam ${pedaco} <br>`
                break
            }
        }
    } else if (tamanho[2].checked) {
        restam.innerHTML = `Você escolheu a pizza tamanho grande, ela tem 16 pedaços.`
        var pedaco = 16
        var botao = document.createElement("input");  
        botao.type = 'button';  
        botao.value = 'Comer pedaço';  
        botao.onclick = function() {comer()};  
        document.body.appendChild(botao);
        function comer() {
            while (pedaco > 0 && pedaco <= 16) {
                pedaco --
                resped.innerHTML += `Ainda restam ${pedaco} <br>`
                break
            }
        }
    } else if (tamanho[3].checked) {
        restam.innerHTML = `Você escolheu a pizza tamanho família, ela tem 20 pedaços.`
        var pedaco = 20
        var botao = document.createElement("input");  
        botao.type = 'button';  
        botao.value = 'Comer pedaço';  
        botao.onclick = function() {comer()};  
        document.body.appendChild(botao);
        function comer() {
            while (pedaco > 0 && pedaco <= 20) {
                pedaco --
                resped.innerHTML += `Ainda restam ${pedaco} <br>`
                break
            }
        }
    }
}