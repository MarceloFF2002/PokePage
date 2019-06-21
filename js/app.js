var item1_nome = document.querySelector("#item1_nome");
var item1_img = document.querySelector("#item1_img");
var modal1_nome = document.querySelector("#modal1_nome");
var modal1_img = document.querySelector("#modal1_img");

var item2_nome = document.querySelector("#item2_nome");
var item2_img = document.querySelector("#item2_img");
var modal2_nome = document.querySelector("#modal2_nome");
var modal2_img = document.querySelector("#modal2_img");

var item3_nome = document.querySelector("#item3_nome");
var item3_img = document.querySelector("#item3_img");
var modal3_nome = document.querySelector("#modal3_nome");
var modal3_img = document.querySelector("#modal3_img");

var item4_nome = document.querySelector("#item4_nome");
var item4_img = document.querySelector("#item4_img");
var modal4_nome = document.querySelector("#modal4_nome");
var modal4_img = document.querySelector("#modal4_img");

var item5_nome = document.querySelector("#item5_nome");
var item5_img = document.querySelector("#item5_img");
var modal5_nome = document.querySelector("#modal5_nome");
var modal5_img = document.querySelector("#modal5_img");

var item6_nome = document.querySelector("#item6_nome");
var item6_img = document.querySelector("#item6_img");
var modal6_nome = document.querySelector("#modal6_nome");
var modal6_img = document.querySelector("#modal6_img");

var item7_nome = document.querySelector("#item7_nome");
var item7_img = document.querySelector("#item7_img");
var modal7_nome = document.querySelector("#modal7_nome");
var modal7_img = document.querySelector("#modal7_img");

var item8_nome = document.querySelector("#item8_nome");
var item8_img = document.querySelector("#item8_img");
var modal8_nome = document.querySelector("#modal8_nome");
var modal8_img = document.querySelector("#modal8_img");

var item9_nome = document.querySelector("#item9_nome");
var item9_img = document.querySelector("#item9_img");
var modal9_nome = document.querySelector("#modal9_nome");
var modal9_img = document.querySelector("#modal9_img");






fetch('https://pokeapi.co/api/v2/pokemon/raichu/')
.then(function(resposta){
    return resposta.json();

})
.then(function(dados){
    console.log(dados);
    
    item1_nome.textContent = dados.name;
    modal1_nome.textContent = dados.name;

    item1_img.src = dados.sprites.front_default;
    modal1_img.src = dados.sprites.front_default;
});

fetch('https://pokeapi.co/api/v2/pokemon/charizard/')
.then(function(resposta){
    return resposta.json();

})
.then(function(dados){
    console.log(dados);
    
    item2_nome.textContent = dados.name;
    modal2_nome.textContent = dados.name;

    item2_img.src = dados.sprites.front_default;
    modal2_img.src = dados.sprites.front_default;
});


fetch('https://pokeapi.co/api/v2/pokemon/snorlax/')
.then(function(resposta){
    return resposta.json();

})
.then(function(dados){
    console.log(dados);
    
    item3_nome.textContent = dados.name;
    modal3_nome.textContent = dados.name;

    item3_img.src = dados.sprites.front_default;
    modal3_img.src = dados.sprites.front_default;
});

fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
.then(function(resposta){
    return resposta.json();

})
.then(function(dados){
    console.log(dados);
    
    item4_nome.textContent = dados.name;
    modal4_nome.textContent = dados.name;

    item4_img.src = dados.sprites.front_default;
    modal4_img.src = dados.sprites.front_default;
});

fetch('https://pokeapi.co/api/v2/pokemon/psyduck/')
.then(function(resposta){
    return resposta.json();

})
.then(function(dados){
    console.log(dados);
    
    item5_nome.textContent = dados.name;
    modal5_nome.textContent = dados.name;

    item5_img.src = dados.sprites.front_default;
    modal5_img.src = dados.sprites.front_default;
});

fetch('https://pokeapi.co/api/v2/pokemon/charmander/')
.then(function(resposta){
    return resposta.json();

})
.then(function(dados){
    console.log(dados);
    
    item6_nome.textContent = dados.name;
    modal6_nome.textContent = dados.name;

    item6_img.src = dados.sprites.front_default;
    modal6_img.src = dados.sprites.front_default;
});

fetch('https://pokeapi.co/api/v2/pokemon/mewtwo/')
.then(function(resposta){
    return resposta.json();

})
.then(function(dados){
    console.log(dados);
    
    item7_nome.textContent = dados.name;
    modal7_nome.textContent = dados.name;

    item7_img.src = dados.sprites.front_default;
    modal7_img.src = dados.sprites.front_default;
});

fetch('https://pokeapi.co/api/v2/pokemon/rayquaza/')
.then(function(resposta){
    return resposta.json();

})
.then(function(dados){
    console.log(dados);
    
    item8_nome.textContent = dados.name;
    modal8_nome.textContent = dados.name;

    item8_img.src = dados.sprites.front_default;
    modal8_img.src = dados.sprites.front_default;
});

fetch('https://pokeapi.co/api/v2/pokemon/mew/')
.then(function(resposta){
    return resposta.json();

})
.then(function(dados){
    console.log(dados);
    
    item9_nome.textContent = dados.name;
    modal9_nome.textContent = dados.name;

    item9_img.src = dados.sprites.front_default;
    modal9_img.src = dados.sprites.front_default;
});
