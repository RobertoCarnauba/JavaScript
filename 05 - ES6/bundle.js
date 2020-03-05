"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Não esquece de rodar 
// yarn run dev
var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  }

  _createClass(TodoList, [{
    key: "addTodos",
    value: function addTodos() {
      var inputDate = document.getElementById('input_todo').value;
      this.todos.push(inputDate);
      console.log(this.todos);
      let arr = this.todos
      arr.innerHTML = this.todos

    }
  }]);

  return TodoList;
}();

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.addTodos();
  var inputDate = document.getElementById('input_todo').value = "";
};

var arr = [1, 2, 33, 4, 5, 6];
var newArr = arr.map(function (item, index) {
  return index;
});
console.log(newArr);
