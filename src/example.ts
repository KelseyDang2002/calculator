// type Person = {
//     name: string
//     age: number
//     isStudent: boolean
// }

// let person1: Person = {
//     name: "Joe",
//     age: 42,
//     isStudent: true,
// }

// let person2: Person = {
//     name: "Jill",
//     age: 66,
//     isStudent: false,
// }

// // array of people objects with type Person
// let people: Person[] = [person1, person2];

// ===================================================================

// // type string, value can be changed, can specify let to be literal
// let myName = "Bob";
// const myName2: "Bob" = "Bob"; // literal type

// ===================================================================

// unions - combination of literal types
// boolean is a type of enums, can be T or F
// custom enums - can only be of certain literals
// using | is union
// type UserRole = "guest" | "member" | "admin";

// type User = {
//     username: string,
//     role: UserRole,
// }

// const users: User[] = [
//     { username: "john_doe", role: "member"},
//     { username: "jane_doe", role: "admin"},
//     { username: "guest_usewr", role: "guest"},
// ];

// // return type is User ---> (username: string): User
// const fetchUserDetails = (username: string): User => {
//     const user = users.find(user => user.username === username);

//     if (!user) {
//         throw new Error(`User with username ${username} not found.`);
//     }

//     return user;
// }

// ===================================================================

// // type any
// let value: any = 1;
// value.toUpperCase(); // bug here
// value = "name";
// value.map();
// console.log(value);

// ===================================================================

// // utility types and partial
// type User = {
//     id: number,
//     username: string,
//     role: "member" | "contributor" | "admin"
// }

// // Partial
// // <T> - generics
// type UpdatedUser = Partial<User>;

// let nextUserId = 1;

// const users: User[] = [
//     { id: nextUserId++, username: "john_doe", role: "member"},
//     { id: nextUserId++, username: "jane_smith", role: "contributor"},
//     { id: nextUserId++, username: "alice_jones", role: "admin"},
//     { id: nextUserId++, username: "charlie_brown", role: "member"}
// ];

// const updateUser = (id: any, updates: UpdatedUser) => {
//     // find the user in the array by id
//     const foundUser = users.find(user => user.id === id)

//     if (!foundUser) {
//         console.error(`User with id ${id} not found.`);
//         return;
//     }

//     // use Object.assign() to update the found user in place
//     Object.assign(foundUser, updates);
// }

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

// // Omit
// // omit the requirement of the id property from User
// const addNewUser = (newUser: Omit<User, "id">): User => {
//     const user: User = {
//         id: nextUserId++,
//         ...newUser
//     }
//     users.push(user);
//     return user;
// }

// addNewUser({ username: "joe_schmoe", role: "admin" });

// console.log(users);

// ===================================================================

// Generics
// act like function parameters but for types
// uses this syntax <>
// generics can act as a placeholder for whatever the type is going to be

const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }];

// takes an array as a parameter and returns last item in the array
// array has implicit any type
// array is an array type but we don't necesssarily know what types the array will hold
// the name 'Type' is not built into TS, but a name chosen by us
const getLastItem = <Type>(array: Type[]): Type | undefined => {
    return array[array.length - 1];
}

// by hovering over the function's passed parameters, we can see the specific types of each array
console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
