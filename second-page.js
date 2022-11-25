import TaskManager from './TaskManager.js'

let date = document.getElementById("todaysDate");
window.addEventListener("load", myFunction);
  function myFunction() {
    let d = new Date();
    let month = d.getMonth();
    let correctMonth = month + 1;
    date.innerHTML= d.getDate() + "/" + correctMonth + "/" + d.getFullYear();
    document.getElementById("todaysDate").style.color = "white";

    const taskManager = new TaskManager();
    let allTasks = taskManager.getTaskList();
    console.log(taskManager.getTaskList());
    function addItem(item){
      const itemHTML = '<div class="card" style="width: 100%;">\n' +
          '        <div class="card-body">\n' +
          '        <h5 class="card-title text-primary" >'+item._taskName+'</h5>\n' +
          '        <p class="card-text font-weight-bold">'+ 'Assigned to: ' +item._assignTo+'</p>\n' +
          '        <p class="card-text font-weight-bold">'+ 'Status: ' + item._status+'</p>\n' +
          '        <p class="card-text">' + 'Description: ' +item._desc+'</p>\n' +
          '        <p class="card-text">' + 'Due Date: ' +new Date(item._dueDate).toLocaleDateString("en-Uk")+'</p>\n' +
          '        <a href="#" class="btn btn-primary" onclick="return deleteTask(item._id)">Delete</a>\n' +
          '        <a href="#" class="btn btn-primary">Update</a>\n' +
          '    </div>\n' +
          '</div>\n' +
          '<br/>';
      const itemsContainer = document.getElementById("list-items");
      itemsContainer.innerHTML += itemHTML;
  }
  allTasks.map(task=> {
    addItem(task);
  })
  };

