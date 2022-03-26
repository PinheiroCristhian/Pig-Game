let rolarDadoBtn = document.querySelector('.rolar-dado');
let guardarPontosBtn = document.querySelector('.guardar-pontos');
let novoJogoBtn = document.querySelector('.novo-jogo');
let imagemDado = document.querySelector('#dado');
let pontoJogador1 = document.querySelector('.jogador1-pontos-totais');
let pontoJogador2 = document.querySelector('.jogador2-pontos-totais');
let pontoTotal1 = document.querySelector('.pontos-atuais-jogador1');
let pontoTotal2 = document.querySelector('.pontos-atuais-jogador2');
let ponto1 = 0;
let ponto2 = 0;
let pontosAtuais1 = 0;
let pontosAtuais2 = 0;
let jogadorAtual = 1;

function rolarDado() {
    return Math.floor(Math.random() * (7 - 1) + 1);
}

rolarDadoBtn.addEventListener('click', function() {
    let dado = rolarDado();
    imagemDado.src = `./imagens/dice-${dado}.png`;

    if (jogadorAtual === 1) {
        if (dado === 1) {
            jogadorAtual = 2;
            pontosAtuais1 = 0;
            pontoJogador1.innerText = 0;
            return '';
        } else {
            pontoJogador1.innerText = pontosAtuais1 + dado;
            pontosAtuais1 = pontosAtuais1 + dado;
        }
    } else {
        if (dado === 1) {
            jogadorAtual = 1;
            pontosAtuais2 = 0;
            pontoJogador2.innerText = 0;
            return '';
        } else {
            pontoJogador2.innerText = pontosAtuais2 + dado;
            pontosAtuais2 = pontosAtuais2 + dado;
        } 
    }  
});

guardarPontosBtn.addEventListener('click', function() {
    if (jogadorAtual === 1) {
        pontoTotal1.innerText = pontosAtuais1 + ponto1;
        ponto1 += pontosAtuais1;
        pontosAtuais1 = 0;
        pontoJogador1.innerText = 0;
        jogadorAtual = 2;
        verificarVitoria();
        return '';
    } else {
        pontoTotal2.innerText = pontosAtuais2 + ponto2;
        ponto2 += pontosAtuais2;
        pontosAtuais2 = 0;
        pontoJogador2.innerText = 0;
        jogadorAtual = 1;
        verificarVitoria();
        return '';
    }
});

novoJogoBtn.addEventListener('click', function() {
    reiniciarJogo();
});
function reiniciarJogo() {
    pontoTotal1.innerText = 0;
    ponto1 = 0;
    pontosAtuais1 = 0;
    pontoJogador1.innerText = 0;
    pontoTotal2.innerText = 0;
    ponto2 = 0;
    pontosAtuais2 = 0;
    pontoJogador2.innerText = 0;
    jogadorAtual = 1;
}
function verificarVitoria() {
    if (ponto1 >= 100) {
        alert('Jogador 1 Venceu')
    } else if (ponto2 >= 100) {
        alert('Jogador 2 Venceu');
    } else {
        return '';
    }
}
