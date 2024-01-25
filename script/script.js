const formNode = document.querySelector("#addForm");

// const priorValues = {
//   0: "Low",
//   1: "Medium",
//   2: "High",
// };

const todos = [];

formNode.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("submited");
  const { title, prior } = event.target; /* деструктуризация так короче */
  console.log(title.value); // это свойство элемента формы в HTML, которое содержит текущее значение введенное пользователем или выбранное пользователем в поле ввода. Это свойство чаще всего используется с элементами <input>, <select> и <textarea>
  // console.log(prior.value);
  const todo = {
    title: title.value,
    prior: prior.value
  };
  todos.push(todo);
  rerender();
  console.log(todos);
  event.target.reset();
});

function getTodo(title, prior) {
  /* получает 2 значения */

  const container = document.createElement("div");
  const titleNode = document.createElement("p");
  const priorNode = document.createElement("p");

  titleNode.innerText = title;
  priorNode.innerText = prior;
  container.append(titleNode, priorNode);
  return container;
}

function rerender() {
  const container = document.querySelector("#todoContainer");
  container.innerText = "";
  todos.forEach(({title, prior }) => container.append(getTodo(title, prior)));
}
