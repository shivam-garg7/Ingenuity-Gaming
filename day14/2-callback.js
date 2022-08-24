// in javascript function are first class citizens
// 1. function can be assigned to a variable
// 2. function can be used as argument
// 3. function can also be used as return statement
  


// callback:
// 1.function can be a argument
// 2.a callback is a function


var students=[
    {name:'sachin',subject:'java'},
    {name:'malhotra',subject:'pythn'},
    {name:'shivarag',subject:'react'},
];
function admitStudent(student,callback){
    setTimeout(() => {
       students.push(student);
        callback();
    }, 3000);
}
function displayStudent(student){
    setTimeout(() => {
        var str='';
        students.forEach((student)=>{
            str+=student.name+' ';
           
        })
        console.log(str);
    }, 1000);
}
var newStudent={name:'rahul',subject:'react'};
admitStudent(newStudent,displayStudent);
// displayStudent();