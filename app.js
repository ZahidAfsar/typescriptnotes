"use strict";
// Hovering over a variable will let you know its current type
// and how you can assign type to it if you havent already
let num1 = 8;
// You can still declare variables with a type without inititializing them
let str;
// We want to avoid the type 'any' because it defeats the whole purpose of typescript
let any;
function mappingGrades(data) {
    console.log(data.name);
    return data.grades.map(ele => {
        return ele;
    });
}
// Typing a function
function funk() {
    return "true";
}
// Typing an arrow function
const arrowFunction = () => { return "jacob"; };
let object = {
    name: "jacob",
    grades: [1, 2, 3]
};
let student1 = {
    name: "Jesse",
    grades: [100, 100, 100],
    email: "Jesse's email",
    pet: "snail"
};
// Once a type is declared you cant change it
// type Jesse = {
// }
function createStudent(data) {
    let newStudent = {
        name: data.name,
        grades: data.grades,
        email: data.email,
        pet: data.pet
    };
}
