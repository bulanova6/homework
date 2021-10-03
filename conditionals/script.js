//1. пользователь вводит 2 числа, вывести в консоль большее из них

// let num1 = +prompt('enter num1');
// let num2 = +prompt('enter num2');

// if (num1 > num2) {
//     console.log(num1);
// } else if (num2 > num1) {
//     console.log(num2);
// } else {
//     console.log('they are equal');
// }




//2. пользователь вводит 3 числа, первые два это числа которые он хочет перемножить
// третье число, это результат умножения по мнению пользователя
// выяснить правильно ли ответил пользователь и вывести в консоль ОК если правильно
// NOT OK {rightAnswer} если неправильно




// let num1 = +prompt('enter num1');
// let num2 = +prompt('enter num2');
// let userResult = +prompt('enter result');

// const rightAnswer = num1 * num2;

// if (userResult === rightAnswer) {
//     console.log('OK');
// } else {
//     console.log(`NOT OK ${rightAnswer}`);
// }








//3 / 1. пользователь вводит номер дня недели
// вывести название этого дня в консоль
// если пользователь ввел некорректные данные то вывести 'incorrect data'
// switch(){}

// let dayNumber = +prompt('enter day number');

// switch (dayNumber) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     default:
//         console.log('ERROR');
// }





// 2. Переписать в тернарный оператор
let age = 20;

if (age < 10) {
    console.log('HI!');
} else if (age < 20) {
    console.log('Hello!');
} else {
    console.log('');
}


console.log( 
    age < 10 
    ? 'hi'
    : age < 20 
        ? 'hello'
        
            : 'Good day!'
);

