
axios.get('https://api.github.com/users/RobertoCarnauba')
 .then(function(response){
     console.log(response)
     document.querySelector("#app").innerHTML = response.data['login']
 })
 .catch(function(error){
     console.warn(error)
 })