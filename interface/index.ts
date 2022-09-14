namespace StudentNS
{
   export interface StudentInt
    {
        fullname:string
        passport:number
        dispDetails():void
    }
    
    export class Student
    {
        constructor(public fullname:string, public passport:number){}
        dispDetails():void{
            console.log(`Name: ${this.fullname} | Passport:${this.passport}`);
    
        }
    }
}

let stu1:StudentNS.StudentInt = new StudentNS.Student("Rahul Kumar",232323);
stu1.dispDetails();
namespace TeacherNS
{
    interface TeacherInt
    {
        fullname:string
        subjects:string
    } 
    
    class Teacher implements TeacherInt
    {
        fullname:string;
        subjects:string[]
        constructor(public fullname:string,public subject:string[])
        {
            this.fullname=fn;
            this.subjects=sub;
        }
    }
    
}

let t1 = new TeacherNS.Teacher("Pankaj",["Flutter","React","Nodejs"])
console.log(`teacher name:${t1.fullname} | subject teach:${t1.subjects}`)