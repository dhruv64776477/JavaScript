const todoList = [
];
renderTodo();
function renderTodo() {
  let todoListHTML = "";
  for (let index = 0; index < todoList.length; index++) {
    const todoobject = todoList[index];
    // const name=todoobject.name;
    // const duedate=todoobject.duedate;
    const { name, duedate } = todoobject;
    const html = `
    <div>${name}</div>
    <div>${duedate} </div>
    <button 
    class="button" 
    onclick="
    todoList.splice(${index},1);
    renderTodo();
    ">Delete</button>`;
    todoListHTML += html;
  }

  document.querySelector(".js-div").innerHTML = todoListHTML;
}
function addTodo() {
  const nameElem = document.querySelector(".js-name");
  const name = nameElem.value;
  const dateElem = document.querySelector(".js-date");
  const duedate = dateElem.value;
  todoList.push({ name, duedate });
  nameElem.value = "";
  renderTodo();
}
