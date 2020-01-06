var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/RobertoCarnauba')
xhr.send(null);


xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
        var jsonResponde = (JSON.parse(xhr.responseText))
        console.log(jsonResponde["login"])
        document.querySelector("#app").innerHTML = jsonResponde.login
        
    }
  
    
}

