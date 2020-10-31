var mobile ={
    brand:'samsung',
    price:5000,

    features:{
        ram:'4GB',
        camera:'16mp',
        screensize:15.5,
    },
    accesories:['charger','earphones']
}

for (const prop in mobile)
   {
        var stud=mobile[prop];
        
        if(stud instanceof Array)
        {
            for (const i in stud)
                {
                    console.log('accesories: '+stud[i]);
                }
        }else if(typeof stud == 'object')
        {
            for(const key in stud){
            console.log(key+" : "+stud[key]);
        }
        }else if(typeof stud == 'function')
        {
            stud();
        }else
        {
            console.log(stud);
        }
        
   }