const function_movies = [
    {
        id: 1,
        nombre: "my little pony",
        hora: "12:30 PM"
    },
    {
        id: 2,
        nombre: "transformer",
        hora: "2:30 PM"
    },
    {
        id: 3,
        nombre: "barbie",
        hora: "5:30 PM"
    },
]

const rooms = [
    {
        id: 1,
        nombre: "vip"
    },
    {
        id: 2,
        nombre: "standard"
    },
]

const chair = [
    {
        id: 1,
        nombre: "a01"
    },
    {
        id: 2,
        nombre: "a02"
    },
    {
        id: 3,
        nombre: "a03"
    },
]

const agregarFuncion = (function_movies) => {
    let funcionesjs = document.getElementById("function_movies_html");
    let option = document.createElement('option');
    let nombre = function_movies.nombre;
    let id = function_movies.id;
    option.value = id;
    option.text = nombre;
    funcionesjs.appendChild(option);
}

const agregarSalas = (room) => {
    let salas = document.getElementById("rooms_html");
    let option = document.createElement('option');
    let nombre = room.nombre;
    let id = room.id;
    option.value = id;
    option.text = nombre;
    salas.appendChild(option);
}

const agregarSillas = (silla) => {
    let sillas = document.getElementById("sillas");
    let option = document.createElement('option');
    let nombre = silla.nombre;
    let id = silla.id;
    option.value = id;
    option.text = nombre;
    sillas.appendChild(option);
}

for (let i = 0; i < function_movies.length; i++) {
    agregarFuncion(function_movies[i])
}

for (let i = 0; i < rooms.length; i++) {
    agregarSalas(rooms[i])
}
for (let i = 0; i < chair.length; i++) {
    agregarSillas(chair[i])
}