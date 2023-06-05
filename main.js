const ajuste = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')
console.log(estatisticas)
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
function clicou(event){
    let elementoContador = event.target.parentNode.querySelector('[data-contador]');
    
    if(event.target.dataset.controle==='+'){
        elementoContador.value=parseInt(elementoContador.value)+1
        estatisticas.forEach((e)=>{
            e.innerHTML=parseInt(e.innerHTML)+pecas[event.target.dataset.peca][e.dataset.estatistica]
            
        })
    }
    
    if(elementoContador.value>0){
        if(event.target.dataset.controle==='-'){
            elementoContador.value=parseInt(elementoContador.value) -1
            estatisticas.forEach((e)=>{
                e.innerHTML=parseInt(e.innerHTML)-pecas[event.target.dataset.peca][e.dataset.estatistica]
            })
        }
    }
}

ajuste.forEach((elemento)=>{
    elemento.addEventListener('click', clicou)
})
