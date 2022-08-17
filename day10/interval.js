var people = [
    { name: "Ashish", age: 23 },
    { name: "Ajay", age: 21 },
    { name: "Arvind", age: 26 },
    { name: "Mahesh", age: 28 },
    { name: "Jay", age: 19 },
  ];
  var my=[];
   my=people.filter((a)=>a.age<25);
console.log(my);