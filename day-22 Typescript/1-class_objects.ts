class Person{
    // class properties
    empCode:number
    empName:string
    constructor(code:number, name:string){
        console.log("constructor called");
        this.empCode=code;
        this.empName=name;
    }
    // class method
    dispDetails():void{
        console.log(`code: ${this.empCode} Name:${this.empName}`);
    }
}
let emp1=new Person(101,"rahul")
emp1.dispDetails()

// AccessMOdifier
