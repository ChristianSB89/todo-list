const toDoInput = document.querySelector("#text-input")

document.querySelector("#add-btn").addEventListener("click", ()=> {
    toDoInput.focus()
    addToDo()
})

document.querySelector("#text-input").addEventListener("keyup", (e) => {
    if (e.code !== "Enter") return
    addToDo()
})

document.querySelector("#reset-btn").addEventListener ("click", ()=> {
    const allLiElements = document.querySelectorAll ("li")
    allLiElements.forEach (li => li.remove())
})

// Creating list elements with delete button

function addToDo() {
    if (toDoInput.value.match(/^ *$/)) return

    const li = document.createElement ("li")
    const p = document.createElement ("p")
    const button = document.createElement ("button")

    p.textContent = toDoInput.value
    button.textContent = "DELETE"
    button.classList.add ("btn", "delete-btn")

    button.addEventListener ("click", () => li.remove())

    li.append (p, button)
    document.querySelector ("ul").append (li)
    toDoInput.value = ""
}

// Delete entire list function

function confirmDelete()
{
  return confirm("Are you sure you want to completely empty the list?");
}

// Sort A-Z

function sortItems() {
  let list, i, switching, b, shouldSwitch;
  list = document.getElementById("list");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("li");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}