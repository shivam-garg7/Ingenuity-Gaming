var StudentNS;
(function (StudentNS) {
    var Student = /** @class */ (function () {
        function Student(fullname, passport) {
            this.fullname = fullname;
            this.passport = passport;
        }
        Student.prototype.dispDetails = function () {
            console.log("Name: ".concat(this.fullname, " | Passport:").concat(this.passport));
        };
        return Student;
    }());
    StudentNS.Student = Student;
})(StudentNS || (StudentNS = {}));
var stu1 = new StudentNS.Student("Rahul Kumar", 232323);
stu1.dispDetails();
var TeacherNS;
(function (TeacherNS) {
    var Teacher = /** @class */ (function () {
        function Teacher(fullname, subject) {
            this.fullname = fullname;
            this.subject = subject;
            this.fullname = fn;
            this.subjects = sub;
        }
        return Teacher;
    }());
})(TeacherNS || (TeacherNS = {}));
var t1 = new TeacherNS.Teacher("Pankaj", ["Flutter", "React", "Nodejs"]);
console.log("teacher name:".concat(t1.fullname, " | subject teach:").concat(t1.subjects));
