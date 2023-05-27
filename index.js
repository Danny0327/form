const nombre = document.getElementById('name');
const identificacion = document.getElementById('cc');

const sillas = document.getElementById("sillas");
const funciones = document.getElementById("function_movies_html");

const button = document.getElementById('boton');
const salas = document.getElementById('rooms_html');

function registrarDatos() {
    const funcionElegida = function_movies.find(pelicula => pelicula.id == funciones.value)
    console.log(funcionElegida.nombre)

   const roomElegida = rooms.find(room => room.id == salas.value)
   const SillaElegida = chair.find(silla => silla.id == sillas.value)
//  console.log(identificacion.value);

        window.alert (nombre.value + 
            ' con identificacion: ' + identificacion.value + 
            ' le corresponde la silla: ' + sillas.value + 
            ' para la función: ' + funciones.value + 
            ' a la hora: ' + funcionElegida.hora + 
            ' en la sala: ' + salas.value);
    } 
