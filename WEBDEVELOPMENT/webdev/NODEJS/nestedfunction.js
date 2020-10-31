var sum=(function(n1,n2,n3)
{
    return n1+n2+n3;
})(10,20,50);


console.log(sum);

(function greet (name)
{
    console.log('hello');
})('priya');

// function avgofnum(x,y)
// {
//     return function()
//     {
//         return x+y;
//     }
// }

// var result=avgofnum(12,12);
// console.log(result()/2);
// console.log(avgofnum(12,12)()/2);

var result=(function (x,y)
{
    return function()
    {
        return x+y;
    }
})(10,20);

console.log(result()/2);
