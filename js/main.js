
document.querySelector("#divChocoVizzio290g").style.display = "none"
document.querySelector("#divChocoBlock1kg").style.display = "none"
document.querySelector("#divSprite1250ml").style.display = "none"
document.querySelector("#divSprite2250ml").style.display = "none"
document.querySelector("#divSprite3l").style.display = "none"
document.querySelector("#divSalFina").style.display = "none"
document.querySelector("#divAguaMineral1500ml").style.display = "none"
document.querySelector("#divAguaMineral2l").style.display = "none"
document.querySelector("#divAguaConGas1l").style.display = "none"
document.querySelector("#divAguaConGas2l").style.display = "none"
document.querySelector("#divSampooPantene").style.display = "none"
document.querySelector("#divCotonetesX200").style.display = "none"

document.querySelector("#prod1").style.display = "none"

//botones de ventanas

const btnNuevaVenta = document.querySelector("#btnNuevaVenta")

const btnProductos = document.querySelector("#btnProductos")

const btnClientes = document.querySelector("#btnClientes")

const btnProveedores = document.querySelector("#btnProveedores")

const btnVentas = document.querySelector("#btnVentas")

const btnAcercaDe = document.querySelector("#btnAcercaDe")

btnNuevaVenta.addEventListener("click",mostrarVentanaNuevaVenta)
btnProductos.addEventListener("click",mostrarVentanaProductos)
btnClientes.addEventListener("click",mostrarVentanaClientes)
btnProveedores.addEventListener("click",mostrarVentanaProvedores)
btnVentas.addEventListener("click",mostrarVentanaVentas)
btnAcercaDe.addEventListener("click",mostrarVentanaAcercaDe)

// ventana nueva venta

const inputBuscarProductoNV = document.querySelector("#inputBuscarProductoNV")
const ulBuscadorProductoNV = document.querySelector("#ulBuscadorProductoNV")

const liNVChocolateVizzio290g = document.querySelector("#liNVChocolateVizzio290g")
const liNVChocolateBlock1kg = document.querySelector("#liNVChocolateBlock1kg")
const liNVGaseosaSprite125l = document.querySelector("#liNVGaseosaSprite125l")
const liNVGaseosaSprite225l = document.querySelector("#liNVGaseosaSprite225l")
const liNVGaseosaSprite3l = document.querySelector("#liNVGaseosaSprite3l")
const liNVSalFina = document.querySelector("#liNVSalFina")
const liNVAguaMineral15l = document.querySelector("#liNVAguaMineral15l")
const liNVAguaMineral2l = document.querySelector("#liNVAguaMineral2l")
const liNVAguaConGas1l = document.querySelector("#liNVAguaConGas1l")
const liNVAguaConGas2l = document.querySelector("#liNVAguaConGas2l")
const liNVSampooPantene = document.querySelector("#liNVSampooPantene")
const liNVCotonetesX200 = document.querySelector("#liNVCotonetesX200")

const inputCodigoProductoNV = document.querySelector("#inputCodigoProductoNV")
const inputCantidadNV = document.querySelector("#inputCantidadNV")
const inputPrecioNV = document.querySelector("#inputPrecioNV")
const inputStockDispNV = document.querySelector("#inputStockDispNV")
const inputDniNV = document.querySelector("#inputDniNV")
const inputNombreNV = document.querySelector("#inputNombreNV")

const tablaProductosIngresados = document.querySelector("#tablaProductosIngresados")
const divChocoVizzio290g = document.querySelector("#divChocoVizzio290g")
const divChocoBlock1kg = document.querySelector("#divChocoBlock1kg")
const divSprite1250ml = document.querySelector("#divSprite1250ml")
const divSprite2250ml = document.querySelector("#divSprite2250ml")
const divSprite3l = document.querySelector("#divSprite3l")
const divSalFina = document.querySelector("#divSalFina")
const divAguaMineral1500ml = document.querySelector("#divAguaMineral1500ml")
const divAguaMineral2l = document.querySelector("#divAguaMineral2l")
const divAguaConGas1l = document.querySelector("#divAguaConGas1l")
const divAguaConGas2l = document.querySelector("#divAguaConGas2l")
const divSampooPantene = document.querySelector("#divSampooPantene")
const divCotonetesX200 = document.querySelector("#divCotonetesX200")

const selectCantCuotasNV = document.querySelector("#selectCantCuotasNV")
const selectTipoPagoNV = document.querySelector("#selectTipoPagoNV")

const saldoTotalNV = document.querySelector("#saldoTotalNV")

const btnBorrarProdNV = document.querySelector("#btnBorrarProdNV")
const btnConfirmarVentaNV = document.querySelector("#btnConfirmarVentaNV")

btnBorrarProdNV.addEventListener("click",borrarProdIngresado)
btnConfirmarVentaNV.addEventListener("click",confirmarVenta)

inputBuscarProductoNV.addEventListener("input",mostrarUlBuscador)

inputCodigoProductoNV.addEventListener("keydown",setearProductoNuevaVenta)
inputCantidadNV.addEventListener("keydown",setearProductoListaNuevaVenta)
inputDniNV.addEventListener("keydown",setearNombreCliente)

selectTipoPagoNV.addEventListener("change",habilitarSelectCuotas)

