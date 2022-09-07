export default function(){
    console.log('this is important message');
}
export let message="this is module concept";
export let display=(name)=>{
    return `${name},welcome to Ingenuity Gamming`;

};
export class Employee{
    constructor(name,id,designation){
        this.name=name;
        this.id=id;
        this.designation=designation;

    }
    dispDetails(){
        console.log(`E ${this.name}\n`);
    }
}
// export{message,display,Employee}