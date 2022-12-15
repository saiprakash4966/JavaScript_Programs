class Vehicle
{
    constructor()
    {
        this.color="Red";
        this.name="Fortuner";
    }


}

var v=new Vehicle();
console.log(v.color+" "+v.name);


//Using Super Keyword

class Car 
{
    constructor()
    {
        this.id = 10;
    }

}
class Sports extends Car
{
    constructor(color,name)
    {
        super();
        this.color=color;
        this.name=name;
    }
}
    var v1 = new Sports("Blue","Swift");
    console.log(v1.color+" "+v1.name+" "+v1.id);

