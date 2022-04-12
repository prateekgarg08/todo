const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const notes = document.getElementById("notes");
const todoSubmit = document.getElementById("todoSubmit");
const todoForm = document.getElementById("todoForm");
const defaultProject = document.getElementById("defaultProject");
const projectList = document.getElementById("projectList");
const projects = document.getElementById("projects");
const projectSubmit = document.getElementById("projectSubmit");
const projectTitle = document.getElementById("projectTitle");


const options = [];



function addOptions(arr, selectDomObject) {
    arr.forEach((item) => {
        if (!options.includes(item.name)) {

            const option = document.createElement('option');
            console.log(arr.indexOf(item))
            option.innerText = item.name;
            // option.setAttribute("value", arr.indexOf(item));
            option.classList.add("project_options");
            option.setAttribute("value", item.name);
            options.push(item.name)
            selectDomObject.appendChild(option)
        }
    })
}

function addProjectToDom(project) {
    const div = document.createElement('div');
    div.classList.add("mx-1", "rounded-lg", "p-2", "shadow-sm", "space-y-2", "shadow-black")

    div.setAttribute("id", project.name)
    const heading = document.createElement('h1');
    heading.classList.add("text-4xl", "text-center")
    heading.innerText = project.name;
    div.appendChild(heading);
    projects.appendChild(div);
}

export default { title, description, dueDate, priority, notes, todoSubmit, todoForm, defaultProject, addOptions, projectList, addProjectToDom, projectTitle, projectSubmit, options };