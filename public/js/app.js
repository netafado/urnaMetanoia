
(function (){
    // sons
    var finalizarSom    = document.getElementById('sonFinalizar');
    var clique          = document.getElementById('somClique'); 
    //botoes
    var btns            = document.querySelectorAll('.clicavel');
    var confirmar       = document.getElementById('confirmar');
    var corrigir        = document.getElementById('corrigir')
    // manifesto
    var manifesto       = document.getElementById('manifesto');
    var descManifesto   = document.getElementById('manifiesto-desc');

    // adiciona os evento de click aos botões da urna
     btns.forEach(function(element){
        element.addEventListener('click', function(){
            clique.play();
            // se for o primeiro clique então
            if( manifesto.innerHTML === "00")
                manifesto.innerHTML = ""

            manifesto.innerHTML += this.dataset.number
            // limita o campo a 2 caracteres
            if( manifesto.innerHTML.length > 2 || parseInt(manifesto.innerHTML) > 28 || parseInt(manifesto.innerHTML) <= 0)
            {
                manifesto.innerHTML = "00";
                confirmar.setAttribute("disabled", true);
                descManifesto.innerHTML = ""
                return
            }

            let numeroManifesto = parseInt(manifesto.innerHTML);
            confirmar.removeAttribute("disabled")
            switch(numeroManifesto){
                case 1:
                    descManifesto.innerHTML = "EU DESEJO QUE AS EMPRESAS SEJAM COMUNIDADES.";
                    break;
                case 2:
                    descManifesto.innerHTML = "QUE O HOLOGRAMA SE FUNDA E SE CONFUNDA COMO UM ÚNICO DESEJO.";
                    break;
                case 3:
                    descManifesto.innerHTML = "EU DESEJO UMA COMUNIDADE GERADORA DE LÍDERES DE COMUNIDADES.";
                    break;
                case 4:
                    descManifesto.innerHTML = "EU DESEJO IMPULSIONAR RESULTADOS DE CORPO, MENTE E ALMA.";
                    break;
                case 5:
                    descManifesto.innerHTML = "EU DESEJO IGUALDADE DE OPORTUNIDADES E RIQUEZA PARA TODOS.";
                    break;
                case 6:
                    descManifesto.innerHTML = "EU DESEJO QUE AS RIQUEZAS GERADAS SEJAM INVESTIDAS EM PROL DA COMUNIDADE.";
                    break;
                case 7:
                    descManifesto.innerHTML = "EU DESEJO COMPARTILHAR CONHECIMENTOS E EXPERIÊNCIAS.";
                    break;
                case 8:
                    descManifesto.innerHTML = "EU DESEJO A CRIAÇÃO COLETIVA.";
                    break;
                case 9:
                    descManifesto.innerHTML = "EU DESEJO EMPRESAS COM VALORES PROGRESSISTAS.";
                    break;
                case 10:
                    descManifesto.innerHTML = "EU DESEJO PRESERVAR O PLANETA.";
                    break;
                case 11:
                    descManifesto.innerHTML = "EU DESEJO INCLUSÃO.";
                    break;
                case 12:
                    descManifesto.innerHTML = "EU DESEJO QUE O BEM COLETIVO SUPERE O INDIVIDUAL.";
                    break;
                case 13:
                    descManifesto.innerHTML = "EU DESEJO QUE AS NOSSAS RELAÇÕES SEJAM PAUTADAS NO AMOR INCONDICIONAL.";
                case 14:
                    descManifesto.innerHTML = "EU DESEJO SER EDUCADOR COMO AGENTE DE TRANSFORMAÇÃO.";
                    break;
                case 15:
                    descManifesto.innerHTML = "EU DESEJO DESENVOLVER A CONSCIÊNCIA HUMANA.";
                    break;
                case 16:
                    descManifesto.innerHTML = "EU DESEJO RETRIBUIR.";
                    break;
                case 17:
                    descManifesto.innerHTML = "EU DESEJO BENEFICIAR A VIDA.";
                    break;
                case 18:
                    descManifesto.innerHTML = "EU DESEJO ESPIRITUALIDADE NOS NEGÓCIOS.";
                    break;
                case 19:
                    descManifesto.innerHTML = "EU DESEJO VIVER UM PROPÓSITO COLETIVO.";
                    break;
                case 20:
                    descManifesto.innerHTML = "EU DESEJO VIVER O MEU TRABALHO COMO UM ATO DE AMOR.";
                    break;
                case 21:
                    descManifesto.innerHTML = "EU DESEJO GRATIDÃO A UM BEM MAIOR.";
                    break;
                case 22:
                    descManifesto.innerHTML = "EU DESEJO VIVER EM PLENITUDE.";
                    break;
                case 23:
                    descManifesto.innerHTML = "EU DESEJO VIVER UMA COMUNIDADE ÉTICA E HUMANA.";
                    break;
                case 24:
                    descManifesto.innerHTML = "EU DESEJO INSPIRAR A ESSÊNCIA DAS PESSOAS.";
                    break;
                case 25:
                    descManifesto.innerHTML = "EU DESEJO UM MUNDO DE ABUNDÂNCIA.";
                    break;
                case 26:
                    descManifesto.innerHTML = "EU DESEJO EXPANDIR A MINHA DEVOÇÃO.";
                    break;
                case 27:
                    descManifesto.innerHTML = "EU DESEJO ALIMENTAR A MINHA FÉ.";
                    break;
                case 28:
                    descManifesto.innerHTML = "EU DESEJO QUE SE CUMPRA O PAPEL DE CADA UM, COMO SER ESPIRITUAL.";
                    break;
                default:
                    descManifesto.innerHTML = " ";
                    break;
            }

        })
    })

    // corrigir
    corrigir.addEventListener('click', function(){
        manifesto.innerHTML = "00";
        confirmar.setAttribute("disabled", true);
        descManifesto.innerHTML = "";
    })

    confirmar.addEventListener('click', function(){        
        window.location="final.html"
    });
   
})()