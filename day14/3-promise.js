function sayHi()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const err=true;
            if(!err)
            {
                resolve("ok i will meet you");
            }else{
                reject("sorry,i am busy");
            }     
        }, 3000);
       
        
    });
}
// console.log(sayHi());
// consume the promise
sayHi().then((val)=>console.log(val)).catch((err)=>console.log(err))
