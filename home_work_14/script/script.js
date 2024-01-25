const formNode = document.querySelector("#addForm");

const listOfName = [];

formNode.addEventListener("submit", (event) => {
  event.preventDefault();
  const { name, lastName, age } = event.target;

  const person = {
    name: name.value,
    lastName: lastName.value,
    age: age.value
  };
  listOfName.push(person);

rerender();
  console.log(listOfName);
  event.target.reset();

});

function getPerson(name, lastName, age){
    const container = document.createElement('div')
    const nameNote = document.createElement('p');
    const lastNameNote = document.createElement('p');
    const ageNote = document.createElement('p');

    nameNote.innerText = "Name: " + name;
    lastNameNote.innerText = "Last name: " +lastName;
    ageNote.innerText = "Age: " + (+age);

    container.append(nameNote, lastNameNote, ageNote);
    return container;

}

function rerender(){
    const container = document.querySelector("#containerPerson")
    container.innerText = "";
    listOfName.forEach(({name, lastName, age}) => container.append(getPerson(name, lastName, age)));
}
