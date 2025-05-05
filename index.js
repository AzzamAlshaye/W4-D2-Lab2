const characters = [
  ["Luke Skywalker", 177, "male", 77, "brown"],
  ["Leia Organa", 160, "female", 56, "blue"],
  ["Han Solo", 180, "male", 80, "brown"],
  ["Chewie", 222, "male", 190, "black"],
  ["kevien", 106, "male", 32.2, "red"],
];

// MAP
const names = characters.map((c) => c[0]); // c[0] = name
const heights = characters.map((c) => c[1]); // c[1] = height

// REDUCE
const totalHeight = characters.reduce((sum, c) => sum + c[1], 0); // sum of c[1]

// FILTER
const under200 = characters.filter((c) => c[1] < 200); // height < 200

const males = characters.filter((c) => c[2] === "male"); // gender === "male"

// SORT (make a copy with slice() so original will not get effected)
const byMass = characters.slice().sort((a, b) => a[3] - b[3]); // sort by c[3] (mass)

const byHeight = characters.slice().sort((a, b) => a[1] - b[1]); // sort by c[1] (height)

// EVERY
const allMassOver40 = characters.every((c) => c[3] > 40); // mass > 40?
const allUnder200 = characters.every((c) => c[1] < 200); // height < 200?

// SOME
const hasBlueEyes = characters.some((c) => c[4] === "blue"); // eye color === "blue"?
const hasTallerThan210 = characters.some((c) => c[1] > 210); // height > 210?

//logs
console.log("Names:", names);
console.log("Heights:", heights);
console.log("Total Height:", totalHeight);
console.log(
  "Under 200 cm:",
  under200.map((c) => c[0])
);
console.log(
  "Male characters: ",
  males.map((c) => c[0])
);
console.log(
  "Sorted by Mass:  ",
  byMass.map((c) => `${c[0]} (${c[3]})`)
);
console.log(
  "Sorted by Height:",
  byHeight.map((c) => `${c[0]} (${c[1]})`)
);
console.log("All mass > 40?   ", allMassOver40);
console.log("All < 200 cm?    ", allUnder200);
console.log("Any blue eyes?   ", hasBlueEyes);
console.log("Any > 210 cm?    ", hasTallerThan210);
