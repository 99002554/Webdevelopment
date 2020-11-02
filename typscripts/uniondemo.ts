var printVal =(val: string |number)=>{
    if(typeof(val)=='string'){
        console.log('welcome' + val);
    }
    if(typeof(val)=='string'){
    console.log('your score is' + val)
    }
}

printVal('Kumaran');
printVal('10');
let printValues =(val: string[] |number|Object)=>{
    if(Array.isArray(val)){
        console.log('print Array ' + val)
    }
    if(typeof(val)=='object'){
        console.log(val);
    }
}
printValues(['Raj','Ram']);
printValues({name: 'Suraj'});


    

