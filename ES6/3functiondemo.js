
function totalCost(totalitems)
{
    return function calculate(costperitem)
    { 
        if(totalitems>100)
        {
            return totalitems*0.8*costperitem ;
        }
        else
        {
            return totalitems*costperitem;
        }
    }
};
var total=totalCost(200)
console.log(total(100)+"\n");





var fun = (a,b=10) => console.log(a+b);
fun();
fun(500);
fun(30,20);