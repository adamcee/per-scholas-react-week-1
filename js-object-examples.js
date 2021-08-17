// Example of all valid JSON types
// See https://json-schema.org/understanding-json-schema/reference/type.html
const myInfo = {
  name: "Adam",
  birthday: 08191983,
  citiesLivedIn: ["Chicago", "Los Angeles"],
  isHuman: true,
  planetsVisited: null,
  personalInfo: {
    favoriteFood: "hamburger",
  }
};

console.log('my info printed as object');
console.log(myInfo);

console.log('my info printed as a string in the JSON format');
console.log(
  JSON.stringify(myInfo)
);