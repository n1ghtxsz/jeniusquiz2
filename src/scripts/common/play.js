document.getElementById('game_button').onclick = function () {
    document.body.classList.add('circle-out-animation')
    setTimeout(() => {
        document.querySelector('main').classList.add('d-none')
        document.querySelector('footer').classList.add('d-none')
        document.querySelector('section.game').classList.remove('d-none')
        document.querySelector('span.newtralstudios').classList.remove('d-none')
        document.body.classList.remove('circle-out-animation')
        document.body.classList.add('in-circle-hesitate')
    }, 2500);
}

function showNextQuestion(idAtual, idNovo) {
    document.getElementById(idAtual).classList.remove('d-block')
    document.getElementById(idAtual).classList.add('d-none')
    document.getElementById(idNovo).classList.remove('d-none')
    document.getElementById(idNovo).classList.add('d-block')
}

document.getElementById('todos').addEventListener('click', function () {
    const q40 = document.getElementById('q40');
    const q43 = document.getElementById('q43')
    
    if (q40 && q40.classList.contains('d-block')) {
        showNextQuestion('q40', 'q41');
    }

    if (q43 && q43.classList.contains('d-block')) {
        showNextQuestion('q43', 'q44')
    }
});

document.querySelector('span#reserva').addEventListener('click', function () {
    const q47 = document.getElementById('q47')

    if (q47 && q47.classList.contains('d-block')) {
        showNextQuestion('q47', 'q48')
    }
})

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 50; i++) {
        const questao = document.getElementById('q' + i);
        if (questao) {
            const questionDiv = questao.querySelector('.question');
            if (questionDiv) {
                const botoes = questionDiv.querySelectorAll('button');
                botoes.forEach(botao => {
                    const onclick = botao.getAttribute('onclick');
                    if (!onclick || !onclick.includes('showNextQuestion')) {
                        // Botão considerado errado, adiciona evento de morte
                        botao.addEventListener('click', function () {
                            document.querySelector('section.game').classList.add('d-none');
                            document.querySelector('span.death').classList.remove('d-none');
                            const audio = document.getElementById('failsound');
                            audio.currentTime = 0;
                            audio.play();
                        });
                    }
                });
            }
        }
    }
});