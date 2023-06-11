
// variables

//saldo
const saldoTotal = document.querySelector("#saldoTotal")

//botones
const btnNuevaVenta = document.querySelector("#btnNuevaVenta")

const btnProductos = document.querySelector("#btnProductos")

const btnBorrarProd = document.querySelector("#btnBorrarProd")

const btnConfirmarVenta = document.querySelector("#btnConfirmarVenta")

const btnContinuarVendiendoCo = document.querySelector("#btnContinuarVendiendoCo")
const btnContinuarVendiendoCod = document.querySelector("#btnContinuarVendiendoCod")
const btnContinuarVendiendoCa = document.querySelector("#btnContinuarVendiendoCa")
const btnContinuarVendiendoDn = document.querySelector("#btnContinuarVendiendoDn")
const btnContinuarVendiendoCV = document.querySelector("#btnContinuarVendiendoCV")
const btnPopUpAlerts = document.querySelector(".popUpAlerts__btn")

//inputs
const inputCodigoProducto = document.querySelector("#inputCodigoProducto")
const inputDescripcion = document.querySelector("#inputDescripcion")
const inputCantidad = document.querySelector("#inputCantidad")
const inputPrecio = document.querySelector("#inputPrecio")
const inputStockDisp = document.querySelector("#inputStockDisp")
const inputDni = document.querySelector("#inputDni")
const inputNombre = document.querySelector("#inputNombre")
const inputBuscadorProductosNuevaVenta = document.querySelector("#inputBuscadorProductosNuevaVenta")
const inputBuscarProductosVP = document.querySelector("#inputBuscarProductosVP")
const inputCerrarPopUpCod = document.querySelector("#inputCerrarPopUpCod")
const inputCerrarPopUpCodRep = document.querySelector("#inputCerrarPopUpCodRep")
const inputCerrarPopUpCant = document.querySelector("#inputCerrarPopUpCant")
const inputCerrarPopUpDni = document.querySelector("#inputCerrarPopUpDni")
const inputCerrarPopUpCV = document.querySelector("#inputCerrarPopUpCV")

//selects
let selectCantCuotas = document.querySelector("#selectCantCuotas")
let selectTipoPago = document.querySelector("#selectTipoPago")

//popUps
const popUpConfirmacionVenta = document.querySelector("#popUpConfirmacionVenta")
const popUpIngreseUnCodigo = document.querySelector("#popUpIngreseUnCodigo")
const popUpIngreseCantidad = document.querySelector("#popUpIngreseCantidad")
const popUpIngreseDni = document.querySelector("#popUpIngreseDni")
const popUpCodigoRepetido = document.querySelector("#popUpCodigoRepetido")

//tabla
const tablaProductosIngresados = document.querySelector("#tablaProductosIngresados")

// Arrays

const listaProductosIngresadosNuevaVenta = []

const listaProductos = []

const listaVentas = []

const saldostotales = []

const productos = [
    { codigo: 12, descripcion: "vino tinto", precio: 3250, stock: 15, proveedor: "Dist. chile" },
    { codigo: 1, descripcion: "aceite", precio: 450, stock: 2, proveedor: "Tregar" },
    { codigo: 2, descripcion: "arroz", precio: 300, stock: 5, proveedor: "Sancor" },
    { codigo: 3, descripcion: "café", precio: 500, stock: 4, proveedor: "El colo" },
    { codigo: 10, descripcion: "sal", precio: 740, stock: 5, proveedor: "Sancor" },
    { codigo: 4, descripcion: "fideos", precio: 400, stock: 15, proveedor: "Dist. chile" },
    { codigo: 5, descripcion: "harina", precio: 300, stock: 2, proveedor: "Tregar" },
    { codigo: 6, descripcion: "mayonesa", precio: 560, stock: 5, proveedor: "Sancor" },
    { codigo: 7, descripcion: "mermelada", precio: 750, stock: 4, proveedor: "El colo" },
    { codigo: 8, descripcion: "vinagre", precio: 900, stock: 15, proveedor: "Dist. chile" },
    { codigo: 9, descripcion: "pañales", precio: 2500, stock: 2, proveedor: "Tregar" },
    { codigo: 11, descripcion: "vino blanco", precio: 3200, stock: 4, proveedor: "El colo" },
    { codigo: 13, descripcion: "vizzio", precio: 600, stock: 9, proveedor: "El bordo" }
]

