let nomeHeroi = "SidTheFenrir"
let nivelHeroi = 1

for (let nivelHeroi = 1; nivelHeroi < 11000; nivelHeroi = nivelHeroi + 1000) {
    switch (true) {
        case (nivelHeroi >= 1 && nivelHeroi <= 1000):
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Ferro")
            break

        case (nivelHeroi >= 1001 && nivelHeroi <= 2000):
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Bronze")
            break

        case (nivelHeroi >= 2001 && nivelHeroi <= 5000): 
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Prata")
            break

        case (nivelHeroi >= 5001 && nivelHeroi <= 7000):
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Ouro")
            break

        case (nivelHeroi >= 7001 && nivelHeroi <= 8000):
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Platina")
            break

        case (nivelHeroi >= 8001 && nivelHeroi <= 9000):
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Ascendente")
            break

        case (nivelHeroi >= 9001 && nivelHeroi <= 10000):
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Imortal")
            break

        case (nivelHeroi >= 10001):
            console.log("O Herói de nome " + nomeHeroi + " está no nível de Radiante")
            break
    }
}       