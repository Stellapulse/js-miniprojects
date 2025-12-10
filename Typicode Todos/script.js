const apiUrl='https://jsonplaceholder.typicode.com/todos';//Globalvariable for urls

const gettodos=()=>{
    fetch(apiUrl + '?_limit=5')//Fetches 5 todos from the API
    .then((res)=> res.json())
    .then((data) =>{
        data.forEach((todo) => addTodoToDom(todo));
    console.log(data)
});
};

const addTodoToDom = (todo) =>
{
      const div = document.createElement('div');
            div.appendChild(document.createTextNode(todo.title));
            div.setAttribute('data-id',todo.id);
            if(todo.completed){
                div.classList.add('done');
            }

            document.getElementById('todo-list').appendChild(div);
}

const createTodo = (e) => {
  e.preventDefault();//Prevents the default form submission behavior
//   console.log(e.target.firstElementChild.value);

  const newTodo = {
     title:e.target.firstElementChild.value,
     completed:false
  }
    fetch(apiUrl,{
        method:'POST',
        body:JSON.stringify(newTodo),
        headers:{   
            'Content-type':'application/json'
        },
    })
    .then((res) => res.json())
    .then((data) => addTodoToDom(data)); 
}

const init =() =>{

    document.addEventListener('DOMContentLoaded', gettodos);
    document.querySelector('#todo-form').addEventListener('submit',createTodo);
}
init();