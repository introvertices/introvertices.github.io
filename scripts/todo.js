
// where we store our tasks
let taskArray = [];

// grab the task text and sanitise it just in case
function getInput(){
    let incomingTask = document.getElementById("taskToAdd");
    incomingTask = incomingTask.value;

    const cleanTask = DOMPurify.sanitize(incomingTask);

    // console.log(cleanTask);

    addTask(cleanTask);
}

function addTask(addTask){

    taskArray.push(addTask);
    // console.log(taskArray);

    drawTasks();

}

// draws our array of tasks into the list div on the page
function drawTasks(){
    let todoListContainer = document.getElementById("todo");
    //clear out the div before redrawing
    todoListContainer.innerHTML = "";

    for (let i = 0; i < taskArray.length; i++){
        todoListContainer.innerHTML += `<div id="l${i}" class="list-item">${taskArray[i]}<button id="b${i}" class="list-close">X</button></div>`;
    }

    //get and set listeners for close buttons
    const closeButts = document.querySelectorAll('.list-close');
    closeButts.forEach (closeButt =>{
        closeButt.addEventListener('click', closeItem, false);
    });
    
}

function closeItem(buttEvent){
    const closeListItem = buttEvent.target;
    const closeListItemIndex = parseInt(closeListItem.id.replace('b',''));
    // console.log(closeListItem, closeListItemIndex);

    // removes the index from the array of the related button id number. Since everything is re-drawn after we don't need to worry about number gaps or repeats.
    taskArray.splice(closeListItemIndex,1);
    drawTasks();
}