//EX.1
let num = +prompt("Your number please");
let sum = 0;
while(num !== 0){
    const lastDigit = num % 10;
    sum += lastDigit;
    num = Math.trunc(num / 10);
}
console.log(sum);

//EX. 2
let a = +prompt('please give a positive value to a');
let b = +prompt('please give a positive value to b');
let c = +prompt('please give a positive value to c');
if(a > 0 && b > 0 && c > 0){
    if( a + b > c && a + c > b && b + c > a){
        console.log('yes')
    }else{
        console.log('no')
    }
}else{
    alert('No. At least one of of given number is negative or zero. ')
}

//EX. 3
let num = +prompt('please enter a number');
let count = 0;
while(num !== 0){
    const lastDigit = num % 10;
    if(lastDigit % 9 === 0){
        count++;
    }
    num = Math.trunc(num / 10);
}
console.log(count);

//EX.4
let num = +prompt('please enter a number');
let count = 0;
let result = 0;
let a = num;
while(num !== 0){
    count++;
    num = Math.trunc(num / 10);
}
for(let i = count - 1; i >= 0; i--){
    const lastDigit = a % 10;
    result += lastDigit * (10 ** i);
    a = Math.trunc(a / 10);
}
console.log(result);

//EX. 5
let n = +prompt('please enter a number which is power of 2');
while(n > 1){
    if(n % 2){
        console.log(false);
        break;
    }else{
        n /= 2;
    }
    if(n === 1){
        console.log(true)
    }
}
