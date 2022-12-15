//Program1

// function Person()  
// {  
//     this.personName= personName;  
//     throw new Error("You cannot create an instance of Abstract class");  
  
// }  
// Person.prototype.display=function()  
// {  
//     return this.personName;  
// }  
// var person=new Person(); 

// Program2

function Student()  
{  
    this.studentid=10;  
    throw new Error("You cannot create an instance of Abstract Class");  
}  
Student.prototype.display=function()  
{  
    return "Student is: "+this.studentid;  
}  
//Creating a constructor function  
function PersonNew(studentid)  
{  
    this.studentid=studentid;  
}  
//Creating object without using the function constructor  
PersonNew.prototype=Object.create(Student.prototype);  
var personnew=new PersonNew("Saiprakash");  
console.log(personnew.display());  
  