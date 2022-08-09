
var today = new Date();
document.write("Today Date:   ")
var d="0";
if(today.getDate()<10)
{
  d=d+today.getDate()
}
var date = d+'-'+0+(today.getMonth()+1)+'-'+today.getFullYear();
document.write(date);
document.body.style.backgroundColor="gray";
var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
document.write("<br>");
document.write( "Today Day:  "+week[today.getDay()]+".")
document.write("<br>");
document.body.style.margin = "100PX 0PX 300PX 700PX";
document.body.style.fontSize="30px"
document.body.style.fontFamily="Courier"
document.body.style.color="";
var name = prompt("What is your name?");
document.write("Name:  ")
document.write(name.fontcolor( "White" ));
const num1 = parseInt(prompt('Enter the first number'));
 const num2 = parseInt(prompt('Enter the second number'));
  const sum = num1+num2;
document.write(`<br> sum = ${sum}`);
const multiplication = num1*num2;
document.write(`<br> multiplication = ${multiplication}`);
const subtraction = num1-num2;
document.write(`<br> subtraction = ${subtraction}`);
const division = num1/num2;
document.write(`<br> divission= ${division}`);