const clientes = [
    {nombre: "Marcelo Braganza", dni: 38917705, telefono: 2926450496},
    {nombre: "Osvaldo Braganza", dni: 17935299, telefono: 2926452737},
    {nombre: "Mariela Piro", dni: 21296752, telefono: 2926450156},
]


// Objetos

function Producto (codigo,descripcion,precio,stock,proveedor) {
    this.codigo = codigo; 
    this.descripcion = descripcion; 
    this.precio = precio; 
    this.stock = stock; 
    this.proveedor = proveedor; 
}

function ProductoIngresado (codigo,descripcion,cantidad,precio,total) {
    this.codigo = codigo; 
    this.descripcion = descripcion; 
    this.cantidad = cantidad; 
    this.precio = precio; 
    this.total = total; 
}

// Eventos

btnNuevaVenta.addEventListener("click",mostrarVentanaNuevaVenta)
btnProductos.addEventListener("click",mostrarVentanaProductos)
btnBorrarProd.addEventListener("click",limpiarImputsNuevaVenta)
btnConfirmarVenta.addEventListener("click",confirmarVenta)

btnContinuarVendiendoCo.addEventListener("click",cerrarPopUpCo)
btnContinuarVendiendoCod.addEventListener("click",cerrarPopUpCodRep)
btnContinuarVendiendoCa.addEventListener("click",cerrarPopUpCa)
btnContinuarVendiendoDn.addEventListener("click",cerrarPopUpDn)
btnContinuarVendiendoCV.addEventListener("click",cerrarPopUpConfVenta)

inputCodigoProducto.addEventListener("keydown",setearProductoNuevaVenta)
inputCantidad.addEventListener("keydown",setearProductoListaNuevaVenta)
inputDni.addEventListener("keydown",setearNombreCliente)
inputCerrarPopUpCod.addEventListener("keydown",cerrarPopUpCo)
inputCerrarPopUpCodRep.addEventListener("keydown",cerrarPopUpCodRep)
inputCerrarPopUpCant.addEventListener("keydown",cerrarPopUpCa)
inputCerrarPopUpDni.addEventListener("keydown",cerrarPopUpDn)
inputCerrarPopUpCV.addEventListener("keydown",cerrarPopUpConfVenta)

selectTipoPago.addEventListener("change",habilitarSelectCuotas)
    
// Funciones

function mostrarVentanaNuevaVenta() {
    
    document.querySelector("#ventanaNuevaVenta").style.display = 'block';

    document.querySelector("#ventanaProductos").style.display = 'none';

    document.querySelector("#ventanaPago").style.display = 'block';

    inputCodigoProducto.focus()
    selectCantCuotas.setAttribute('disabled', 'true')

}

function mostrarVentanaProductos() {
    
    document.querySelector("#ventanaNuevaVenta").style.display = 'none';

    document.querySelector("#ventanaProductos").style.display = 'grid';

    document.querySelector("#ventanaPago").style.display = 'none';

}

function limpiarImputsNuevaVenta() {
    inputCodigoProducto.value = ""
    inputDescripcion.innerText = ""
    inputCantidad.value = ""
    inputPrecio.innerText = ""
    inputStockDisp.innerText = ""
    inputDni.value = ""
    inputNombre.innerText = ""
    selectTipoPago.value = "tipo de pago"
}

function limpiarTablaProdIngresados() {

    listaProductosIngresadosNuevaVenta = []

}

function confirmarVenta() {

    if (inputDni.value === '') {
        popUpIngreseDni.style.display = 'flex'
        inputCerrarPopUpDni.style.display = 'flex'
        inputCerrarPopUpDni.focus()
    } else {
        popUpConfirmacionVenta.style.display = 'flex'
        inputCerrarPopUpCV.style.display = 'flex'
        inputCerrarPopUpCV.focus()
        limpiarImputsNuevaVenta()
    }

}

function cerrarPopUpCo() {
    popUpIngreseUnCodigo.style.display = 'none'
    mostrarVentanaNuevaVenta()
}

function cerrarPopUpCodRep() {
    popUpCodigoRepetido.style.display = 'none'
    inputCodigoProducto.focus()
}

function cerrarPopUpCa() {
    popUpIngreseCantidad.style.display = 'none'
    inputCantidad.focus()
}

function cerrarPopUpDn() {
    popUpIngreseDni.style.display = 'none'
    inputDni.focus()
}

function cerrarPopUpConfVenta() {
    popUpConfirmacionVenta.style.display = 'none'
    mostrarVentanaNuevaVenta()
}

