// Não esquece de rodar 
// yarn run dev

class TodoList{
    constructor(){
        this.todos = []
    }

    addTodos(){
        let inputDate = document.getElementById('input_todo').value
        this.todos.push(inputDate);
    
        console.log(inputDate)
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodos();
    let inputDate = document.getElementById('input_todo').value = ""
}

const arr = [1,2,33,4,5,6];

const newArr = arr.map((item, index) =>{
    return  index ;
})

console.log(newArr)
