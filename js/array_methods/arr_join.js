// arr.join(glue) - Объединяет массив по символу переданному в метод

const array = ['apple', 'banana', 'grapefruit', 'orange', 'potato', 'cucumber', 'melon', 'cherry'];
const stringOfFruits = array.join('; ');
const stringOfFruits2 = array.join();
const stringOfFruits3 = array.join('');

console.log(array)

console.log(stringOfFruits);
console.log(stringOfFruits2);
console.log(stringOfFruits3);