//switch
//ternary



//<---switch--->//

let age = 29;

switch (age) {
    case 10: // age === 10
        console.log('ten');
        break;
    case 20: 
        console.log('twenty');
        break;
    case 29:
        console.log('twenty nine');
        break;
    case 30:
        console.log('thirty');
        break;
    case 40:
        console.log('fourty');
        break;
}




//<---ternary--->//

let age = 20;


console.log( age > 18 ? 'ok' : 'not ok' );





// ternary

let age = 20;

if (age < 10) {
    console.log('adasd');
} else {
    console.log('zxczxczxc');
}

console.log( 
    age < 10 
    ? 'ok' 
    : age < 20 
        ? 'ok 2'
        : age < 30 
            ? 'ok 3' 
            : 'not ok'
);
