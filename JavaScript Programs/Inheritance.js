class School
{
    constructor()
    {
        this.members=200;
    }
}

class Students extends School
{
    constructor(boys,girls)
    {
        super();
        this.boys=boys;
        this.girls=girls;
    }


}
var s= new Students(100,100);
console.log("Boys are :" +s.boys+ "\n","Girls are:" +s.girls+"\n","Total members are :"+s.members);