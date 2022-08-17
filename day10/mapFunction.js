var myArr=[1,3,4,5,6,7];
var newArr=myArr.map((i)=>i*10);
console.log(newArr);

var users={
    {firstName: "Susan",lastName : "Steward"},
    {firstName:"Susan",lastName : "Steward"},
    {firstName:"Susan",lastName :"Steward"},

};
var fullName=users.map((u)=>{
    return u.firstName+" "+uj.lastName;

});
console.log(fullName)