const API_URL = 'https://api.covid19api.com/summary';

// const API_UR='https://www.universal-tutorial.com/api/getaccesstoken';


// async function getApiDat(url){
//     console.log("3L");
//     // fetch(url).then((val)=>{ return val.json();}).then((res)=>displayData(res)).catch((err)=>console.log(err))
//   var data=await fetch(url);
//   var result=await data.json();
//    console.log(result);
// }
// getApiDat(API_UR);
// let z;
// function myFunction() {
//     var x = document.getElementById("mySelect").selectedIndex;
//    z =document.getElementsByTagName("option")[x].value;
  
var ie=0;
async function getApiData(url){
    console.log("3e");
    // fetch(url).then((val)=>{ return val.json();}).then((res)=>displayData(res)).catch((err)=>console.log(err))
  var data=await fetch(url);
  console.log(data);
  var result=await data.json();
  fun(result);
}
//   console.log(z);
//   var z=fun(result);

function fun(r){
var select1=document.getElementById("mySelect");
for(var i=0;i<195;i++){
    var option=document.createElement("option");
    option.innerText=r.Countries[i].Country;
    select1.appendChild(option);
    // var x = document.getElementById("mySelect").selectedIndex;
}
}

getApiData(API_URL);




// var e=0;
// async function getApiDat(url){
//     console.log("3e");
//     // fetch(url).then((val)=>{ return val.json();}).then((res)=>displayData(res)).catch((err)=>console.log(err))
//   var data=await fetch(url);
//   console.log(data);
//   var result=await data.json();
//    return result;
// }

  function myFunction() {
   
    
    var x = document.getElementById("mySelect").selectedIndex;
    // var data=await fetch(API_URL);
    // // console.log(data);
    // var result=await data.json();
    // var result=getApiDat();
//   for (var i=0;i<=195;i++) {
//     if(result.Countries[i].Country===z){ ie=i;
//     break;
//     }
//    }
//   console.log(result.Countries[x]);
fetch(API_URL).then((val)=>{ return val.json();}).then((res)=>displayData(res.Countries[x])).catch((err)=>console.log(err))
//   displayData(result.Countries[x]);
//   const myHeaders = new Headers(result);
//   for (const pair of result.entries()) {
//     console.log(`${pair[0]}: ${pair[1]}`);
    // myHeaders.forEach((value, key) => {
    //     console.log(`${key} ==> ${value}`);
    //   })
//  }
    //    displayData(result);
    
}
// getApiData(API_URL).then((val)=>{return JSON.parse(val)}).then((re)=>{
//     var select1=document.getElementById("mySelect");
// for(var i=0;i<195;i++){
//     var option=document.createElement("option");
//     option.innerText=re.Countries[i].Country;
//     select1.appendChild(option);
    
// }
// })
// getApiData(API_URL);
function displayData(serverData){
    // for(var user of serverData){
        // let newtr=document.createElement('tr');
        // let newtd1=document.createElement('td');
        // let newtd2=document.createElement('td');
        // let newtd3=document.createElement('td');
        // let newtd4=document.createElement('td');
        // let newtd5=document.createElement('td');
        // let newtd6=document.createElement('td');
        // let newtd7=document.createElement('td');
        // let newtd8=document.createElement('td');
       
        
        document.getElementById('p1').innerText="Country:   "+serverData.Country;
        document.getElementById('p2').innerText="NewConfirmed:  "+serverData.NewConfirmed;
        document.getElementById('p3').innerText="NewDeaths: "+serverData.NewDeaths;
        document.getElementById('p4').innerText="NewRecovered:  "+serverData.NewRecovered;
        document.getElementById('p5').innerText="TotalConfirmed:    "+serverData.TotalConfirmed;
        document.getElementById('p6').innerText="TotalDeaths:   "+serverData.TotalDeaths;
        document.getElementById('p7').innerText="TotalRecovered:    "+serverData.TotalRecovered;
        document.getElementById('p8').innerText="Date:  "+serverData.Date;
        document.getElementById('mytable').style.visibility="visible";
        // newtr.appendChild(newtd1);
        // newtr.appendChild(newtd2);
        // newtr.appendChild(newtd3);
        // newtr.appendChild(newtd4);
        // newtr.appendChild(newtd5);
        // newtr.appendChild(newtd6);
        // newtr.appendChild(newtd7);
        // newtr.appendChild(newtd8);
        // const select = document.querySelector('Counrty'); 
        // select.appendChild(newOption);
        // document.getElementById('mytable').appendChild(newtr);

        
           
        

    // }
}
// }
// function fun(result){
// var select1=document.getElementById("mySelect");
// for(var i=0;i<195;i++){
//     var option=document.createElement("option");
//     option.innerText=result.Countries[i].Country;
//     select1.appendChild(option);
//     var x = document.getElementById("mySelect").selectedIndex;
//     return x;
    
// }
// }
