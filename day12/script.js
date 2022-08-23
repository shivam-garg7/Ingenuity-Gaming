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
// function cheat(){
//     if()
// }

//  var u= JSON.parse( window.localStorage.getItem('info'));

todoList.onclick=function checkBtn(e){
    var check =e.target;
    if(check.classList[0]=="deltbtn"){
         console.log("delete button pressed");
        var parentNode=check.parentNode;
        
        // var KeyName = window.localStorage.key(index);
    //    var u= JSON.parse( window.localStorage.getItem('info'));
       
        // u.slice(parentNode,1);
        
        window.localStorage.removeItem('info');
       
        
        parentNode.remove();
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
    