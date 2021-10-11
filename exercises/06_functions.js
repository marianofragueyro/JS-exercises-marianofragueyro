//6.A.

var firstNum = 23;
var secondNum =59;
var result;

function sum(){
    result = firstNum + secondNum;
    console.log(result);
};
sum();

//6.B.


var noNum = '';
var resultNew;
function validateSum(){
    if((typeof noNum ==='number') && (typeof secondNum ==='number')){
        resultNew = noNum + secondNum;
        console.log(resultNew);
    }else{
        console.log('noNum es de tipo', (typeof noNum ), 'y secondNum es de tipo', (typeof secondNum));
    };
};
    validateSum();

//6.C.
var intNum = 21;

function validateInteger(){
    if(Number.isInteger(intNum)){
        console.log('verdadero');
    }else{
        (console.log('falso'));
    };
};

validateInteger();

//6.D.
noNum = 17;
newSecondNum = 32.64;
function validateSumInt(){
    if((typeof noNum ==='number') && (typeof newSecondNum ==='number'),
        (Number.isInteger(noNum)) && (Number.isInteger(newSecondNum))){
        resultNew = noNum + newSecondNum;
        console.log('los numeros son enteros');
        console.log(resultNew);
    }else{
        console.log('los numeros no son enteros');
        resultNew = Math.round(noNum + newSecondNum);
        console.log('los numeros no son enteros, redondeado seria =', resultNew);
    };
};
    validateSumInt();


//6.E.

function sum(){
    if((typeof firstNum ==='number') && (typeof secondNum ==='number'),
    (Number.isInteger(firstNum)) && (Number.isInteger(secondNum))){
    result = firstNum + secondNum;
    console.log('los numeros son enteros');
    console.log(result);
}else{
    console.log('los numeros no son enteros');
    result = Math.round(firstNum + secondNum);
    console.log('los numeros no son enteros, redondeado seria =', result);
    };
};
sum();

