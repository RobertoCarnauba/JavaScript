var listElement = document.querySelector("#app ul")
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')


// var todos = [
//     'Fazer Café',
//     'Estudar algumas horas',
//     'Cuidar da Criança'
// ]

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
   
    listElement.innerHTML = ''

    for(todo of todos){
        //Criando o li
        var todoElement = document.createElement("li")
        //Criando o texto/conteudo
        var todotext = document.createTextNode(todo)
        //Criando o link a
        var linkElement = document.createElement("a");
        linkElement.setAttribute('href', '#')
        //Criando o texto/conteudo do link
        var linkText = document.createTextNode(' Excluir')

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

        linkElement.appendChild(linkText)
        todoElement.appendChild(todotext)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}


buttonElement.onclick = function addTodo(){
    var todoText = inputElement.value;

    if(todoText != ''){
        todos.push(todoText);
        inputElement.value = '';
        renderTodos()
        saveToStorage()
    }else {
        alert("Uma nova tarefa deve ser adcionada!")
    }
}

function deleteTodo(pos){
  todos.splice(pos, 1 )
  renderTodos()
  saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))
}




renderTodos()