liNVChocolateVizzio290g.addEventListener("click",setearChocolateVizzio290g)
liNVChocolateBlock1kg.addEventListener("click",setearChocolateBlock1kg)
liNVGaseosaSprite125l.addEventListener("click",setearSprite125l)
liNVGaseosaSprite225l.addEventListener("click",setearSprite225l)
liNVGaseosaSprite3l.addEventListener("click",setearSprite3l)
liNVSalFina.addEventListener("click",setearSalFina)
liNVAguaMineral15l.addEventListener("click",setearAguaMineral15l)
liNVAguaMineral2l.addEventListener("click",setearAguaMineral2l)
liNVAguaConGas1l.addEventListener("click",setearAguaConGas1l)
liNVAguaConGas2l.addEventListener("click",setearAguaConGas2l)
liNVSampooPantene.addEventListener("click",setearSampooPantene)
liNVCotonetesX200.addEventListener("click",setearCotonetesX200)

divChocoVizzio290g.addEventListener("click",seleccChocoVizzio290g)
divChocoBlock1kg.addEventListener("click",seleccChocoBlock1kg)
divSprite1250ml.addEventListener("click",seleccSprite1250ml)
divSprite2250ml.addEventListener("click",seleccSprite2250ml)
divSprite3l.addEventListener("click",seleccSprite3l)
divSalFina.addEventListener("click",seleccSalFina)
divAguaMineral1500ml.addEventListener("click",seleccAguaMineral1500ml)
divAguaMineral2l.addEventListener("click",seleccAguaMineral2l)
divAguaConGas1l.addEventListener("click",seleccAguaConGas1l)
divAguaConGas2l.addEventListener("click",seleccAguaConGas2l)
divSampooPantene.addEventListener("click",seleccSampooPantene)
divCotonetesX200.addEventListener("click",seleccCotonetesX200)

// ventana productos

const inputBuscarProductoVP = document.querySelector("#inputBuscarProductoVP")
const ulBuscadorProductoVP = document.querySelector("#ulBuscadorProductoVP")

const liVPChocolateVizzio290g = document.querySelector("#liVPChocolateVizzio290g")
const liVPChocolateBlock1kg = document.querySelector("#liVPChocolateBlock1kg")
const liVPGaseosaSprite125l = document.querySelector("#liVPGaseosaSprite125l")
const liVPGaseosaSprite225l = document.querySelector("#liVPGaseosaSprite225l")
const liVPGaseosaSprite3l = document.querySelector("#liVPGaseosaSprite3l")
const liVPSalFina = document.querySelector("#liVPSalFina")
const liVPAguaMineral15l = document.querySelector("#liVPAguaMineral15l")
const liVPAguaMineral2l = document.querySelector("#liVPAguaMineral2l")
const liVPAguaConGas1l = document.querySelector("#liVPAguaConGas1l")
const liVPAguaConGas2l = document.querySelector("#liVPAguaConGas2l")
const liVPSampooPantene = document.querySelector("#liVPSampooPantene")
const liVPCotonetesX200 = document.querySelector("#liVPCotonetesX200")

const inputCodigoProductoVP = document.querySelector("#inputCodigoProductoVP")
const inputDescrProductoVP = document.querySelector("#inputDescrProductoVP")
const inputPrecioProductoVP = document.querySelector("#inputPrecioProductoVP")
const inputStockProductoVP = document.querySelector("#inputStockProductoVP")
const inputProvProductoVP = document.querySelector("#inputProvProductoVP")
const btnGuardarProducto = document.querySelector("#btnGuardarProducto")
const btnModificarProducto = document.querySelector("#btnModificarProducto")
const btnBorrarProducto = document.querySelector("#btnBorrarProducto")
const btnNuevoProducto = document.querySelector("#btnNuevoProducto")

inputBuscarProductoVP.addEventListener("input",mostrarUlBuscadorVP)

liVPChocolateVizzio290g.addEventListener("click",setearChocolateVizzio290gVP)
liVPChocolateBlock1kg.addEventListener("click",setearChocolateBlock1kgVP)
liVPGaseosaSprite125l.addEventListener("click",setearGaseosaSprite125lVP)
liVPGaseosaSprite225l.addEventListener("click",setearGaseosaSprite225lVP)
liVPGaseosaSprite3l.addEventListener("click",setearGaseosaSprite3lVP)
liVPSalFina.addEventListener("click",setearSalFinaVP)
liVPAguaMineral15l.addEventListener("click",setearAguaMineral15lVP)
liVPAguaMineral2l.addEventListener("click",setearAguaMineral2lVP)
liVPAguaConGas1l.addEventListener("click",setearAguaConGas1lVP)
liVPAguaConGas2l.addEventListener("click",setearAguaConGas2lVP)
liVPSampooPantene.addEventListener("click",setearSampooPanteneVP)
liVPCotonetesX200.addEventListener("click",setearCotonetesX200VP)

btnGuardarProducto.addEventListener("click",guardarProductoVP)
btnModificarProducto.addEventListener("click",modificarProductoVP)
btnBorrarProducto.addEventListener("click",borrarProductoVP)
btnNuevoProducto.addEventListener("click",nuevoProductoVP)

