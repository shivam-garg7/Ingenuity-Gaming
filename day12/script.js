
// selectors
var toInput=document.querySelector(".todo-input");
var btn=document.querySelector('button');
var todoList=document.querySelector('.todo-list');
locatArray = new Array();
// let inner=0;
btn.onclick=function createTodo(e){
    e.preventDefault();
    var newDiv=document.createElement('div');
    newDiv.classList.add('todo');

    var newli=document.createElement('li');
    newli.classList.add('todo_item');
    var test=toInput.value;
    test.trim();
    if(test.length != 0){
    newli.innerHTML=toInput.value;
    var fieldValue=toInput.value;
    var locatItem = locatArray.push(fieldValue);
    window.localStorage.setItem('info',JSON.stringify(locatArray));
    newDiv.appendChild(newli);

    var cmpltbtn=document.createElement('button');
    cmpltbtn.classList.add('cmpltbtn');
    cmpltbtn.innerHTML='<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);

    var deltbtn=document.createElement('button');
    deltbtn.classList.add('deltbtn');
    deltbtn.innerHTML='<i class="fa fa-trash"></i>';
    newDiv.appendChild(deltbtn);

    todoList.appendChild(newDiv);
    toInput.value="";
    // inner++;

};
}
<<<<<<< HEAD
function fetch(){
    
}
=======
// function cheat(){
//     if()
// }

//  var u= JSON.parse( window.localStorage.getItem('info'));
>>>>>>> 0236479d4ee4293e41fd2814b58ba1a245fb0904

todoList.onclick=function checkBtn(e){
    var check =e.target;
    if(check.classList[0]=="deltbtn"){
         console.log("delete button pressed");
<<<<<<< HEAD
         fetch();
        var parentNode=check.parentElement;
        var t=parentNode.children[0];
        u.pop(t);
        window.localStorage.setItem('info',u);

        // var KeyName = 
    //    var u
    //    = JSON.parse( window.localStorage.getItem('info'));
    //    u.splice(parentNode, 1);
    //    window.localStorage.setItem('info',JSON.stringify());
    //    for (var i = 0; i < u.length; i++) {
    //     // if (u[i] === "splice") 
            // var spliced = arr.splice(i, 1);}
        // u.slice(parentNode,1);
        // var  arr=JSON.parse( window.localStorage.getItem('info'));
        // arr.slice(parentNode,1);
        // window.localStorage.setItem('info',JSON.stringify(arr))
        // window.localStorage.removeItem('info');
        // for (var i = 0; i < u.length; i++) {
        //     if(u[i]== parentNode.classList){
        //         u[i].slice
        //     }
        // }
    //     findIndex();
    //     function findIndex(){
    //     for(var i=0;i<arr.length;i++){
    //         if(arr[i]==toInput.value){
    //             return i;

    //         }
    //         else{
    //             continue;
    //         }
    //     }
    // }
    // var a=findIndex();
    // console.log(a);


        parentNode.parentElement.remove(t);
=======
        var parentNode=check.parentNode;
        
        // var KeyName = window.localStorage.key(index);
    //    var u= JSON.parse( window.localStorage.getItem('info'));
       
        // u.slice(parentNode,1);
        
        window.localStorage.removeItem('info');
       
        
        parentNode.remove();
>>>>>>> 0236479d4ee4293e41fd2814b58ba1a245fb0904
    }else if(check.classList[0]=="cmpltbtn"){
        console.log("complete button pressed");
        var parentNode=check.parentNode;
        parentNode.classList.add("check");

    }
};
window.onload=function(){
    var arr=JSON.parse(localStorage.getItem("info"));
    for (let j=0;j<arr.length;j++) {
        var newDiv=document.createElement('div');
        newDiv.classList.add('todo');
        var newli=document.createElement('li');
        newli.classList.add('todo_item');
        // var test=window.localStorage.getItem('info',JSON.stringify(data));
        // newli.innerHTML= window.localStorage.getItem('info',JSON.stringify(data));
        newli.innerHTML=arr[j];
        newDiv.appendChild(newli);
    
        var cmpltbtn=document.createElement('button');
        cmpltbtn.classList.add('cmpltbtn');
        cmpltbtn.innerHTML='<i class="fa fa-check"></i>';
        newDiv.appendChild(cmpltbtn);
    
        var deltbtn=document.createElement('button');
        deltbtn.classList.add('deltbtn');
        deltbtn.innerHTML='<i class="fa fa-trash"></i>';
        newDiv.appendChild(deltbtn);
    
        todoList.appendChild(newDiv);
        toInput.value="";
    }
}
    // var newDiv=document.createElement('div');
    // newDiv.classList.add('todo');
    // var newli=document.createElement('li');
    // newli.classList.add('todo_item');
    // // var test=window.localStorage.getItem('info',JSON.stringify(data));
    // // newli.innerHTML= window.localStorage.getItem('info',JSON.stringify(data));
    // newli.innerHTML=JSON.parse(localStorage.getItem("info"));
    // newDiv.appendChild(newli);

    // var cmpltbtn=document.createElement('button');
    // cmpltbtn.classList.add('cmpltbtn');
    // cmpltbtn.innerHTML='<i class="fa fa-check"></i>';
    // newDiv.appendChild(cmpltbtn);

    // var deltbtn=document.createElement('button');
    // deltbtn.classList.add('deltbtn');
    // deltbtn.innerHTML='<i class="fa fa-trash"></i>';
    // newDiv.appendChild(deltbtn);

    // todoList.appendChild(newDiv);
    // toInput.value="";
    