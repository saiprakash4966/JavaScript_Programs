class Demo
{
    static show()
    {
        return "Welcome all";
    }
}
console.log(Demo.show());


//Program2 :- Two static methods

class Demo2
{
    static show()
    {
        return "Welcome all";
    }

    static show()
    {
        return "Hi All";
    }
}
console.log(Demo2.show());

//Program3 :- Using Constructor

class Demo3
{
    constructor()
    {
        console.log(Demo3.display());
    }

    static display()
    {
        return "Hello Saiprakash";
    }
}
var d = new Demo3();

//Program4 :- invoking static method in non static method

class Demo4
{
    static output()
    {
        return "Hello Good morning";
    }

    result()
    {
        console.log(Demo4.output());
    }
}
 var d1 = new Demo4();
 d1.result();
