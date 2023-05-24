// Variables y selectores
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('.ul-tareas');
const empty = document.querySelector('.sintareas');

// Almacenamiento de localStorage
const listaTareas = JSON.parse(localStorage.getItem('listaTareas')) || [];

// Agregar tareas guardadas en LocalStorage
for (let tarea of listaTareas) {
    agregarTarea(tarea);
}

// Agregar tarea
function agregarTarea(text) {
    // Máximo 100 Carácteres + Validar símbolos básicos
    const regex = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]{1,100}$/;

    // Límite de tareas
    if (ul.childElementCount >= 10) {
        alert("¡Ya tienes 10 tareas en la lista!");
        return;
    }

    if (text.match(regex)) {
        const li = document.createElement('li');
        li.classList.add('li-todo');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);

        // Botón eliminar tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "X";
        deleteBtn.className = "btn-borrar";
        li.appendChild(deleteBtn);

        // Almacenar tareas en localStorage
        actualizarLocalStorage();

        // Mostrar mensaje "No hay tareas pendientes" si no hay tareas en la lista
        if (ul.childElementCount === 0) {
            empty.style.display = "block";
        } else {
            empty.style.display = "none";
        }
    } else {
        alert("El texto introducido no es válido. Por favor, introduce un máximo de 100 caracteres y utiliza solo letras, números o símbolos básicos.");
    }
}

// Borrar tarea
function eliminarTarea(e) {
    if (e.target.classList.contains('btn-borrar')) {
        const li = e.target.parentElement;
        ul.removeChild(li);
        actualizarLocalStorage();

        // Mostrar mensaje "No hay tareas pendientes" si no hay tareas en la lista
        if (ul.childElementCount === 0) {
            empty.style.display = "block";
        } else {
            empty.style.display = "none";
        }
    }
}

// Actualizar LocalStorage
function actualizarLocalStorage() {
    const lista = document.querySelectorAll('.li-todo');
    const listaTareas = [];
    for (let tarea of lista) {
        listaTareas.push(tarea.firstElementChild.textContent);
    }
    localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
}

// BOtón "Agregar"
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
        agregarTarea(text);
        input.value = "";
    }
});

// Asociar el "Enter" a añadir la tarea.
input.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
        addBtn.click();
    }
});

// Eliminar tarea al hacer click en el botón de eliminar
ul.addEventListener('click', eliminarTarea);
