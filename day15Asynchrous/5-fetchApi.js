// 1.XHR
// 2.Fetch()
// 3.tird party packages (Axios)


// 1.XHR
const API_URL='https://jsonplaceholder.typicode.com/users';


async function getApiData(url){
    console.log("3e");
    // fetch(url).then((val)=>{ return val.json();}).then((res)=>displayData(res)).catch((err)=>console.log(err))
  var data=await fetch(url);
  var result=await data.json();
   displayData(result);
}
getApiData(API_URL);
function displayData(serverData){
    for(var user of serverData){
        let newtr=document.createElement('tr');
        let newtd1=document.createElement('td');
        let newtd2=document.createElement('td');
        let newtd3=document.createElement('td');
        let newtd4=document.createElement('td');
        newtd1.innerText=""+user.id;
        newtd2.innerText=""+user.name;
        newtd3.innerText=""+user.email;
        newtd4.innerText=""+user.phone;
        newtr.appendChild(newtd1);
        newtr.appendChild(newtd2);
        newtr.appendChild(newtd3);
        newtr.appendChild(newtd4);
        document.getElementById('mytable').appendChild(newtr);

    }
}