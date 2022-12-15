class Children
{
    constructor()
    {
        var name;
        var age;
    }

    getName()
    {
        return this.name;
    }
    setName(name)
    {
        this.name=name;
    }
    getAge()
    {
        return this.age;

    }
    setAge(age)
    {
        this.age=age;
    //     if(age<0||age>100)  
    //     {  
    //       alert("Invalid age");  
    //     }  
    //   else  
    //     {  
    //       this.age=age;  
    //     }  
    }
    
}

var v = new Children();
v.setName("Saiprakash");
v.setAge(50);
console.log(v.getName()+"\n"+v.getAge());
