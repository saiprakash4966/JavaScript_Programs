class PersonA
{
    show()
    {
        console.log("Hi Sai");
    }

}

class PersonB extends PersonA
{

}
var p = new PersonB();
p.show();


//Program2

class Animal 
  {  
     place()  
    {  
      console.log("LIves in forest");  
    }  
  }  
class Bird extends Animal 
  {  
    place()  
    {  
      console.log("Bird flys");  
    }  
  }  
  
var v=[new Animal(), new Bird()]  
v.forEach(function(message)  
{  
message.place();  
});  