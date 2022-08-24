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

class Hunter extends Traveler {
    constructor(nome) {
      super(nome)
      this.comida = 2
    }
    hunt(){
      return this.comida += 5
    }
    eat(){
      
        return this.comida > 1 ? this.comida -= 2 : this.estaSaudavel = false, this.comida = 0
    }
    giveFood(traveler, numOfFoodUnits){
      if (this.comida >= numOfFoodUnits){
        this.comida -= numOfFoodUnits
        traveler.comida += numOfFoodUnits
        return this, traveler
      } 
    }
  }
  
  class Doctor extends Traveler {
    constructor(nome) {
      super(nome)
    }
    heal(traveler){
      if (traveler.estaSaudavel === true){
        return traveler.estaSaudavel = false
      }
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

    totalFood() {
        return this.passageiros.reduce((contador, {comida}) => {
            return contador += comida
        }, 0)
    }
}
// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
 
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
 
wagon.join(maude); // Não tem espaço para ela!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
 
sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();
 
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
 
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)
 
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
 
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
 
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente
 
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);