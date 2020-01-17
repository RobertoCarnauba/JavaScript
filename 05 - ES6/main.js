class List {
    constructor(){
        var data = []
        //localStorage.setItem(data);
        saveToStorage(data)
    }

    addTodo(){
        
        let todoinput = document.querySelector("#input_todo").value
        this.data.push(todoinput)
        //this.data.push(TodoList);
        console.log(this.data)
    }

}

class TodoList extends List {
    constructor(){
        super()
        
    }
   
}


const MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function(){
    MinhaLista.addTodo('Novo Todo')
    
}

function saveToStorage(){
    localStorage.setItem('list', JSON.stringify(data))
}