/* let numbers = [2, 3, 4, 5, 6, 'eight', true];
console.log(Array.isArray(numbers));
console.log(numbers[0]);
console.log(numbers.length);
numbers[0] = 1;
console.log(numbers[0]);
let newNumbers = [...numbers];
newNumbers = newNumbers.push(7);
console.log(numbers); */

//objects
/*let operation = {
    add:(a, b) => a + b,
    sub:(a, b) => a - b
}
console.log(operation.sub(1, 4));*/
/*let fruites = {name: 'Apple', 
                color: ['Red', 'Yellow', 'Green'],
                calories: 56
}
let key = 'color';
console.log(fruites.key);
fruites.type = 'type of apple';
fruites.calories = 134;
console.log(fruites);
console.log(fruites.color[2]);*/
/*let student = {
    name: 'Amy',
    greet: function(){return `Welcome ${this.name}`}
}
console.log(student.greet());*/
/*let fruites = [{name: 'Apple', color: 'Red', calories: 95},
               {name: 'Orange', color: 'Orange', calories: 65}, 
               {name: 'Banana', color: 'Yellow', calories: 195}];
let key = 'color';
console.log(fruites[1][key]);

for (let fruit of fruites){
    for (let key in fruit){
        console.log(fruit[key]);
    }
}*/

let numbers = [1, 2, 3, 4];
numbers.forEach(item => console.log(item * 2));

let doubleNumber = numbers.map(item => item * 2);
console.log(doubleNumber);

let findNumber = numbers.find(item => item > 3);
console.log(findNumber);

let filterNumber = numbers.filter(item => item > 2);
console.log(filterNumber);