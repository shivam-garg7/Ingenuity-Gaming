// ES6
class Training{
    constructor(trainingName,trainingDuration,trainingStatus)
    {
        this.trainingName=trainingName;
        this.trainingDuration=trainingDuration;
        this.trainingStatus=trainingStatus;
    }
    displayDetails(){
        return `Training Name: ${this.trainingName}\nTraining Duration: ${this.trainingDuration}\nTraining Status: ${this.trainingStatus}`;

    }
}

// object creation
let ig=new Training("Development Basics",120,"offline");
let Dell=new Training("reactkjs",40,"offline");

// Method Calling
console.log(ig.displayDetails());
console.log(Dell.displayDetails());

class InCampus extends Training
{
    constructor(a,b,c,d)
    {
        super(a,b,c);
        this.rollno=d;

    }
    displayDetails(){
        console.log("Child class function");
        super.displayDetails();
    }
}
let stu1=new InCampus('Flutter',40,"Online",1011);
stu1.displayDetails();