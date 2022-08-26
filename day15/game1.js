function loading(){
    document.getElementById('container').style.visibility="hidden"
    document.getElementById('loading').style.visibility="visible"
    document.getElementById('loading').style.display="block"
    setTimeout(() => {
       
        document.getElementById('loading').style.visibility="hidden"
        document.getElementById('loading').style.display="none"
    }, 3000);
}