// Arrays

const codigos = [1,2,3,4,5,6,7,8,9,10]

const dniClientes = [38917705,17935299,21752752]

const nombreClientes = ["Marcelo Braganza","Osvaldo Braganza","Mariela Piro",]

// Objetos

const prod1 = { codigo: 1, descripcion: "Sprite", precio: 100, stock: 2 }
const prod2 = { codigo: 2, descripcion: "Baggio", precio: 740, stock: 5 }
const prod3 = { codigo: 3, descripcion: "Turron", precio: 500, stock: 4 }
const prod4 = { codigo: 4, descripcion: "Block", precio: 900, stock: 15 }
const prod5 = { codigo: 5, descripcion: "Vizzio", precio: 450, stock: 9 }

// Variables

const btnNuevaVenta = document.querySelector("#btnNuevaVenta")
const btnProductos = document.querySelector("#btnProductos")
const btnBorrarProd = document.querySelector("#btnBorrarProd")
const btnConfirmarVenta = document.querySelector("#btnConfirmarVenta")
const btnContinuarVendiendoCo = document.querySelector("#btnContinuarVendiendoCo")
const btnContinuarVendiendoCa = document.querySelector("#btnContinuarVendiendoCa")
const btnContinuarVendiendoDn = document.querySelector("#btnContinuarVendiendoDn")

let inputCodigoProducto = document.querySelector("#inputCodigoProducto")
let inputDescripcion = document.querySelector("#inputDescripcion")
let inputCantidad = document.querySelector("#inputCantidad")
let inputPrecio = document.querySelector("#inputPrecio")
let inputStockDisp = document.querySelector("#inputStockDisp")
let inputDni = document.querySelector("#inputDni")
let inputNombre = document.querySelector("#inputNombre")

let selectCantCuotas = document.querySelector("#selectCantCuotas")

let popUpConfirmacionVenta = document.querySelector("#popUpConfirmacionVenta")

let popUpIngreseUnCodigo = document.querySelector("#popUpIngreseUnCodigo")
let popUpIngreseCantidad = document.querySelector("#popUpIngreseCantidad")
let popUpIngreseDni = document.querySelector("#popUpIngreseDni")

const tablaProductosIngresados = document.querySelector("#tablaProductosIngresados")

// Eventos

btnNuevaVenta.addEventListener("click",mostrarVentanaNuevaVenta)
btnProductos.addEventListener("click",mostrarVentanaProductos)
btnBorrarProd.addEventListener("click",limpiarImputsNuevaVenta)
btnConfirmarVenta.addEventListener("click",confirmarVenta)

btnContinuarVendiendoCo.addEventListener("click",cerrarPopUpCo)
btnContinuarVendiendoCa.addEventListener("click",cerrarPopUpCa)
btnContinuarVendiendoDn.addEventListener("click",cerrarPopUpDn)

inputCodigoProducto.addEventListener("keydown",(e) => {

    if(e.keyCode === 13) {

        const codigoProd = inputCodigoProducto.value
        
        if(codigoProd === ``) {

            popUpIngreseUnCodigo.style.display = 'flex'
            inputCodigoProducto.onfocus()

        } else if(codigoProd === `${prod1.codigo}`) {

            inputDescripcion.innerText = `${prod1.descripcion}`
            inputPrecio.innerText = `${prod1.precio}`
            inputStockDisp.innerText = `${prod1.stock}`

        } else if(codigoProd === `${prod2.codigo}`) {

            inputDescripcion.innerText = `${prod2.descripcion}`
            inputPrecio.innerText = `${prod2.precio}`
            inputStockDisp.innerText = `${prod2.stock}`

        } else if(codigoProd === `${prod3.codigo}`) {

            inputDescripcion.innerText = `${prod3.descripcion}`
            inputPrecio.innerText = `${prod3.precio}`
            inputStockDisp.innerText = `${prod3.stock}`

        } else if(codigoProd === `${prod4.codigo}`) {

            inputDescripcion.innerText = `${prod4.descripcion}`
            inputPrecio.innerText = `${prod4.precio}`
            inputStockDisp.innerText = `${prod4.stock}`

        } else if(codigoProd === `${prod5.codigo}`) {

            inputDescripcion.innerText = `${prod5.descripcion}`
            inputPrecio.innerText = `${prod5.precio}`
            inputStockDisp.innerText = `${prod5.stock}`

        }

        inputCantidad.focus()   

    }

})

inputDni.addEventListener("keydown",(e) => {

    if(e.keyCode === 13) {

        const dni = inputDni.value
        
        if(inputDni.value === ``) {

            popUpIngreseDni.style.display = 'flex'

        } else if(dni === `${dniClientes[0]}`) {

            inputNombre.innerText = `${nombreClientes[0]}`

        } 

    }

})

inputCantidad.addEventListener("keydown",(e) => {

    const cant = inputCantidad.value
    
    if(e.keyCode === 13) {

        if(cant === ``) {

            popUpIngreseCantidad.style.display = 'flex' 
    
        } else {
            let div = document.createElement("div")

            div.className = "bodyIndex__ventanas__nuevaVenta__divTabla__tabla__productoIngresado"

            div.innerHTML = `<div class="bodyIndex__ventanas__nuevaVenta__divTabla__tabla__productoIngresado__bor">${inputCodigoProducto.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTabla__tabla__productoIngresado__bor">${inputDescripcion.innerText}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTabla__tabla__productoIngresado__bor">${inputCantidad.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTabla__tabla__productoIngresado__bor">${inputPrecio.innerText}</div> <div>${inputPrecio.innerText * inputCantidad.value}</div>`

            tablaProductosIngresados.appendChild(div)

            limpiarImputsNuevaVenta()
            inputCodigoProducto.focus()

        }

    }

})

// Funciones

function mostrarVentanaProductos() {
    
    document.querySelector("#ventanaNuevaVenta").style.display = 'none';

    document.querySelector("#ventanaProductos").style.display = 'grid';

    document.querySelector("#ventanaPago").style.display = 'none';

}

function mostrarVentanaNuevaVenta() {
    
    document.querySelector("#ventanaNuevaVenta").style.display = 'block';

    document.querySelector("#ventanaProductos").style.display = 'none';

    document.querySelector("#ventanaPago").style.display = 'block';

    inputCodigoProducto.focus()
    selectCantCuotas.setAttribute('disabled', 'true')

}

function limpiarImputsNuevaVenta() {
    inputCodigoProducto.value = ""
    inputDescripcion.innerText = ""
    inputCantidad.value = ""
    inputPrecio.innerText = ""
    inputStockDisp.innerText = ""
}

function confirmarVenta() {
    popUpConfirmacionVenta.style.display = 'flex'
}

function cerrarPopUpCo() {
    popUpIngreseUnCodigo.style.display = 'none'
    mostrarVentanaNuevaVenta()
}

function cerrarPopUpCa() {
    popUpIngreseCantidad.style.display = 'none'
    inputCantidad.focus()
}

function cerrarPopUpDn() {
    popUpIngreseDni.style.display = 'none'
    inputDni.focus()
}

// Llamada a las funciones

mostrarVentanaNuevaVenta()

