var stud = {
    name:'Ram',
    empId:20,
    hobbies:['dance','music'],
    address:{ 
        city:'Bangalore', state:'Karnataka' 
    }
}
var jsonstring=JSON.stringify(stud);
console.log(jsonstring);
var jsobj = JSON.parse(jsonstring);
console.log(jsobj);
    