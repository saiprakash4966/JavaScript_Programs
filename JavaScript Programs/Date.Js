//Today date 

var date=new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();

console.log("Today Date is " +day+"/"+month+"/"+year);

//Current Time

var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

console.log("Current Time is " +hours+":"+minutes+":"+seconds);
