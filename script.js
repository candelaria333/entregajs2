let autos = [
    {producto: "aceite de oliva", precio: 850},
    {producto: "aceite de coco", precio: 1100},
    {producto: "frutos secos", precio: 2800},
    {producto: "chocolate vegano", precio: 750},
    {producto: "vino antiage", precio: 1050},


];
function miFuncion() {

let option = prompt("Elige la opción de búsqueda: 1. Productos");

if (option === "1") {
        let criterio = prompt("Ingresa el producto");
        let result = autos.filter(function(objeto) {
            return objeto.producto.toLowerCase() == criterio.toLowerCase();
        });
        if (result.length > 0) {
            let resultado = "";
            result.forEach(function(objeto) {
                resultado += "producto: " + objeto.producto + "\n: " + "\nprecio: "+ objeto.precio + "\n\n";
            });
            alert(resultado);
        } else {
            alert("No se encontraron resultados");
        }
    } 

}

function calculate() {
    // Obtener los valores de los campos de entrada
    let monto = document.getElementById("monto").value
    const interes1 = 0.59
    let anios = document.getElementById("anios").value

    let monto1 = parseInt(monto)
    let anios1 = parseInt(anios) 
    // Calcular el interés
    const interes = monto1 * interes1 * anios1
    console.log(`Los intereses son ${interes}`)

    // Calcular el pago mensual
    let pagoMes = (monto1 + interes) / anios1 / 12
    let pagoMes1 = pagoMes.toFixed()
    // Mostrar el resultado al usuario
    document.getElementById("pagoMes").value = pagoMes1
    console.log(`el monto de las cuotas por mes es de: ${pagoMes1}`)

}



let datosCliente = [];

function datos(){
    while (true) {
        let nombre = prompt("Ingrese su nombre:");
        let apellido = prompt("Ingrese su apellido:");
        let dni = prompt("Ingrese su DNI:");
        let edad = prompt("Ingrese su edad:");
        let celular = prompt("Ingrese su numero de celular:");
        let email = prompt("Ingrese su Email:");
        
        const info = [`Nombre: ${nombre}, Apellido: ${apellido}, Dni: ${dni}, Edad: ${edad}, Telefono: ${celular}, Correo: ${email}`];
        datosCliente.push(info);
        
        if (!alert("Muchas Gracias en la brevedad lo contactaremos")) {
        break;
        }
    }
    console.log(datosCliente)
}