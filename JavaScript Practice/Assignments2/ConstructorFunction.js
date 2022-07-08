const { constant } = require("async");

// Factory Function
function person(name, age){
    const newPerson = {};
    newPerson.name = name;
    newPerson.age = age;
    return newPerson;
}

// Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age;
    // default return this
}


const factoryPerson = person("Mitansh", 20);
const constructorPerson = new Person("Mitansh", 20);

console.log(factoryPerson);
console.log(constructorPerson);