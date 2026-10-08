import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let usuario = "";

// LOGIN
function login() {
    usuario = document.getElementById("nombre").value;

    if (usuario === "") {
        alert("Ingresa tu nombre");
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";
    document.getElementById("user").innerText = "Bienvenido: " + usuario;
}

// CREATE
async function registrarAsistencia() {
    const fecha = new Date().toLocaleString();

    try {
        await addDoc(collection(db, "asistencias"), {
            nombre: usuario,
            fecha: fecha
        });

        alert("Asistencia registrada");
    } catch (e) {
        console.error(e);
        alert("Error al registrar asistencia");
    }
}

// READ
async function verAsistencias() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    try {
        const snapshot = await getDocs(collection(db, "asistencias"));

        snapshot.forEach(doc => {
            const data = doc.data();

            const li = document.createElement("li");
            li.className = "list-group-item";
            li.innerText = `${data.nombre} - ${data.fecha}`;

            lista.appendChild(li);
        });
    } catch (e) {
        console.error(e);
        lista.innerHTML = "Error cargando asistencias";
    }
}

window.login = login;
window.registrarAsistencia = registrarAsistencia;
window.verAsistencias = verAsistencias;