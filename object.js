// name is key--------- "javascript" is values
// name: "Javascript"----------- entries

// const a = "popularity";

// const language = {
//   name: "Javascript",
//   year: 1995,
//   creator: "Brendan Eich",
// };

// language[a] = "100%"; // dynamic property incuded this object

// language.popularity = "100%";
// console.log(language);

// console.log(Object.keys(language));
// console.log(Object.values(language));
// console.log(Object.entries(language));

// """"""""""""""""""""""""""spread operator""""""""""""""""""""""""""

// const fruits = ["Banana", "Orange"];

// const result = [...fruits];
// console.log(result);

// const language = {
//   name: "Javascript",
//   year: 1995,
//   creator: "Brendan Eich",
// };

// const result = { ...language };
// console.log(result);

// """"""""""""""""""""""""""rest operator""""""""""""""""""""""""""

// function sum(...rest) {
//   return rest.reduce((sum, current) => sum + current, 0);
// }

// console.log(sum(5, 6, 89));

// function sum(text, ...rest) {
//   const result = rest.reduce((sum, current) => sum + current, 0);
//   console.log(`${text}, ${result}`);
// }

// sum("The sum is:", 5, 6, 89);

// """""""""""""""""""""""""""truthy falsey"""""""""""""""""""""""""""

// falsey valu in javascript

// false, 0, undefined, "", NaN

// """"""""""""""""""""""""""ternery operator""""""""""""""""""""""""""

// const a = 6;
// // let results;

// // console.log(object)

// const results = a % 2 === 0 ? "Even" : "Odd";

// if (a % 2 === 0) {
//   // even
//   results = "Even";
// } else {
//   // odd
//   results = "Odd";
// }

// console.log(results);

// """"""""""""""""""""""""""""destructuring""""""""""""""""""""""""""""

// const user = {
//   id: 339,
//   name: "Afzal",
//   age: 42,
//   education: {
//     degree: "Graduate",
//     school: {
//       name: "Cumilla Zilla School",
//     },
//   },
// };

// const {
//   education: { school: name },
// } = user;

// console.log(name);
// const {
//   education: { degree },
// } = user;

// console.log(user);
// const { name, age } = user;
// console.log(name, age);

// """"""""""""""""""""""""""optional chaining""""""""""""""""""""""""""

// const user = {
//   id: 339,
//   name: "Afzal",
//   age: 42,
//   education: {
//     degree: "Graduate",
//     school: {
//       name: "Cumilla Zilla School",
//     },
//   },
// };

// console.log(user?.education?.school?.name);

// """"""""""""""""""""nullish coalescing operator""""""""""""""""""""

// Nullish = null / undefined

// let lang = null;

// console.log(lang ?? "JavaScript");
// console.log(lang || "JavaScript");
// console.log(lang && "JavaScript");
