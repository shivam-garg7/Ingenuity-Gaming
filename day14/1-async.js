console.log('this is statement-1');
var result=0;
setTimeout(() => {
    for(var i=0;i<=10000000;i++) result+=i;
console.log(result);
});
console.log('this is statement-2');