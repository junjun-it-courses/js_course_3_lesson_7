'use strict';
/*
Window

В JavaScript всегда определён глобальный объект. В веб-браузере, когда скрипты
создают глобальные переменные, они создаются как свойства глобального объекта.

Любым Глобальным Переменным или функциям может быть получен как к свойствам
объекта window.
*/

var someInfo = 'Some Info';
console.log(window.someInfo);
console.log(someInfo);


function exampleFunction(a = 10, b = 20) {
    return a + b;
}

console.log(window.exampleFunction());
console.log(exampleFunction());



let anotherInfo = 'Another info';
console.log(window.anotherInfo);
console.log(anotherInfo);


const constantInfo = 'Constant info';
console.log(window.constantInfo);
console.log(constantInfo);