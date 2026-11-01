const name = "Thai";

const birthYear = 2003;

let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

const age = currentYear - birthYear;

console.log(`
Name: ${name}
Age: ${age}
Student: ${isStudent}
`);