var Student = class  //Declaration of class
{
 
    constructor(rollno,name)  //Intialization of class
    {
        this.rollno=rollno;
        this.name=name;
    }

    Data()                     //Declaration of method
    {
        console.log(this.rollno+"\n"+this.name);

    }

}
   
    var s1=new Student(10,"Saiprakash");  //Passing object to variable
    var s2=new Student(20,"Raghu");
    s1.Data();                           //Calling method
    s2.Data();


    //Program2:- Named class Expression

    var emp = class Employee
     {  
        constructor(id, name)
         {  
          this.id = id;  
          this.name = name;  
        }  
      };  
      console.log(emp.name);  