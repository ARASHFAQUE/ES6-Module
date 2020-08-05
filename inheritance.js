class Parent{
    constructor(){
        this.fatherName = 'Schwerznegger';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFulName(){
        return this.name + ' ' + this.fatherName;
    }
}
const baby = new Child('Rahi');
const baby2 = new Child('Mahi');

console.log(baby);
console.log(baby2);
console.log(baby2.name);
console.log(baby.getFulName());
console.log(baby2.getFulName());