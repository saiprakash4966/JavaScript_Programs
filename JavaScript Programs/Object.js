//Program1
emp = {id:1,name:'Saiprakash',salary:50000}

{
    console.log(emp.id+ " "+emp.name+ " "+emp.salary)
}



//Program2

var employ =new Object();
employ.id = 10;
employ.name='Sai';
employ.salary=10000;
console.log(employ.id+ " "+employ.name+ " "+employ.salary)

//Program3

function employee(id,name,salary)
{
    this.id=id;
    this.name=name;
    this.salary=salary;
}


emp=new employee(20,"Raghu",20000)
{
    console.log(emp.id+" "+emp.name+" "+emp.salary)
}



