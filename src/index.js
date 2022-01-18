
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target["new-task-description"].value);
  })

  function handleToDo(todo) {
    let p = document.createElement('p');
    let btn = document.createElement("button");
    btn.textContent = 'x';
    p.textContent = `${todo} `;
    p.appendChild(btn);
    console.log(p)
    document.querySelector('#list').append(p)

    btn.addEventListener("click", (e) => {
      p.remove();
    })
  }
});
