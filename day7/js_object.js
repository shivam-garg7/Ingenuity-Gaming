// javascript Object
// way-1 to create objects
var person={
    name:"pankaj",
    age:30,
    city:{cityName:"Chandigarh",pincode:123456};
    sector:[1,2,3,4,5],
    deatails:function(){return this.name+" "+this.age+this.city.cityName},

};
console.log(person);
console.log(person.city.cityName);
console.log(person.sector[1]);
console.log(person.deatails);
var student = new Object();
student.name="Manish";
student.age=22;
student["city"]="Mathura";
console.log(student);
person.email="papa_bano@gmail.com";
console.log(person);