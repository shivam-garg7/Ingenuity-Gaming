var ages=[32,33,16,40];

var result = ages.filter(filterAge);
function filterAge(age){
    return age>18;
}

console.log(result);



var result=ages.filter((age)=>{
    return age>18;
})


let cities=[
    
    {name:"Los  A",pop:32},
    {name:"Los  A",pop:32},
    {name:"Los  A",pop:32},
    {name:"Los  A",pop:32},
];
var bigcities=[];
for(var i=0;i<cities.length;i++){
    if(cities[i].pop>30){
        bigcities.push(cities[i]);
    }
}
console.log(bigcities);


bigcities=cities.filter((city)=> city.pop>32).sort((n1,n2)=> n2.name-n1.name).reverse();
console.log(bigcities);
