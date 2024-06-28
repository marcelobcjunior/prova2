window.onload = function () {
    tratar_eventos();
    tocar_audio('abertura');
}

function tratar_eventos() {

    // Jogador clicou no botão começar/reinciar jogo.
    document.getElementById("btn-comecar").onclick = function () {
        tocar_audio('comecar');
        document.getElementById("comecar").style.display = "none";
        document.getElementById("pergunta1000").style.display = "block";
    }

    // Analisar resposta da pergunta de R$1000
    document.getElementById("form-pergunta1000").onsubmit = function () {
        var opcao_correta = "3";
        var opcao_selecionada = this.pergunta1000.value;

        if (opcao_selecionada == opcao_correta) {
            
            tocar_audio('acertou');

            setTimeout(function () {
                document.getElementById("pergunta1000").style.display = "none";
                document.getElementById("pergunta2000").style.display = "block";
                tocar_audio('pergunta-2000');
            }, 1000);
        }
        else {
            document.getElementById("pergunta1000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    // Analisar resposta da pergunta de R$2000
    document.getElementById("form-pergunta2000").onsubmit = function () {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta2000.value;

        if (opcao_selecionada == opcao_correta) {
            
            tocar_audio('acertou');

            setTimeout(function () {
                document.getElementById("pergunta2000").style.display = "none";
                document.getElementById("pergunta4000").style.display = "block";
                tocar_audio('pergunta-3000');
            }, 1000);
        }
        else {
            document.getElementById("pergunta2000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

     
     //Analisar resposta da pergunta de R$4000
     
     document.getElementById("form-pergunta4000").onsubmit = function() {
        var opcao_correta = "1";
        var opcao_selecionada = this.pergunta4000.value;

        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-10000');
            document.getElementById("pergunta4000").style.display = "none";
            document.getElementById("pergunta10000").style.display = "block";
        } else {
            document.getElementById("pergunta4000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }
        return false;

    }

     
      //Analisar resposta da pergunta de R$10000
     
     document.getElementById("form-pergunta10000").onsubmit = function() {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta10000.value;

        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-30000');
            document.getElementById("pergunta10000").style.display = "none";
            document.getElementById("pergunta30000").style.display = "block";
        } else {
            document.getElementById("pergunta10000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }
        return false;

    }

     
     //Analisar resposta da pergunta de R$30000
    
     document.getElementById("form-pergunta30000").onsubmit = function() {
        var opcao_correta = "1";
        var opcao_selecionada = this.pergunta30000.value;

        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-50000');
            document.getElementById("pergunta30000").style.display = "none";
            document.getElementById("pergunta50000").style.display = "block";
        } else {
            document.getElementById("pergunta30000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }
        return false;

    }

     
     // Analisar resposta da pergunta de R$50000
     
     document.getElementById("form-pergunta50000").onsubmit = function() {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta50000.value;

        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-100000');
            document.getElementById("pergunta50000").style.display = "none";
            document.getElementById("pergunta100000").style.display = "block";
        } else {
            document.getElementById("pergunta50000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }
        return false;

    }

    //Analisar resposta da pergunta de R$100000
     
     document.getElementById("form-pergunta100000").onsubmit = function() {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta100000.value;

        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-300000');
            document.getElementById("pergunta100000").style.display = "none";
            document.getElementById("pergunta300000").style.display = "block";
        } else {
            document.getElementById("pergunta100000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }
        return false;

    }

     /**
     * Analisar resposta da pergunta de R$300000
     */
     document.getElementById("form-pergunta300000").onsubmit = function() {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta300000.value;

        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-500000');
            document.getElementById("pergunta300000").style.display = "none";
            document.getElementById("pergunta500000").style.display = "block";
        } else {
            document.getElementById("pergunta300000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }
        return false;

    }

     /**
     * Analisar resposta da pergunta de R$500000
     */
     document.getElementById("form-pergunta500000").onsubmit = function() {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta500000.value;

        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-1000000');
            document.getElementById("pergunta500000").style.display = "none";
            document.getElementById("pergunta1000000").style.display = "block";
        } else {
            document.getElementById("pergunta500000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }
        return false;

    }

     /**
     * Analisar resposta da pergunta de R$1000000
     */
     document.getElementById("form-pergunta1000000").onsubmit = function() {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta1000000.value;

        if(opcao_selecionada == opcao_correta) {
            tocar_audio('ganhou');
        } else {
            document.getElementById("pergunta1000000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }
        return false;

    }

    // Função caso o jogador perca.

    function reiniciar_jogo() {
        document.getElementById("comecar").style.display = "block";
        document.getElementById("btn-comecar").innerHTML = "Jogar Novamente";
    }
}

// Função para  executar a voz do Silvio Santos, em cada uma das ocasiões.
function tocar_audio(qual_tocar) {

    var audio = document.getElementById("silvio-santos");

    switch (qual_tocar) {
        case 'abertura':
            audio.src = "audio/abertura-show-do-milhao.mp3";
            break;

        case 'comecar':
            audio.src = "audio/1000.wav";
            break;

        case 'acertou':
            audio.src = "audio/parabens.wav";
            break;

        case 'ganhou':
            audio.src = "audio/ganhou.wav";
            break;

        case 'errou':
            audio.src = "audio/errou.wav";
            break;

        case 'pergunta-2000':
            audio.src = "audio/2000.wav";
            break;

        case 'pergunta3000':
            audio.src = "audio/3000.wav";
            break;
    }

    audio.play();
}