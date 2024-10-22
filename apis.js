function poke_aleatorio(){
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(response => response.json())
    .then(data =>{
    if (response.ok) {
        console.log("nome:", data.name);
        console.log("altura:", data.name);
        console.log("peso:", data.weight);
        console.log("habilidades:", ability.ability.name);
    }else{
        console.log("pokemon não encontrado")
    }
    })
}
function dez_primeiros(){
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(response => response.json())
    .then(data =>{
        for (let i =0;i<10;i++){
            console.log("nomes dos 10 primeiros:", data.resuits[i].name)
        }
    })
}
function buscapoke(){
    var pokemon = getElementById("buscapokedex")
    .then(response => response.json())
    .then(data =>{
        if (response.ok) {
            console.log("nome:", data.name);
            console.log("altura:", data.name);
            console.log("peso:", data.weight);
        }else{
            console.log("pokemon não encontrado")
        }
        })
    }