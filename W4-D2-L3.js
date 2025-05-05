const students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"];

const namesStartingWithA = students.filter(
  (s) => s.startsWith("A") || s.startsWith("a")
);

console.log("Names that start with A or a:", namesStartingWithA);

// --------------

const countLongNames = students.filter((s) => s.length > 4).length;
console.log("Number of names longer than 4 letters:", countLongNames);

// ---------------

const studentsUpper = students.map((s) => s.toUpperCase());
console.log("Names in uppercase:", studentsUpper);

// -------------

const firstWithR = students.find((s) => s.toLowerCase().includes("r"));
console.log('First name containing "r":', firstWithR);

// ----------

const sortedStudents = students.sort();
console.log("Names sorted alphabetically:", sortedStudents);

// -------------

const nameToCheck = "Omar";
const exists = students.includes(nameToCheck);
console.log(`Is the name '${nameToCheck}' in the list?`, exists);

// -----------
const totalChars = students.reduce((sum, name) => sum + name.length, 0);
console.log("Total number of characters across all names:", totalChars);

// ------------

const evenLengthNames = students.filter((name) => name.length % 2 === 0);
console.log("Names with an even number of letters:", evenLengthNames);

// ------------
const reversedNames = students.map((name) => name.split("").reverse().join(""));
console.log("Reversed names:", reversedNames);
// -------------

const noONames = students.filter((name) => !name.toLowerCase().includes("o"));
console.log("Names without the letter 'o':", noONames);
// ------------
const studentsWithGrades = [
  ["Ali", [85, 90, 78]],
  ["Sara", [92, 88, 95]],
  ["Ahmed", [70, 75, 80]],
  ["Lana", [88, 90, 92]],
  ["Omar", [60, 65, 70]],
  ["Noor", [83, 85, 89]],
];

const averages = studentsWithGrades.map(([name, grades]) => {
  const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
  return [name, avg.toFixed(2)];
});
console.log("Student averages:", averages);

const above80 = averages.filter(([, avg]) => avg > 80).map(([name]) => name);
console.log("Students with average > 80:", above80);
