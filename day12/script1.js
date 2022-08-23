var toInput=document.querySelector(".todo-input");
var btn=document.querySelector('button');
var todoList=document.querySelector('.todo-list');
var tt;
let g=0;
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
    window.localStorage.setItem(('tt'+g),JSON.stringify(toInput.value));
    g++;
    // window.localStorage.setItem('info',JSON.stringify(newli));
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


todoList.onclick=function checkBtn(e){
    var check =e.target;
    if(check.classList[0]=="deltbtn"){
         console.log("delete button pressed");
        var parentNode=check.parentNode;
        let numb = check.classList.length
        //  var KeyName = window.localStorage.key(parentNode);
    //    var u= JSON.parse( window.localStorage.getItem('info'));
    //    for (var i = 0; i < u.length; i++) {
    //     // if (u[i] === "splice") 
    //         var spliced = arr.splice(i, 1);}
        // u.slice(parentNode,1);
        window.localStorage.removeItem('tt'+numb);
        parentNode.remove();
    }else if(check.classList[0]=="cmpltbtn"){
        console.log("complete button pressed");
        var parentNode=check.parentNode;
        parentNode.classList.add("check");

    }
};
window.onload=function(){
    while(g>0) {
        var newDiv=document.createElement('div');
        newDiv.classList.add('todo');
        var newli=document.createElement('li');
        newli.classList.add('todo_item');
        var test='tt'+g;
        newli.innerHTML= window.localStorage.getItem(test);
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
        g--;
    }
}
