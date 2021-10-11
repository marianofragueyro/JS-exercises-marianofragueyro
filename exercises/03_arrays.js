//3.A.
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var monthsCopy = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var monthsSecondCopy = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var monthsThirdCopy = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months[4], months[10]);

//3.B.
var orderArray = monthsCopy.sort();
console.log(orderArray);

//3.C.
months.unshift('Start');
months.push('End');
console.log(months);

//3.D.
months.pop();
months.shift();
console.log(months);

//3.E.
var reverseMonths = months.reverse();
console.log(reverseMonths);

//3.F.
var joinMonth = monthsSecondCopy.join('-');
console.log(joinMonth);

//3.G.
var someMonths = monthsThirdCopy.slice(4,11);
console.log(someMonths);