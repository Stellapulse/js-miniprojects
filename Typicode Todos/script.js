const apiUrl='https://jsonplaceholder.typicode.com/todos';//Globalvariable for urls

const gettodos=()=>{
    fetch(apiUrl + '?_limit=5')//Fetches 5 todos from the API
    .then((res)=> res.json())
    .then((data) =>{
        data.forEach((todo) => {
            const div = document.createElement('div');
            div.appendChild(document.createTextNode(todo.title));
             
            if(todo.completed){
                div.classList.add('done');
            }

            document.getElementById('todo-list').appendChild(div);
           })
    console.log(data)
});
};

gettodos();