const prod1 = document.querySelector("#prod1")
prod1.addEventListener("click",seleccProd1)
const codigoProd1 = document.querySelector("#codigoProd1")
const descrProd1 = document.querySelector("#descrProd1")
const precioProd1 = document.querySelector("#precioProd1")
const stockProd1 = document.querySelector("#stockProd1")
const provProd1 = document.querySelector("#provProd1")

 
// popups

const popUpConfirmacionVenta = document.querySelector("#popUpConfirmacionVenta")
const popUpIngreseUnCodigo = document.querySelector("#popUpIngreseUnCodigo")
const popUpIngreseCantidad = document.querySelector("#popUpIngreseCantidad")
const popUpIngreseDni = document.querySelector("#popUpIngreseDni")
const popUpCodigoRepetido = document.querySelector("#popUpCodigoRepetido")
const popUpCompletarCamposVP = document.querySelector("#popUpCompletarCamposVP")

const inputCerrarPopUpCod = document.querySelector("#inputCerrarPopUpCod")
const inputCerrarPopUpCodRep = document.querySelector("#inputCerrarPopUpCodRep")
const inputCerrarPopUpCant = document.querySelector("#inputCerrarPopUpCant")
const inputCerrarPopUpDni = document.querySelector("#inputCerrarPopUpDni")
const inputCerrarPopUpCV = document.querySelector("#inputCerrarPopUpCV")
const inputCerrarPopUpCCVP = document.querySelector("#inputCerrarPopUpCCVP")

const btnContinuarVendiendoCo = document.querySelector("#btnContinuarVendiendoCo")
const btnContinuarVendiendoCod = document.querySelector("#btnContinuarVendiendoCod")
const btnContinuarVendiendoCa = document.querySelector("#btnContinuarVendiendoCa")
const btnContinuarVendiendoDn = document.querySelector("#btnContinuarVendiendoDn")
const btnContinuarVendiendoCV = document.querySelector("#btnContinuarVendiendoCV")
const btnCompletarCamposVP = document.querySelector("#btnCompletarCamposVP")


inputCerrarPopUpCod.addEventListener("keydown",cerrarPopUpCo)
inputCerrarPopUpCodRep.addEventListener("keydown",cerrarPopUpCodRep)
inputCerrarPopUpCant.addEventListener("keydown",cerrarPopUpCa)
inputCerrarPopUpDni.addEventListener("keydown",cerrarPopUpDn)
inputCerrarPopUpCV.addEventListener("keydown",cerrarPopUpConfVenta)
inputCerrarPopUpCCVP.addEventListener("keydown",cerrarPopUpCCVP)

btnContinuarVendiendoCo.addEventListener("click",cerrarPopUpCo)
btnContinuarVendiendoCod.addEventListener("click",cerrarPopUpCodRep)
btnContinuarVendiendoCa.addEventListener("click",cerrarPopUpCa)
btnContinuarVendiendoDn.addEventListener("click",cerrarPopUpDn)
btnContinuarVendiendoCV.addEventListener("click",cerrarPopUpConfVenta)
btnCompletarCamposVP.addEventListener("click",cerrarPopUpCCVP)

// Arrays

const listaProductosIngresadosNuevaVenta = []

const listaProductos = [

    /* {codigo:1,descripcion:"Chocolate Vizzio 290g",precio:400, stock: 15, proveedor: "Dist. chile"} */

]

const listaVentas = []

const saldostotales = []

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

// Funciones

// mostrar ventanas

function mostrarVentanaNuevaVenta() {
    
    document.querySelector("#ventanaNuevaVenta").style.display = 'block';

    document.querySelector("#ventanaPago").style.display = 'block';

    document.querySelector("#ventanaProductos").style.display = 'none';

    document.querySelector("#ventanaClientes").style.display = 'none';

    document.querySelector("#ventanaProveedores").style.display = 'none';

    document.querySelector("#ventanaVentas").style.display = 'none';

    document.querySelector("#ventanaAcercaDe").style.display = 'none';

    inputCodigoProductoNV.focus()
    selectCantCuotasNV.setAttribute('disabled', 'true')

}

function mostrarVentanaProductos() {

    document.querySelector("#ventanaProductos").style.display = 'grid';

    document.querySelector("#ventanaNuevaVenta").style.display = 'none';    

    document.querySelector("#ventanaPago").style.display = 'none';

    document.querySelector("#ventanaClientes").style.display = 'none';

    document.querySelector("#ventanaProveedores").style.display = 'none';

    document.querySelector("#ventanaVentas").style.display = 'none';

    document.querySelector("#ventanaAcercaDe").style.display = 'none';
}

function mostrarVentanaClientes() {

    document.querySelector("#ventanaClientes").style.display = 'grid';

    document.querySelector("#ventanaNuevaVenta").style.display = 'none';

    document.querySelector("#ventanaPago").style.display = 'none';    

    document.querySelector("#ventanaProductos").style.display = 'none';

    document.querySelector("#ventanaProveedores").style.display = 'none';

    document.querySelector("#ventanaVentas").style.display = 'none';

    document.querySelector("#ventanaAcercaDe").style.display = 'none';
}

