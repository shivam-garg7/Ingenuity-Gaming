var obj={
    firstName: "SACHIN",
    lastName: "Yadav",
    // using function to create method of object
    fullName:function(){
        return this.firstName+" "+this.lastName;
    },
};
console.log(obj.fullName);

var person1={
    firstName:"Sara",
    lastName:"Khan",

};
// use of call function
console.log(obj.fullName.call(person1));


var person={
    fullName:function(city,country)
    {
        return (this.firstName+" " +this.lastName+" "+city+" "+country);
    },
};

var person1={
    firstName:"Sara",
    lastName:"Khan",

};

person.fullName.call(person1,"Mumbai","INDIA");

// Apply method to reuse a method available in other object

var person2={
    firstName:"Mohit",
    lastName:"Kumar",

};
// we can pass an array in place of strring as array contain a no of arg.
person.fullName.apply(person2,["Dehli","INDIA"]);