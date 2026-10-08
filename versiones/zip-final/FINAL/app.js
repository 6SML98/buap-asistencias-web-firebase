// 🔥 CONFIGURA TU FIREBASE AQUÍ
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO",
  databaseURL: "TU_DATABASE_URL",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_BUCKET",
  messagingSenderId: "TU_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

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
function registrarAsistencia() {
    const fecha = new Date().toLocaleString();

    db.ref("asistencias").push({
        nombre: usuario,
        fecha: fecha
    });

    alert("Asistencia registrada");
}

// READ
function verAsistencias() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    db.ref("asistencias").once("value", snapshot => {
        snapshot.forEach(child => {
            const data = child.val();

            const li = document.createElement("li");
            li.className = "list-group-item";
            li.innerText = `${data.nombre} - ${data.fecha}`;

            lista.appendChild(li);
        });
    });
}