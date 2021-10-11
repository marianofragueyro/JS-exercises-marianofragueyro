//4.A.
var randomNumber = Math.random();
console.log(randomNumber);
if(randomNumber >= 0.5){
    console.log('the number is greater than 0,5');
}else(
    console.log('the number is lower than 0,5')
);

//4.B.
var age =Math.floor(Math.random() * 100) + 1;
console.log(age);
if(age < 2){
    console.log('you are a baby');
    }else if(age > 2 && age < 12){
    console.log('you are a boy');
    }else if(age >12 && age <19){
        console.log('you are an adolescent');
    }else if(age > 19 && age < 30){
        console.log('you are a young adult');
    }else if(age >30 && age <60){
        console.log('you are an adult');
    }else if(age > 60 && age < 75){
        console.log('you are an elderly');
    }else if(age > 75){
        console.log('you are an old man');
    };