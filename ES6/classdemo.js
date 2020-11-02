/*
class Person
{
    constructor(name,city)
    {
        this.city =city;
        this.name = name;
    }
    getName()
    { 
        return this.name; 
    } 
    setName(name)
    { 
        this.name = name; 
    }
}
var person = new Person(); 
person.setName('Marley'); 
console.log(person.getName());
*/

/*
class Person
{
    constructor(name,city)
    {
        this.city =city;
        this.name = name;
    }
    get firstname()
    { 
        return this.name.toUpperCase(); 
    } 
    set firstname(name)
    { 
        this.name = name; 
    }
}
var person = new Person('Raju'); 
console.log(person.firstname)
person.firstname='Marley'; 
console.log(person.firstname);

*/

class Vehicle
{
    constructor(brand,price)
    {
        this.brand =brand;
        this.price = price;
    }
    set details(ldiscount)
    {
        this.brand.toUpperCase();
        this.price= (this.price -ldiscount);
    }
    get details()
    {
        return this.brand.toUpperCase()+" is availabe at price = "+this.price ;
    }
}
vehicle = new Vehicle('Honda Hornett', '91000'); 
console.log(vehicle);
vehicle.details='10000'; 
console.log(vehicle.details);

