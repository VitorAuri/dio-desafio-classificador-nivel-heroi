const { faker } = require('@faker-js/faker');

function verificarNivelEAtualizar(heroi) {
    if (heroi.experiencia < 1000) {heroi.nivel = "Ferro";}
    else if (heroi.experiencia >= 1001 && heroi.experiencia <= 2000) {heroi.nivel = "Bronze";}
    else if (heroi.experiencia >= 2001 && heroi.experiencia <= 5000) {heroi.nivel = "Prata";} 
    else if (heroi.experiencia >= 5001 && heroi.experiencia <= 7000) {heroi.nivel = "Ouro";} 
    else if (heroi.experiencia >= 7001 && heroi.experiencia <= 8000) {heroi.nivel = "Platina";} 
    else if (heroi.experiencia >= 8001 && heroi.experiencia <= 9000) {heroi.nivel = "Ascendente";} 
    else if (heroi.experiencia >= 9001 && heroi.experiencia <= 10000) {heroi.nivel = "Imortal";} 
    else if (heroi.experiencia > 10000) {heroi.nivel = "Radiante";}

    console.log("O Herói de nome "+heroi.nome+" está no nível de "+heroi.nivel);
}
function gerarVariosHerois(heroisParaSeremGerados) {
    function gerarHeroi() {
        return {
            nome: faker.person.firstName(),
            experiencia: Math.floor(Math.random() * 15001),
            nivel: ""
        };
    }
    for(let i = 0; i < heroisParaSeremGerados; i++) {
        let heroi = gerarHeroi();
        verificarNivelEAtualizar(heroi);
    }
}

gerarVariosHerois(10);


