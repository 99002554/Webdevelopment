var message:string="Hello world";
console.log(message);


var username: string = 'Kumaran';
var username: string ;
var username = 'Kumaran';
console.log(username);

// union types

let urname : string | number;
urname = 'Priya';
urname = 10;
console.log(urname);



function calcSum(n1: number,n2:number): void
{
    console.log(n1+n2);
}
calcSum(10,20);
function greetUser(name:string)
{
    return 'welcome' + name;
}
console.log(greetUser('Ram'));






//rest

function addNumbers(...nums :number[]){
    var sum=0;

    for(var i=0;i<nums.length;i++)
    {
        sum+=nums[i];
    }
    console.log(sum)
}

addNumbers(10,20)
addNumbers(10,20,30)
addNumbers(10,20,30,40)

//default paameter

function userDetails(name:string,city: string=' Bengaluru')
{
    console.log('name'+name);
    console.log('city'+city);
}

userDetails('Raju');
userDetails('Raju','Ooty');



//using lambda

  var  greet = (msg:string)=>
    {
        return 'welcome'+msg;
    }
    console.log(greet('hello'));

//single statement

var show = ()=> console.log('Hi');
show();

var checktype= (a,b) =>
{
    console.log(a+b);
}

checktype(10,20)
checktype('ram','tom')
checktype(10,'ram')