var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Animal = /** @class */ (function () {
        function Animal(name, favFood, age) {
            var _this = this;
            this.name = name;
            this.f1 = function () {
                console.log("inside f1 this.age = " + this.age);
            };
            this.f2 = function () {
                console.log("inside f2 this.age = " + _this.age);
            };
            this.favFood = favFood;
            this.age = age;
            Animal.numOfAnimals++;
        }
        Animal.numOfAnimals = 0;
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, favFood, age, kind) {
            var _this = _super.call(this, name, favFood, age) || this;
            _this.kind = kind;
            return _this;
        }
        return Dog;
    }(Animal));
    console.log(new Dog('Spot', 'bone', 4, 'poodle'));
})();