function mostrarListaProductos() {

    for (producto of productos) {

        let div = document.createElement("div")
        div.className = "bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto"
        div.innerHTML = 
        `
        <div class="bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto__bor">${producto.codigo}</div>
        <div class="bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto__bor">${producto.descripcion}</div>
        <div class="bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto__bor">${producto.precio}</div>
        <div class="bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto__bor">${producto.stock}</div>
        <div>${producto.proveedor}</div>
        `;
        tablaListaProductos.appendChild(div)

    }

}

function setearProductoNuevaVenta(e) {

    if(e.keyCode === 13) {

        for (producto of productos) {
    
            if(inputCodigoProducto.value === ``) {
    
                popUpIngreseUnCodigo.style.display = 'flex'
                inputCerrarPopUpCod.style.display = 'flex'
                inputCerrarPopUpCod.focus()
        
            }  else if (inputCodigoProducto.value == producto.codigo) {
                inputDescripcion.innerHTML = `<div>${producto.descripcion}</div>`
                inputPrecio.innerHTML = `<div>${producto.precio}</div>`
                inputStockDisp.innerHTML = `<div>${producto.stock}</div>`
                inputCantidad.focus()
            }
    
        }

        for (producto of listaProductosIngresadosNuevaVenta) {

            if (inputCodigoProducto.value == producto.codigo) {
                popUpCodigoRepetido.style.display = 'flex'
                inputCerrarPopUpCodRep.style.display = 'flex'
                inputCerrarPopUpCodRep.focus()
                limpiarImputsNuevaVenta()
            }

        }
    
    }

}

function setearProductoListaNuevaVenta(e) {

    const cant = inputCantidad.value
    const codigo = inputCodigoProducto.value
    
    if(e.keyCode === 13) {

        if(cant === ``) {

            popUpIngreseCantidad.style.display = 'flex' 
            inputCerrarPopUpCant.style.display = 'flex'
            inputCerrarPopUpCant.focus()
    
        }  else {

            const prod = new ProductoIngresado (inputCodigoProducto.value,inputDescripcion.innerText,inputCantidad.value,inputPrecio.innerText,inputPrecio.innerText * inputCantidad.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidad.value * inputPrecio.innerText)
            mostrarSaldo()
           
            //setear en LocalStorage
            const productoIngresado = {codigo: `${inputCodigoProducto.value}`, descripcion: `${inputDescripcion.innerText}`,cantidad: `${inputCantidad.value}`, precio: `${inputPrecio.innerText}`, total: `${inputCantidad.value * inputPrecio.innerText}`}            
            localStorage.setItem("Tabla de Productos",JSON.stringify(productoIngresado))
            
            let div = document.createElement("div")

            div.className = "bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado"

            div.innerHTML = `<div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputCodigoProducto.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputDescripcion.innerText}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputCantidad.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputPrecio.innerText}</div> <div>${inputCantidad.value * inputPrecio.innerText}</div>`

            tablaProductosIngresados.appendChild(div)
            
            limpiarImputsNuevaVenta()
            inputCodigoProducto.focus()
            

            for (producto of productos) {
                if(codigo == producto.codigo) {
                    producto.stock = producto.stock - cant
                }
            }
                        
        }

    }

}

function ocultarListaProductosVP () {
    tablaListaProductos.style.display = "none"
}

function setearNombreCliente(e) {

    if(e.keyCode === 13) {

        for (cliente of clientes) {

            if (inputDni.value === '') {
                popUpIngreseDni.style.display = 'flex'
                inputCerrarPopUpDni.style.display = 'flex'
                inputCerrarPopUpDni.focus()
            } else if (inputDni.value == cliente.dni) {
                inputNombre.innerText = `${cliente.nombre}`
            }

        }

    }

}

function habilitarSelectCuotas() {

    const pago = selectTipoPago.value
    
    if (pago === 'tipo de pago') {
        selectCantCuotas.setAttribute('disabled', 'true')
    } else if (pago === 'efectivo') {
        selectCantCuotas.setAttribute('disabled', 'true')
    } else if (pago === 'tarjeta de debito') {
        selectCantCuotas.setAttribute('disabled', 'true')
    } else if (pago === 'tarjeta de credito') {
        selectCantCuotas.removeAttribute('disabled', 'true')
    }

}

function mostrarSaldo() {

    saldoTotal.innerText = saldostotales.reduce((acum, elemento) => acum + elemento,0)
    
}

// Llamada a las funciones

mostrarVentanaNuevaVenta()

mostrarSaldo()

mostrarListaProductos()

// Pruebas




// Fin pruebas