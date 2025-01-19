type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
}

// array of people objects with type Person
let people: Person[] = [person1, person2];

// type string, value can be changed, can specify let to be literal
let myName = "Bob";
const myName2: "Bob" = "Bob"; // literal type

// unions - combination of literal types
// boolean is a type of enums, can be T or F
// custom enums - can only be of certain literals
// using | is like "or"
type User = {
    username: string,
    role: "guest" | "member" | "admin",
}

type UserRole = "guest" | "member" | "admin";

let userRole: UserRole = "member";