function mostrarVentanaProvedores() {

    document.querySelector("#ventanaProveedores").style.display = 'grid';

    document.querySelector("#ventanaNuevaVenta").style.display = 'none';

    document.querySelector("#ventanaPago").style.display = 'none';

    document.querySelector("#ventanaProductos").style.display = 'none';

    document.querySelector("#ventanaClientes").style.display = 'none'; 
    
    document.querySelector("#ventanaVentas").style.display = 'none';

    document.querySelector("#ventanaAcercaDe").style.display = 'none';

}

function mostrarVentanaVentas() {

    document.querySelector("#ventanaVentas").style.display = 'grid';

    document.querySelector("#ventanaNuevaVenta").style.display = 'none';

    document.querySelector("#ventanaPago").style.display = 'none';

    document.querySelector("#ventanaClientes").style.display = 'none';

    document.querySelector("#ventanaProductos").style.display = 'none';

    document.querySelector("#ventanaProveedores").style.display = 'none';  
    
    document.querySelector("#ventanaAcercaDe").style.display = 'none';

}

function mostrarVentanaAcercaDe() {

    document.querySelector("#ventanaAcercaDe").style.display = 'flex';

    document.querySelector("#ventanaNuevaVenta").style.display = 'none';

    document.querySelector("#ventanaPago").style.display = 'none';

    document.querySelector("#ventanaProductos").style.display = 'none';

    document.querySelector("#ventanaClientes").style.display = 'none';

    document.querySelector("#ventanaProveedores").style.display = 'none'; 

    document.querySelector("#ventanaVentas").style.display = 'none'; 
    
}

// popUps

function cerrarPopUpCo() {
    popUpIngreseUnCodigo.style.display = 'none'
    mostrarVentanaNuevaVenta()
}

function cerrarPopUpCodRep() {
    popUpCodigoRepetido.style.display = 'none'
    inputCodigoProductoNV.focus()
}

function cerrarPopUpCa() {
    popUpIngreseCantidad.style.display = 'none'
    inputCantidadNV.focus()
}

function cerrarPopUpDn() {
    popUpIngreseDni.style.display = 'none'
    inputDniNV.focus()
}

function cerrarPopUpConfVenta() {
    popUpConfirmacionVenta.style.display = 'none'
    mostrarVentanaNuevaVenta()
}

function cerrarPopUpCCVP() {
    popUpCompletarCamposVP.style.display = 'none'
    inputCodigoProductoVP.focus()
}

// nueva venta

function setearProductoNuevaVenta(e) {

    if(e.keyCode === 13) {

        fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if(inputCodigoProductoNV.value === ``) {
    
                popUpIngreseUnCodigo.style.display = 'flex'
                inputCerrarPopUpCod.style.display = 'flex'
                inputCerrarPopUpCod.focus()
        
            }  else if (inputCodigoProductoNV.value == producto.codigo) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputPrecioNV.innerHTML = `<div>${producto.precio}</div>`
                inputStockDispNV.innerHTML = `<div>${producto.stock}</div>`
                inputCantidadNV.focus()
            }
            

        })

        })

    }

}

