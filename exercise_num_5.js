/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */


//Write a command that prints out all of the people in the list.

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

people.forEach(element => {
        console.log(element);
});

//Write the command to remove "Dani" from the array.
people.splice(people.indexOf("Dani"), 1);

//Write the command to remove "Juan" from the array.
people.splice(people.indexOf("Juan"), 1);

//Write the command to move "Luis" to the front of the array.
let indexLuis = people.indexOf("Luis");
let luis = people.splice(indexLuis, 1)[0];  // saca a Luis
people.unshift(luis);

//Write the command to add your name to the end of the array.
people.push("Nancy Mayek");

//Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for (let person of people) {
  console.log(person);
  if (person === "Maria")
    break;
}

//Write the command that gives the indexOf where "Maria" is located.

console.log("Índice de Maria:", people.indexOf("Maria"));

//At the end of the exercise, there should be 4 people in the array.
console.log("Array final:", people);
console.log("Cantidad de personas:", people.length);