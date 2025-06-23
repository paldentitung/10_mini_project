const addTaskButton = document.querySelector(".add-task-button");
const inputTasked = document.getElementById("input-task");
const taskListed = document.querySelector(".tasked-list");
const mode = document.getElementById('mode')
addTaskButton.addEventListener("click", () => {
  let li = document.createElement("li");
  let input = document.createElement("input");
  let deleteBtn = document.createElement("button");
  let inputTaskedValue = inputTasked.value.trim();
  let node = document.createTextNode(inputTaskedValue);

  if (inputTaskedValue === "") return alert("please enter the task");
  deleteBtn.innerHTML = "delete";
  input.type = "checkbox";

  input.addEventListener("change", () => {
    if (input.checked) {
      alert("the task is completed");
      taskListed.removeChild(li);
    }
  });
  deleteBtn.addEventListener("click", () => {
    alert("task is deleted");
    taskListed.removeChild(li)
  });

  li.classList.add("active-li");
  li.appendChild(input);
  li.appendChild(node);
  li.appendChild(deleteBtn);
  taskListed.appendChild(li);
  inputTasked.value = "";
});
mode.addEventListener("click",()=>{
document.body.classList.toggle("active")
if(document.body.classList.contains("active")){
    mode.innerHTML=`<i class="fa-solid fa-toggle-on"></i>`
}else{
    mode.innerHTML=`<i class="fa-solid fa-toggle-off"></i>`
}
})