interface Animal {
    name: string;
    makeSound(): void;
}

//Duck Typing 
class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log('Woof!');
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log('Meow!');
    }
}

function playWithAnimal(animal: Animal): void {
    console.log(`Playing with ${animal.name}`);
    animal.makeSound();
}

const dog = new Dog('Max');
const cat = new Cat('Mittens');

playWithAnimal(dog);
playWithAnimal(cat);