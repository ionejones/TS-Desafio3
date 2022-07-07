
// ******************************************************************************************************
// Desafio3
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma  = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
var valor:number;

valor = 0;

if (campoSaldo) {
  campoSaldo.innerHTML = '0';
}

function somarAoSaldo(soma:number) {
    if (campoSaldo) {
       valor += soma;      
    campoSaldo.innerHTML = String(valor);
}
}

function limparSaldo() {
    if (campoSaldo) {
       campoSaldo.innerHTML = '0';
       valor = 0;
       soma.value = '';
    }
}

//if (botaoAtualizar) {
botaoAtualizar.addEventListener('click', function () {
 
    somarAoSaldo(Number(soma.value));
});
//}

//if (botaoLimpar) {
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
//}

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */

