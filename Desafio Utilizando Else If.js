let nomeHeroi = "SidTheFenrir"
let nivelHeroi = 0

for (let nivelHeroi = 1; nivelHeroi < 11000; nivelHeroi = nivelHeroi + 1000) {
    if (nivelHeroi <= 1000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Ferro")
    }
    else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Bronze")
    }
    else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Prata")
    }
    else if (nivelHeroi >= 5001 && nivelHeroi <= 7000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Ouro")
    }
    else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Platina")
    }
    else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Ascendente")
    }
    else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Imortal")
    }
    else if (nivelHeroi >= 10001) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Radiante")
    }
}

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante