let arr1:number[]=[1,2,3,4,5];
arr1.push(11);


let arr2:string[]=[];
arr2[0]="rahul";
arr2[1]="aastha";
arr2[2]="mohit";

arr2.forEach((i)=>console.log(i));


// Mixed Array

let arr3:(number|string|boolean)[]=[1,3,4,5,"sdf","erg"];

// readonly: to make array not to be updated
let arr4: readonly number[]=[1,2,3,4,5];

// arr4.push(6)  Not allowed due to readonly array

let assignmentArray:number[]=[1,2,3,4,5,6,7];
// output:5,10,15,20,25,30,35




