/* con esta funcion estoy dandole funcionalidad al boton comenzar juego*/
//MODIFICADO
//PROBANDO
let contadorClick = 0
let BdJugadores = []
let modificacionTBody = document.getElementById ("miTbody")


function registrarJugador(){
    /* con el "let" estoy creando var y capturando los datos del form*/
    let nombreJugador = document.getElementById("nombre")
    
    
    // se crea un contador de clic para que pueda agregar cada nombre en la array en las diferentes posiciones
    BdJugadores[contadorClick] = nombreJugador

    contadorClick = ++contadorClick
    
                   
    tdJugadores(nombreJugador.value)

    nombreJugador.value = ""
};

function tdJugadores (nombreJugador){
    
    let creandoTr = document.createElement("tr")
    
    creandoTr.id = nombreJugador
    modificacionTBody.appendChild(creandoTr)
    
    let creandoTd = document.createElement("td")
    
    

    creandoTd.innerHTML = nombreJugador
    
    creandoTr.appendChild(creandoTd)
    
    
    
};

let textoPuntos = document.getElementById("nombrePuntos")
textoPuntos.innerHTML = `ingrese Puntos de ${BdJugadores[contadorClick]}`






function agregarPuntos() {
    
    let capturaPuntosinput = document.getElementById('inputPuntos').value

    
    let agregarPuntosACeldas = document.querySelectorAll('td')[5];
    agregarPuntosACeldas.innerHTML= capturaPuntosinput

    
};



//con esta func creamos nuevos campos en la tabla con base en los datos capturados con la func "registrarJugador" 


// con esta func capturmaos los datos de cantidad de tiros y hacemos que la tabla cambie la cantidad de columnas.
function iniciarJuego (){

    let tirosPorRonda = document.getElementById("tiroPorRonda").value
    let eliminadosPorRonda = document.getElementById("eliminadosPorRonda").value
     
    let tirosPorRondaTr = document.getElementById("tirosPorRonda")
    let creandoTr = document.createElement("tr")
    

    for (i=1;i<=tirosPorRonda;i++){
    
        let creandoTdTiros = document.createElement("td")
        tirosPorRondaTr.appendChild(creandoTdTiros)
        creandoTdTiros.innerHTML = `Tiro # ${i}`
        let numRonda = document.getElementById("numRonda")
        numRonda.colSpan = i+1

        let crearCeldasPuntosJugador = document.createElement ('td')
        // creandoTr.id = nombreJugador
        creandoTr.appendChild(crearCeldasPuntosJugador)


    };
    let creandoTotal = document.createElement("td")
    tirosPorRondaTr.appendChild(creandoTotal)
    creandoTotal.id = "total r1"
    creandoTotal.innerHTML = "Total"

    const misTrJugadores = document.querySelectorAll('#miTbody tr')

    for (let trActual of misTrJugadores) {
        for (i=1;i<=tirosPorRonda;i++){
        const nuevoTr = document.createElement('td')
        nuevoTr.innerHTML = "prueba de..."
        trActual.appendChild(nuevoTr)
        };
    };

};

function siguienteRonda() {

};