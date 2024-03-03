// EXAMPLE 1 - Get the Day of the Week in JavaScript

const dayOfWeekDigit = new Date().getDay();
console.log(dayOfWeekDigit); // 👉️ 0

const dayOfWeekName = new Date().toLocaleString('default', {
  weekday: 'long',
});
console.log(dayOfWeekName); // 👉️ Sunday

// ------------------------------------------------------------------

// // EXAMPLE 2 - Specifying the locale

// const date = new Date(2027, 3, 24);

// // 👇️ Saturday
// console.log(
//   date.toLocaleDateString('en-US', {
//     weekday: 'long',
//   }),
// );

// // 👇️ Samstag
// console.log(
//   date.toLocaleDateString('de-DE', {
//     weekday: 'long',
//   }),
// );

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a different format

// const date = new Date(2027, 3, 24);

// // 👇️ Saturday
// console.log(
//   date.toLocaleDateString('en-US', {
//     weekday: 'long',
//   }),
// );

// // 👇️ Sat
// console.log(
//   date.toLocaleDateString('en-US', {
//     weekday: 'short',
//   }),
// );

// // 👇️ S
// console.log(
//   date.toLocaleDateString('en-US', {
//     weekday: 'narrow',
//   }),
// );

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// function getDayOfWeek(date = new Date()) {
//   return date.getDay();
// }

// const dayOfWeek = getDayOfWeek();
// console.log(dayOfWeek); // 👉️ 3

// // --------------------------------------------

// function getDayOfWeekName(date = new Date()) {
//   return date.toLocaleDateString('default', {
//     weekday: 'long',
//   });
// }

// const dayOfWeekName = getDayOfWeekName();
// console.log(dayOfWeekName); // 👉️ Wednesday
