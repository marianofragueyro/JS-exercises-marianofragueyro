//5.A.
var students = ['mariano','fede','martu','rodri','micaela'];
for(i = 0; i < students.length ;i++){
    console.log(students[i]);
}

//5.B

for(i = 0; i < students.length ;i++){
    students[i] = students[i].charAt(0).toUpperCase() + students[i].slice(1)
//    alert(students[i])
}

//5.C

var sentence = ''
for(i = 0; i<students.length;i++){
    sentence = students[i]
    console.log(sentence)
}

//5.D.

var emptyArray = []
for(i=0; i < 10 ;i++){
    emptyArray = i
    console.log(emptyArray)
}
