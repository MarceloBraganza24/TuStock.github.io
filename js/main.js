
// variables

//botones
const btnNuevaVenta = document.querySelector("#btnNuevaVenta")

const btnProductos = document.querySelector("#btnProductos")

const btnBorrarProd = document.querySelector("#btnBorrarProd")

const btnConfirmarVenta = document.querySelector("#btnConfirmarVenta")

const btnContinuarVendiendoCo = document.querySelector("#btnContinuarVendiendoCo")
const btnContinuarVendiendoCa = document.querySelector("#btnContinuarVendiendoCa")
const btnContinuarVendiendoDn = document.querySelector("#btnContinuarVendiendoDn")
const btnContinuarVendiendoCV = document.querySelector("#btnContinuarVendiendoCV")

//inputs
const inputCodigoProducto = document.querySelector("#inputCodigoProducto")
const inputDescripcion = document.querySelector("#inputDescripcion")
const inputCantidad = document.querySelector("#inputCantidad")
const inputPrecio = document.querySelector("#inputPrecio")
const inputStockDisp = document.querySelector("#inputStockDisp")
const inputDni = document.querySelector("#inputDni")
const inputNombre = document.querySelector("#inputNombre")
const inputBuscadorProductosNuevaVenta = document.querySelector("#inputBuscadorProductosNuevaVenta")

//selects
let selectCantCuotas = document.querySelector("#selectCantCuotas")

//popUps
const popUpConfirmacionVenta = document.querySelector("#popUpConfirmacionVenta")
const popUpIngreseUnCodigo = document.querySelector("#popUpIngreseUnCodigo")
const popUpIngreseCantidad = document.querySelector("#popUpIngreseCantidad")
const popUpIngreseDni = document.querySelector("#popUpIngreseDni")

//tabla
const tablaProductosIngresados = document.querySelector("#tablaProductosIngresados")

// Arrays

const listaProductosIngresadosNuevaVenta = []

const listaProductos = []

const listaVentas = []

const descripcionProducto = ["Vizzio","Aceite","Sal","Arroz","Café","Vino Blanco","Fideos","Harina","Mayonesa","Mermelada","Vinagre","Pañales","Vino Tinto"]

const productos = [
    { codigo: 12, descripcion: "Vino Tinto", precio: 3250, stock: 15, proveedor: "Dist. chile" },
    { codigo: 1, descripcion: "Aceite", precio: 450, stock: 2, proveedor: "Tregar" },
    { codigo: 2, descripcion: "Arroz", precio: 300, stock: 5, proveedor: "Sancor" },
    { codigo: 3, descripcion: "Café", precio: 500, stock: 4, proveedor: "El colo" },
    { codigo: 10, descripcion: "Sal", precio: 740, stock: 5, proveedor: "Sancor" },
    { codigo: 4, descripcion: "Fideos", precio: 400, stock: 15, proveedor: "Dist. chile" },
    { codigo: 5, descripcion: "Harina", precio: 300, stock: 2, proveedor: "Tregar" },
    { codigo: 6, descripcion: "Mayonesa", precio: 560, stock: 5, proveedor: "Sancor" },
    { codigo: 7, descripcion: "Mermelada", precio: 750, stock: 4, proveedor: "El colo" },
    { codigo: 8, descripcion: "Vinagre", precio: 900, stock: 15, proveedor: "Dist. chile" },
    { codigo: 9, descripcion: "Pañales", precio: 2500, stock: 2, proveedor: "Tregar" },
    { codigo: 11, descripcion: "Vino Blanco", precio: 3200, stock: 4, proveedor: "El colo" },
    { codigo: 13, descripcion: "Vizzio", precio: 600, stock: 9, proveedor: "El bordo" }
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

// Eventos

btnNuevaVenta.addEventListener("click",mostrarVentanaNuevaVenta)
btnProductos.addEventListener("click",mostrarVentanaProductos)
btnBorrarProd.addEventListener("click",limpiarImputsNuevaVenta)
btnConfirmarVenta.addEventListener("click",confirmarVenta)

btnContinuarVendiendoCo.addEventListener("click",cerrarPopUpCo)
btnContinuarVendiendoCa.addEventListener("click",cerrarPopUpCa)
btnContinuarVendiendoDn.addEventListener("click",cerrarPopUpDn)
btnContinuarVendiendoCV.addEventListener("click",cerrarPopUpConfVenta)

inputCodigoProducto.addEventListener("keydown",setearProductoNuevaVenta)

inputCantidad.addEventListener("keydown",setearProductoListaNuevaVenta)

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

    if (inputDni.value === '') {
        popUpIngreseDni.style.display = 'flex'
    } else {
        popUpConfirmacionVenta.style.display = 'flex'
    }

}

function cerrarPopUpConfVenta() {
    popUpConfirmacionVenta.style.display = 'none'
    mostrarVentanaNuevaVenta()
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
        
            } else if (inputCodigoProducto.value == producto.codigo) {
                inputDescripcion.innerHTML = `<div>${producto.descripcion}</div>`
                inputPrecio.innerHTML = `<div>${producto.precio}</div>`
                inputStockDisp.innerHTML = `<div>${producto.stock}</div>`
                inputCantidad.focus()
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
    
        }  else {
            let div = document.createElement("div")

            div.className = "bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado"

            div.innerHTML = `<div id="codProdIngresado" class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputCodigoProducto.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputDescripcion.innerText}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputCantidad.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputPrecio.innerText}</div> <div>${inputPrecio.innerText * inputCantidad.value}</div>`

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

// Llamada a las funciones

mostrarVentanaNuevaVenta()

mostrarListaProductos()




// Pruebas






// Fin pruebas