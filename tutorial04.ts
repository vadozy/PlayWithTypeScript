(function() {
    class Animal {
        public favFood: string;
        private age: number;
        static numOfAnimals: number = 0;

        constructor (private name: string, favFood, age) {
            this.favFood = favFood;
            this.age = age;
            Animal.numOfAnimals++;
        }

        f1 = function () {
            console.log(`inside f1 this.age = ${this.age}`);
        };

        f2 = () => {
            console.log(`inside f2 this.age = ${this.age}`);
        };
    }

    class Dog extends Animal {

        constructor (name, favFood, age, private kind: string) {
            super(name, favFood, age);
        }
    }

    console.log(new Dog('Spot', 'bone', 4, 'poodle'));

})();

