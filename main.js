

//alet(mensaje);
//document.write("Hola Mundo!");

//window.onload = (event) => {
    //El código que está entre las llaves {} se ejecutará 
    //luego de que haya cargado completamente la página.
    //Esto asegura de acceder al DOM.

    //Utilizamos promt para que el usuario ingrese una entrada
    //para almacenarla en una variable

    //var mensaje = prompt("Ingrese Mensaje")


    //La variable parrafoMensaje almacenará al
    //elemento html cuyo id sea igual a messageBox
    var parrafoMensaje = document.getElementById("messageBox");

    //La propiedad innerHTML va a cambiar el contenido del 
    //elemento HTML
    console.log("Hola Mundo en la consola");
    parrafoMensaje.innerHTML = mensaje;
};
