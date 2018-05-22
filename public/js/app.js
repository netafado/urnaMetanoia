
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

    btns.forEach(function(element){
        element.addEventListener('click', function(){
            clique.play();
            console.log(this.dataset.number);
            if( manifesto.innerHTML === "00")
                manifesto.innerHTML = ""
            manifesto.innerHTML += this.dataset.number

            if(manifesto.innerHTML.length > 2)
                manifesto.innerHTML = "00"
        })
    })

    confirmar.addEventListener('click', function(){
        finalizarSom.play();
    })


    
})()