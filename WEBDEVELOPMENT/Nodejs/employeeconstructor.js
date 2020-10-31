var Employee =function(){}
Employee.prototype.name='Ram';
Employee.prototype.printname=function()
    {
        console.log(' Welcome'+ this.name); 
    };
emp1=new Employee();
emp1.name= 'raj';
emp1.printname();

                                   