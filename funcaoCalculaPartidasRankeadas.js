let saldoVitorias = calculadoraPartidasRankeadas(86,5)
let nivel = classificaNivelHeroi()

function calculadoraPartidasRankeadas(vitorias,derrotas){
    let saldo = vitorias - derrotas
    return saldo
}
function classificaNivelHeroi(){
    let nivelHeroi
    if(saldoVitorias <= 10){
        nivelHeroi = "Ferro"
    }else if(saldoVitorias <= 20){
        nivelHeroi = "Bronze"
    }else if(saldoVitorias <= 50){
        nivelHeroi = "Prata"
    }else if(saldoVitorias <= 80){
        nivelHeroi = "Ouro"
    }else if(saldoVitorias <= 90){
        nivelHeroi = "Diamante"
    }else if(saldoVitorias <= 100){
        nivelHeroi = "Lendário"
    }else if(saldoVitorias >= 101){
        nivelHeroi = "Imortal"
    }
    return nivelHeroi
}
    

console.log("O herói tem saldo de "+saldoVitorias+" vitórias e está no nível "+nivel)