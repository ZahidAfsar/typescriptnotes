// Hovering over a variable will let you know its current type
// and how you can assign type to it if you havent already
let num1: number = 8;

// You can still declare variables with a type without inititializing them
let str: string;

// We want to avoid the type 'any' because it defeats the whole purpose of typescript
let any;

function mappingGrades(data: { name: string, grades: number[] }) {
    console.log(data.name)
    return data.grades.map(ele => {
        return ele
    })
}

// Typing a function
function funk(): string {
    return "true";
}

// Typing an arrow function
const arrowFunction: () => string = () => { return "jacob" }

let object = {
    name: "jacob",
    grades: [1,2,3]
}

// We can use interfaces to create our own types
interface IStudent {
    name: string,
    grades: number[],
    email: string
}

let student1: IStudent = {
    name: "Jesse",
    grades: [100, 100, 100],
    email: "Jesse's email",
    pet: "snail"
}

type Jesse = {
    name: string,
    hobby: string
}

// We can call our interface later to add to it
interface IStudent {
    pet: string
}

// Once a type is declared you cant change it
// type Jesse = {

// }

function createStudent(data: IStudent) {
    let newStudent: IStudent = {
        name: data.name,
        grades: data.grades,
        email: data.email,
        pet: data.pet
    }
}

