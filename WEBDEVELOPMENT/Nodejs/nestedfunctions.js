(function sum(n1,n2,n3){
    total = n1+n2+n3; 
    return total;
})(10,10,10);
// var total= sum(10,20,30);
console.log(total);


var total=(function(n1,n2,n3){return n1+n2+n3;})(10,20,30);
console.log(total+"\n");



function avgOfNum(x,y)
{
    var sum= function()
    {    
       return x+y;        
    }
     return sum()/2;
}
var result=avgOfNum(30,20);
console.log(result+"\n");


function avgOfNum(x,y)
{
    return function()
    {
        return (x+y)/2;        
    }
}
var result=avgOfNum(30,20);
console.log(result()+"\n");





var result=(function avgOfNum(x,y)
{
    return function()
    {
        return (x+y)/2;        
    }
})(10,20);
console.log(result()+"\n");




