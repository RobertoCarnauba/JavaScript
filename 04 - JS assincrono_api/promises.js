var mypromises = function(){
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.github.com/users/RobertoCarnauba')
      xhr.send(null)

     xhr.onreadystatechange = function() {
         if(xhr.readyState === 4){
             if(xhr.status === 200){
                 resolve(JSON.parse(xhr.responseText));
             } else {
                 reject('Erro na requisição')
             }
         }
     }

    })
}

 mypromises()
 .then(function(response){
     console.log(response)
     document.querySelector("#app").innerHTML = response.login
 })
 .catch(function(error){
     console.warn(error)
 })