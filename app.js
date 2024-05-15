// var taskinput = document.getElementById("new-task-input");
// var hsubmit = document.getElementById("new-task-submit");
// var newDiv = document.getElementById("newww");

// hsubmit.addEventListener('click', function () {
//     var para = document.createElement('p');
//     para.innerText = taskinput.value;
//     newDiv.appendchild(para);
// })

window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  // var hinput = document.getElementById('new-task-input');
  // var hsubmit = document.getElementById('new-task-submit');
  // var hlist_el = document.getElementById('tasks');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var task = input.value;
    if (!task) {
      alert("Please fill out the task.");
      return;
    }
    var task_el = document.createElement("div");
    task_el.classList.add("task");

    var task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    // task_content_el.innerText = task;
    // task_el.appendChild(task_content_el);

    var task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    task_el.appendChild(task_content_el);

    list_el.appendChild(task_el);

    var task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    var task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    var task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);

    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener('click', () => {
      if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
      task_delete_el.addEventListener("click", () => {
        list_el.removeChild(task_el);
      });
    });
  });
});
