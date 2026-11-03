console.log("Lab6");

const btnSave = document.getElementById("btnSave");
const inputTodo = document.getElementById("name")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (btnSave) {
btnSave.addEventListener("click", () => {

    const myTodo = {
        id: getRandomInt(1, 1000000000),
        name: inputTodo.value
    } 

    const currentTodoStr = localStorage.getItem("todo");
    // da ton tai todo truoc day

    if (currentTodoStr) {
        //convert from String to Object
        const currentTodo = JSON.parse(currentTodoStr);

        // push to todo
        currentTodo.push(myTodo);
        localStorage.setItem("todo", JSON.stringify(currentTodo));
    } else {
        localStorage.setItem("todo", JSON.stringify([myTodo]));
    }

    //success
    window.location.href = "lab6.html";
})
}

const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("todo");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);

        const tbody = document.querySelector("#todoList tbody");
    if (todoList && todoList.length) {
        todoList.forEach((todo, index) => {
            tbody.innerHTML += `<tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td>
                    <button 
                        data-id=${todo.id} 
                        class="btn-delete"
                    >
                    Xóa
                    </button>
                </td>
            </tr>`
        });
    }
    }
}

generateTodoTable();

const deleteBtn = document.querySelectorAll(".btn-delete")

if (deleteBtn) {
    deleteBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            handleDeleteTodo(id);
            
        })
    }) 
}

const handleDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem("todo");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);

        const newTodo = todoList.filter((todo, index) => todo.id + "" !== id);

        localStorage.setItem("todo", JSON.stringify(newTodo));
        window.location.reload();
    }
}