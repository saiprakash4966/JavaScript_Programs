function Student(firstName,lastName)
{
    this.firstName=firstName;
    this.lastName=lastName

}

Student.prototype.fullName = function()
{
    return this.firstName+ " "+this.lastName;

}

var s1 = new Student("Saiprakash","Beemari");
var s2 = new Student("Raghu","Gattu");
console.log(s1.fullName());
console.log(s2.fullName());


//Type2

function Student(firstName,lastName)
{
    this.firstName=firstName;
    this.lastName=lastName

}

Student.prototype.course = "JavaScript";

var s1 = new Student("Saiprakash","Beemari");
var s2 = new Student("Raghu","Gattu");
console.log(s1.firstName+" "+s1.lastName+" "+s1.course);
console.log(s2.firstName+" "+s2.lastName+" "+s2.course);