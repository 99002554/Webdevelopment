var mobileList = [
    {
        brand: "Redmi",
        price: 20000,
        features:
        {
            RAM:"8GB",
            camera: 16,
            screensize: 15
        },
        acceserios: ['charger', 'usb', 'screenguard']
    },
    
    {
        brand: "Lava",
        price: 15000,
        features:{
        RAM:"2GB",
        camera: 16,
        screensize: 15
    },
        acceserios: ['charger', 'usb', 'pendrive']
    }
   ]

   mobileList.forEach(mobile=>{
        for(const key in mobile)
        {
            var stud=mobile[key];
            if(stud instanceof Array)
            {
                for (const i in stud)
                {
                    console.log('accesories: '+stud[i]);
                }
            }
            else if(typeof stud == 'object')
            {
                for(const key in stud)
                {
                    console.log(key+" : "+stud[key]);
                }
            }
            else if(typeof stud == 'function')
            {
                stud();
            }
            else
            {
                console.log(stud);
            }
        }

   });
