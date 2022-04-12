import dom from "./domObjects.js";

console.log(dom)
const projects = [];

function Project(name) {
    return {
        name: name,
        tasks: [],
        // deadLine: 0,
    }
}
function addTodoDom(todo, target) {

    const todoItem = document.createElement('div');
    function deleteTask(task, project) {
        console.log(todoItem);
        const pro = projects.find(element => element.name == project)

        pro.tasks.splice(pro.tasks.indexOf(pro.tasks.find(element => element.title = task)), 1)
        todoItem.remove()
    }
    const delBtn = document.createElement("button");
    delBtn.classList.add("text-5xl")
    delBtn.innerHTML = "&times";
    delBtn.addEventListener("click", () => deleteTask(todo.title, todo.project))
    const tick = document.createElement("div");
    tick.classList.add("bg-white", "rounded-full", "mx-5", "p-[24px]", "rounded-lg");

    tick.addEventListener("click", () => {
        console.log(tick)
        tick.classList.toggle("tick")
        todo.checkList = !todo.checkList
        console.log(todo.checkList)
    })
    todoItem.classList.add("todoItem", "flex", "flex-row", "rounded-lg", "items-center", "p-2", "text-white", "bg-[#275DAD]");

    const flex = document.createElement("div");
    flex.classList.add("flex", "items-center", "flex-row", "grow", "w-full")
    const details = document.createElement("div")
    details.classList.add("flex", "flex-col")
    const heading = document.createElement("h1");
    heading.classList.add("text-3xl")
    heading.innerHTML = todo.title;
    const p2 = document.createElement("p");
    p2.classList.add("text-lg")
    p2.innerHTML = `Due Date: ${todo.dueDate}`;
    const p1 = document.createElement("p");
    p1.classList.add("text-lg")
    p1.innerHTML = `Priority: ${todo.priority}`;

    flex.appendChild(tick);
    details.appendChild(heading)
    details.appendChild(p2)
    details.appendChild(p1)
    flex.appendChild(details)
    todoItem.appendChild(flex)
    todoItem.appendChild(delBtn)
    target.appendChild(todoItem);
}
function Task(title, description, dueDate, priority, notes, checkList, project) {

    return { title, description, dueDate, priority, notes, checkList, project }
}
function validateForm() {
    return (dom.title.value != "" && dom.dueDate.value != "")
}

function createTodo() {
    // console.log()
    if (validateForm()) {

        let todo = Task(dom.title.value, dom.description.value, dom.dueDate.value, dom.priority.value, dom.notes.value, false, dom.projectList.value);

        const pro = projects.find(element => element.name == dom.projectList.value);
        pro.tasks.push(todo);
        // console.log(pro)
        addTodoDom(todo, document.getElementById(`${dom.projectList.value}`));

    } else {
        alert("Title and dueDate are required")
    }
}
function updateProjectList() {
    dom.addOptions(projects, dom.projectList)
}
function createProject(name) {
    const pro = Project(name);
    projects.push(pro);
    dom.addProjectToDom(pro)
    updateProjectList();
}

createProject("default");

dom.todoSubmit.addEventListener("click", createTodo)

dom.projectSubmit.addEventListener("click", () => {
    console.log(projects)
    console.log(dom.projectTitle.value)

    if (!dom.options.includes(dom.projectTitle.value)) {

        const p = Project(dom.projectTitle.value)
        projects.push(p)
        updateProjectList();
        console.log(projects)
        dom.addProjectToDom(p)
    }
    else {
        alert("Project already added")
    }
})