function setearProductoListaNuevaVenta(e) {

    if(e.keyCode === 13) {

        if(inputCantidadNV.value === ``) {

            popUpIngreseCantidad.style.display = 'flex' 
            inputCerrarPopUpCant.style.display = 'flex'
            inputCerrarPopUpCant.focus()
    
        } else if (inputCodigoProductoNV.value == codigoChocoVizzio290g.textContent) {
            document.querySelector("#divChocoVizzio290g").style.display = "grid"
            document.querySelector("#cantChocoVizzio290g").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalChocoVizzio290g").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()

        } else if (inputCodigoProductoNV.value == codigoChocoBlock1kg.textContent) {
            document.querySelector("#divChocoBlock1kg").style.display = "grid"
            document.querySelector("#cantChocoBlock1kg").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalChocoBlock1kg").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } else if (inputCodigoProductoNV.value == codigoSprite1250ml.textContent) {
            document.querySelector("#divSprite1250ml").style.display = "grid"
            document.querySelector("#cantSprite1250ml").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalSprite1250ml").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } else if (inputCodigoProductoNV.value == codigoSprite2250ml.textContent) {
            document.querySelector("#divSprite2250ml").style.display = "grid"
            document.querySelector("#cantSprite2250ml").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalSprite2250ml").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } else if (inputCodigoProductoNV.value == codigoSprite3l.textContent) {
            document.querySelector("#divSprite3l").style.display = "grid"
            document.querySelector("#cantSprite3l").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalSprite3l").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } else if (inputCodigoProductoNV.value == codigoSalFina.textContent) {
            document.querySelector("#divSalFina").style.display = "grid"
            document.querySelector("#cantSalFina").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalSalFina").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } else if (inputCodigoProductoNV.value == codigoAguaMineral1500ml.textContent) {
            document.querySelector("#divAguaMineral1500ml").style.display = "grid"
            document.querySelector("#cantAguaMineral1500ml").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalAguaMineral1500ml").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } else if (inputCodigoProductoNV.value == codigoAguaMineral2l.textContent) {
            document.querySelector("#divAguaMineral2l").style.display = "grid"
            document.querySelector("#cantAguaMineral2l").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalAguaMineral2l").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } else if (inputCodigoProductoNV.value == codigoAguaConGas1l.textContent) {
            document.querySelector("#divAguaConGas1l").style.display = "grid"
            document.querySelector("#cantAguaConGas1l").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalAguaConGas1l").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } else if (inputCodigoProductoNV.value == codigoAguaConGas2l.textContent) {
            document.querySelector("#divAguaConGas2l").style.display = "grid"
            document.querySelector("#cantAguaConGas2l").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalAguaConGas2l").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } else if (inputCodigoProductoNV.value == codigoSampooPantene.textContent) {
            document.querySelector("#divSampooPantene").style.display = "grid"
            document.querySelector("#cantSampooPantene").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalSampooPantene").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } else if (inputCodigoProductoNV.value == codigoCotonetesX200.textContent) {
            document.querySelector("#divCotonetesX200").style.display = "grid"
            document.querySelector("#cantCotonetesX200").textContent = `${inputCantidadNV.value}`
            document.querySelector("#totalCotonetesX200").textContent = `${inputCantidadNV.value * inputPrecioNV.innerText}`

            
            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
        } 
        
        for (producto of listaProductosIngresadosNuevaVenta) {

            if (inputCodigoProductoNV.value == producto.codigo) {
                popUpCodigoRepetido.style.display = 'flex'
                inputCerrarPopUpCodRep.style.display = 'flex'
                inputCerrarPopUpCodRep.focus()
            }

        }       

    }
    

    /* if(e.keyCode === 13) {

        if(inputCantidadNV.value === ``) {

            popUpIngreseCantidad.style.display = 'flex' 
            inputCerrarPopUpCant.style.display = 'flex'
            inputCerrarPopUpCant.focus()
    
        } else {

            fetch('./productos.json')
            .then( (res) => res.json())
            .then( (data) => { data.forEach((producto) => {   

                const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputIngreseProducto.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
                listaProductosIngresadosNuevaVenta.push(prod)            
    
                saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
                mostrarSaldo()
                
                let div = document.createElement("div")

                div.className = "bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado"

                div.innerHTML = `<div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputCodigoProductoNV.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputIngreseProducto.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputCantidadNV.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputPrecioNV.innerText}</div> <div>${inputCantidadNV.value * inputPrecioNV.innerText}</div>`

                tablaProductosIngresados.appendChild(div)

                limpiarImputsNuevaVenta()
                inputCodigoProductoNV.focus()
                popUpIngreseCantidad.style.display = 'none'
    
                if(inputCodigoProductoNV == producto.codigo) {
    
                    producto.stock = producto.stock - cant
    
                }
    
                })
    
    
            })

        }

        

    } */
    








    
    /* if(e.keyCode === 13) {

        if(inputCantidadNV.value === ``) {

            popUpIngreseCantidad.style.display = 'flex' 
            inputCerrarPopUpCant.style.display = 'flex'
            inputCerrarPopUpCant.focus()
    
        }  else {

            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            saldostotales.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldo()
           
            //setear en LocalStorage
            const productoIngresado = {codigo: `${inputCodigoProductoNV.value}`, descripcion: `${inputBuscarProductoNV.value}`,cantidad: `${inputCantidadNV.value}`, precio: `${inputPrecioNV.innerText}`, total: `${inputCantidadNV.value * inputPrecioNV.innerText}`}            
            localStorage.setItem("Tabla de Productos",JSON.stringify(productoIngresado))
            
            let div = document.createElement("div")

            div.className = "bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado"

            div.innerHTML = `<div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputCodigoProductoNV.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputBuscarProductoNV.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputCantidadNV.value}</div> <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${inputPrecioNV.innerText}</div> <div>${inputCantidadNV.value * inputPrecioNV.innerText}</div>`

            tablaProductosIngresados.appendChild(div)
            
            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()
            

            for (producto of productos) {
                if(codigo == producto.codigo) {
                    producto.stock = producto.stock - cant
                }
            }
                        
        }

    } */

}

function mostrarTablaProductosIngresados() {

    for (prodIngresado of listaProductosIngresadosNuevaVenta) {

        let div = document.createElement("div")

        div.className = "bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado"

        div.innerHTML = 
        `
        <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${prodIngresado.codigo}</div>
        <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${prodIngresado.descripcion}</div>
        <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${prodIngresado.cantidad}</div>
        <div class="bodyIndex__ventanas__nuevaVenta__divTablaNuevaVenta__tabla__productoIngresado__bor">${prodIngresado.precio}</div>
        <div>${prodIngresado.total}</div>
        `;

        tablaProductosIngresados.appendChild(div)

    }

}

function borrarProdIngresado() {

    if (inputCodigoProductoNV.value == codigoChocoVizzio290g.textContent) {
        document.querySelector("#divChocoVizzio290g").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoChocoBlock1kg.textContent) {
        document.querySelector("#divChocoBlock1kg").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoSprite1250ml.textContent) {
        document.querySelector("#divSprite1250ml").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoSprite2250ml.textContent) {
        document.querySelector("#divSprite2250ml").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoSprite3l.textContent) {
        document.querySelector("#divSprite3l").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoSalFina.textContent) {
        document.querySelector("#divSalFina").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoAguaMineral1500ml.textContent) {
        document.querySelector("#divAguaMineral1500ml").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoAguaMineral2l.textContent) {
        document.querySelector("#divAguaMineral2l").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoAguaConGas1l.textContent) {
        document.querySelector("#divAguaConGas1l").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoAguaConGas2l.textContent) {
        document.querySelector("#divAguaConGas2l").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoSampooPantene.textContent) {
        document.querySelector("#divSampooPantene").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoCotonetesX200.textContent) {
        document.querySelector("#divCotonetesX200").style.display = "none"
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    }

}

