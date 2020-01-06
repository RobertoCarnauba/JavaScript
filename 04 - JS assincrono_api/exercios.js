// 1º exercício
// Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
// segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
// idade o resultado deve cair no .then, caso contrário, no .catch

function confAge(age) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      age >= 18 ? resolve(age) : reject(age);
    }, 2000)
    //    if(age >= 18){
    //     resolve(console.log(age))
    //    } else {
    //        reject(error)
    //    }
  })
}
confAge(25)
  .then(function () {
    console.log("Maior de Idade: ")
  })
  .catch(function () {
    console.log("Menor de idade: ")
  })

// 2º exercício
// Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
// nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
// URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

var inputName = document.querySelector("#user")
var buttonAdd = document.querySelector("#app button")
var dataList = document.querySelector('ul')

buttonAdd.onclick = name => {

  var user = inputName.value

  if (user != "") {
    renderLoanding()
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        FileList(response.data)
      })
      .catch(error => {

        renderError(error)
      })
  } else {
    alert("Preencha o campo")
  }

  //renderiza a consulta
  const FileList = repositorios => {

    dataList.innerHTML = "";
    //console.log(repositorios)
    for (repo of repositorios) {
      const responame = document.createTextNode(repo.name);
      const repoItem = document.createElement("li");

      repoItem.appendChild(responame)
      dataList.appendChild(repoItem)
    }

  }

}
//Adicione um indicador de carregamento em tela no lugar
function renderLoanding(loading) {
  dataList.innerHTML = "";
  var textElement = document.createTextNode("Carreganndo...");
  var loadingElement = document.createElement("li");

  loadingElement.appendChild(textElement)
  dataList.appendChild(loadingElement)
}
//mensagem de error
function renderError(loading) {
  dataList.innerHTML = ""
  var msgUserEmpty = !user ? "Preencha o usuário" : "Erro ao efetuar a buscar"

  var textElement = document.createTextNode(msgUserEmpty);
  var erroElement = document.createElement("li");
  erroElement.style.color = "#F00"
  erroElement.appendChild(textElement)
  dataList.appendChild(erroElement)
}


