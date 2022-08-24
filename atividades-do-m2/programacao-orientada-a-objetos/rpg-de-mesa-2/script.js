class Traveler {
    constructor(nome) {
        this.nome = nome;
        this.comida = 1;
        this.estaSaudavel = true;
    }

    hunt() {
        this.comida += 2
    }

    eat() {
        return this.comida > 0 ? this.comida -= 1 : this.estaSaudavel = false
    }
}

class Wagon {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.passageiros = [] 
    }

    getAvailableSeatCount() {
        return this.capacidade
    }

    join(traveler) {
        return this.capacidade > 0 ? this.passageiros.push(traveler) && this.capacidade-- : false
    }

    shouldQuarantine() {
        return this.passageiros.some(elem => elem.estaSaudavel === false)
    }

    totalfood() {
        return this.passageiros.reduce((contador, {comida}) => {
            return contador += comida
        }, 0)
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalfood()} should be 3`);