function setearNombreCliente(e) {

    if(e.keyCode === 13) {

        for (cliente of clientes) {

            if (inputDniNV.value === '') {
                popUpIngreseDni.style.display = 'flex'
                inputCerrarPopUpDni.style.display = 'flex'
                inputCerrarPopUpDni.focus()
            } else if (inputDniNV.value == cliente.dni) {
                inputNombreNV.innerText = `${cliente.nombre}`
            }

        }

    }

}

function habilitarSelectCuotas() {

    const pago = selectTipoPagoNV.value
    
    if (pago === 'tipo de pago') {
        selectCantCuotasNV.setAttribute('disabled', 'true')
        selectCantCuotasNV.value = "cant de cuotas"
    } else if (pago === 'efectivo') {
        selectCantCuotasNV.setAttribute('disabled', 'true')
        selectCantCuotasNV.value = "cant de cuotas"
    } else if (pago === 'tarjeta de debito') {
        selectCantCuotasNV.setAttribute('disabled', 'true')
        selectCantCuotasNV.value = "cant de cuotas"
    } else if (pago === 'tarjeta de credito') {
        selectCantCuotasNV.removeAttribute('disabled', 'true')
    }

}

function mostrarSaldo() {

    saldoTotalNV.innerText = saldostotales.reduce((acum, elemento) => acum + elemento,0)
    
}

function mostrarUlBuscador(e) {

    if (e.target.matches("#inputBuscarProductoNV")) {

        if (e.target.value == "") {

            ulBuscadorProductoNV.style.display = 'none'   

        } else {

            ulBuscadorProductoNV.style.display = 'block'

            document.querySelectorAll(".ulBuscadorProducto__li").forEach(prod => {
                prod.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? prod.classList.remove("filtro") : prod.classList.add("filtro") 
            })

        }

    }    

}

function limpiarImputsNuevaVenta() {

    inputBuscarProductoNV.value = ""
    inputCodigoProductoNV.value = ""
    inputCantidadNV.value = ""
    inputPrecioNV.innerText = ""
    inputStockDispNV.innerText = ""

} 

function confirmarVenta() {

    if (inputDniNV.value === '') {
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

// productos

function setearChocolateVizzio290g(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVChocolateVizzio290g.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearChocolateBlock1kg(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVChocolateBlock1kg.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearSprite125l(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVGaseosaSprite125l.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearSprite225l(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVGaseosaSprite225l.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearSprite3l(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVGaseosaSprite3l.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearSalFina(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVSalFina.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearAguaMineral15l(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVAguaMineral15l.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearAguaMineral2l(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVAguaMineral2l.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearAguaConGas1l(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVAguaConGas1l.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearAguaConGas2l(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVAguaConGas2l.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearSampooPantene(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVSampooPantene.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function setearCotonetesX200(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liNVCotonetesX200.textContent == producto.descripcion) {
                inputBuscarProductoNV.value = `${producto.descripcion}`
                inputCodigoProductoNV.value = `${producto.codigo}`
                inputPrecioNV.innerText = `${producto.precio}`
                inputStockDispNV.innerText = `${producto.stock}`
                inputCantidadNV.focus()
            }

        })
    })


    ulBuscadorProductoNV.style.display = "none"

}

function seleccChocoVizzio290g() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoChocoVizzio290g.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoChocoVizzio290g.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantChocoVizzio290g.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccChocoBlock1kg() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoChocoBlock1kg.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoChocoBlock1kg.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantChocoBlock1kg.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccSprite1250ml() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoSprite1250ml.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoSprite1250ml.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantSprite1250ml.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccSprite2250ml() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoSprite2250ml.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoSprite2250ml.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantSprite2250ml.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccSprite3l() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoSprite3l.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoSprite3l.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantSprite3l.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccSalFina() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoSalFina.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoSalFina.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantSalFina.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccAguaMineral1500ml() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoAguaMineral1500ml.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoAguaMineral1500ml.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantAguaMineral1500ml.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccAguaMineral2l() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoAguaMineral2l.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoAguaMineral2l.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantAguaMineral2l.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccAguaConGas1l() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoAguaConGas1l.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoAguaConGas1l.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantAguaConGas1l.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccAguaConGas2l() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoAguaConGas2l.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoAguaConGas2l.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantAguaConGas2l.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccSampooPantene() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoSampooPantene.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoSampooPantene.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantSampooPantene.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

function seleccCotonetesX200() {

    fetch('./productos.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((prod) => {

        if (codigoCotonetesX200.textContent == prod.codigo) {

            inputCodigoProductoNV.value = codigoCotonetesX200.textContent
            inputBuscarProductoNV.value = prod.descripcion
            inputCantidadNV.value = cantCotonetesX200.textContent
            inputPrecioNV.innerText = prod.precio
            inputStockDispNV.innerText = prod.stock
            
        }

        })
    })

}

// ventana productos

function mostrarUlBuscadorVP(e) {

    if (e.target.matches("#inputBuscarProductoVP")) {

        if (e.target.value == "") {

            ulBuscadorProductoVP.style.display = 'none'   

        } else {

            ulBuscadorProductoVP.style.display = 'block'

            document.querySelectorAll(".ulBuscadorProductoVP__li").forEach(prod => {
                prod.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? prod.classList.remove("filtro") : prod.classList.add("filtro") 
            })

        }

    }    

}

function mostrarListaProductos() {

    for (producto of listaProductos) {

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

    /* fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {


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


        })
    }) */

}

function guardarProductoVP() {

    if ( (inputCodigoProductoVP.value == "") || (inputDescrProductoVP.value == "") || (inputPrecioProductoVP.value == "") || (inputStockProductoVP.value == "") || (inputProvProductoVP.value == "") ) {

        popUpCompletarCamposVP.style.display = "flex"
        inputCerrarPopUpCCVP.style.display = "flex"
        inputCerrarPopUpCCVP.focus()

    } else  {

        // crea un producto en la tabla de productos

        /* let div = document.createElement("div")

        div.className = "bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto"

        div.innerHTML = 
        `
        <div class="bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto__bor codigoProducto">${inputCodigoProductoVP.value}</div>
        <div class="bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto__bor descrProducto">${inputDescrProductoVP.value}</div>
        <div class="bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto__bor precioProducto">${inputPrecioProductoVP.value}</div>
        <div class="bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto__bor stockProducto">${inputStockProductoVP.value}</div>
        <div class="provProducto">${inputProvProductoVP.value}</div>
        `;

        tablaListaProductos.appendChild(div) */

        // Añade un evento de click a cada uno de los productos agregados

        /* document.querySelectorAll(".bodyIndex__ventanas__productos__divTablaVentanaProd__tabla__tablaListaProductos__producto").forEach(productoAgregado => {
            
            productoAgregado.addEventListener("click",()=>{

                document.querySelectorAll(".codigoProducto").forEach(codigo => {

                    inputCodigoProductoVP.value = codigo.textContent

                })

                document.querySelectorAll(".descrProducto").forEach(descr => {

                    inputDescrProductoVP.value = descr.textContent

                })

                document.querySelectorAll(".precioProducto").forEach(precio => {

                    inputPrecioProductoVP.value = precio.textContent

                })

                document.querySelectorAll(".stockProducto").forEach(stock => {

                    inputStockProductoVP.value = stock.textContent

                })

                document.querySelectorAll(".provProducto").forEach(prov => {

                    inputProvProductoVP.value = prov.textContent

                })

            })
            
        })

        limpiarInputsVP()
        inputCodigoProductoVP.focus() */

        document.querySelector("#prod1").style.display = "grid"
        descrProd1.textContent = inputDescrProductoVP.value     
        precioProd1.textContent = inputPrecioProductoVP.value     
        stockProd1.textContent = inputStockProductoVP.value     
        provProd1.textContent = inputProvProductoVP.value 
        
        listaProductos.push({codigo: inputCodigoProductoVP.value,descripcion: inputDescrProductoVP.value, precio: inputPrecioProductoVP.value, stock: inputStockProductoVP.value, proveedor: inputProvProductoVP.value}) 
        limpiarInputsVP()
        inputCodigoProductoVP.focus()
    }
   
}

function modificarProductoVP() {

    if ( (inputCodigoProductoVP.value == "") || (inputDescrProductoVP.value == "") || (inputPrecioProductoVP.value == "") || (inputStockProductoVP.value == "") || (inputProvProductoVP.value == "") ) {

        popUpCompletarCamposVP.style.display = "flex"
        inputCerrarPopUpCCVP.style.display = "flex"
        inputCerrarPopUpCCVP.focus()

    } else if (inputCodigoProductoVP.value == codigoProd1.textContent) {

        document.querySelector("#prod1").style.display = "grid"
        descrProd1.textContent = inputDescrProductoVP.value     
        precioProd1.textContent = inputPrecioProductoVP.value     
        stockProd1.textContent = inputStockProductoVP.value     
        provProd1.textContent = inputProvProductoVP.value  
        
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    }    

}

function borrarProductoVP() {
    
    if (inputCodigoProductoVP.value == codigoProd1.textContent) {

        document.querySelector("#prod1").style.display = "none"
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    }

}

function nuevoProductoVP() {
    limpiarInputsVP()
    inputCodigoProductoVP.focus()
}

function seleccProd1() {

    inputCodigoProductoVP.value = codigoProd1.textContent
    inputDescrProductoVP.value = descrProd1.textContent
    inputPrecioProductoVP.value = precioProd1.textContent
    inputStockProductoVP.value = stockProd1.textContent
    inputProvProductoVP.value = provProd1.textContent

}

function limpiarInputsVP() {

    inputBuscarProductoVP.value = ""
    inputCodigoProductoVP.value = ""
    inputDescrProductoVP.value = ""
    inputPrecioProductoVP.value = ""
    inputStockProductoVP.value = ""
    inputProvProductoVP.value = ""

}

function setearChocolateVizzio290gVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPChocolateVizzio290g.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearChocolateBlock1kgVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPChocolateBlock1kg.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearGaseosaSprite125lVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPGaseosaSprite125l.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearGaseosaSprite225lVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPGaseosaSprite225l.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearGaseosaSprite3lVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPGaseosaSprite3l.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearSalFinaVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPSalFina.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearAguaMineral15lVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPAguaMineral15l.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearAguaMineral2lVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPAguaMineral2l.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearAguaConGas1lVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPAguaConGas1l.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearAguaConGas2lVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPAguaConGas2l.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearSampooPanteneVP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPSampooPantene.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

function setearCotonetesX200VP(){

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (liVPCotonetesX200.textContent == producto.descripcion) {
                inputBuscarProductoVP.value = `${producto.descripcion}`
                inputCodigoProductoVP.value = `${producto.codigo}`
                inputDescrProductoVP.value = `${producto.descripcion}`
                inputPrecioProductoVP.value = `${producto.precio}`
                inputStockProductoVP.value = `${producto.stock}`
                inputProvProductoVP.value = `${producto.proveedor}`
            }

        })
    })


    ulBuscadorProductoVP.style.display = "none"

}

// ventana clientes

function mostrarListaClientes() {

    /* fetch('./clientes.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((cliente) => {


        let div = document.createElement("div")

        div.className = "bodyIndex__ventanas__clientes__divTablaVentanaClien__tabla__tablaListaClientes__cliente"

        div.innerHTML = 
        `
        <div class="bodyIndex__ventanas__clientes__divTablaVentanaClien__tabla__tablaListaClientes__cliente__bor">${cliente.nombre}</div>
        <div class="bodyIndex__ventanas__clientes__divTablaVentanaClien__tabla__tablaListaClientes__cliente__bor">${cliente.dni}</div>
        <div class="bodyIndex__ventanas__clientes__divTablaVentanaClien__tabla__tablaListaClientes__cliente__bor">${cliente.telefono}</div>
        <div class="bodyIndex__ventanas__clientes__divTablaVentanaClien__tabla__tablaListaClientes__cliente__bor">${cliente.email}</div>
        <div>${cliente.direccion}</div>
        `;

        tablaListaClientes.appendChild(div)


    })
    }) */

}

function guardarClienteVC() {

    if ( (inputCodigoProductoVP.value == "") || (inputDescrProductoVP.value == "") || (inputPrecioProductoVP.value == "") || (inputStockProductoVP.value == "") || (inputProvProductoVP.value == "") ) {

        console.log("Debes completar los campos")

    } else if (inputCodigoProductoVP.value == codigoProd1.textContent) {

        document.querySelector("#prod1").style.display = "grid"
        descrProd1.textContent = inputDescrProductoVP.value     
        precioProd1.textContent = inputPrecioProductoVP.value     
        stockProd1.textContent = inputStockProductoVP.value     
        provProd1.textContent = inputProvProductoVP.value 
        
        listaProductos.push({codigo: inputCodigoProductoVP.value,descripcion: inputDescrProductoVP.value, precio: inputPrecioProductoVP.value, stock: inputStockProductoVP.value, proveedor: inputProvProductoVP.value})
        
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    }
   
}

function modificarClienteVC() {
   
    if (inputCodigoProductoVP.value == codigoProd1.textContent) {

        document.querySelector("#prod1").style.display = "grid"
        descrProd1.textContent = inputDescrProductoVP.value     
        precioProd1.textContent = inputPrecioProductoVP.value     
        stockProd1.textContent = inputStockProductoVP.value     
        provProd1.textContent = inputProvProductoVP.value  
        
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    }    

}

function borrarClienteVC() {
    
    if (inputCodigoProductoVP.value == codigoProd1.textContent) {

        document.querySelector("#prod1").style.display = "none"
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    }

}

function nuevoClienteVC() {
    limpiarInputsVP()
    inputCodigoProductoVP.focus()
}

// ventana proveedores

function mostrarListaProveedores() {

    /* fetch('./proveedores.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((proveedor) => {


        let div = document.createElement("div")

        div.className = "bodyIndex__ventanas__proveedores__divTablaVentanaProv__tabla__tablaListaProveedores__proveedores"

        div.innerHTML = 
        `
        <div class="bodyIndex__ventanas__proveedores__divTablaVentanaProv__tabla__tablaListaProveedores__proveedores__bor">${proveedor.razonSocial}</div>
        <div class="bodyIndex__ventanas__proveedores__divTablaVentanaProv__tabla__tablaListaProveedores__proveedores__bor">${proveedor.cuitCuil}</div>
        <div class="bodyIndex__ventanas__proveedores__divTablaVentanaProv__tabla__tablaListaProveedores__proveedores__bor">${proveedor.telefono}</div>
        <div class="bodyIndex__ventanas__proveedores__divTablaVentanaProv__tabla__tablaListaProveedores__proveedores__bor">${proveedor.email}</div>
        <div>${proveedor.direccion}</div>
        `;

        tablaListaProveedores.appendChild(div)


    })
    }) */

}

// ventana ventas


// Llamada a las funciones

mostrarVentanaNuevaVenta()

mostrarTablaProductosIngresados()

mostrarSaldo()

mostrarListaProductos()

mostrarListaClientes()

mostrarListaProveedores()

// Pruebas



// fin Pruebas