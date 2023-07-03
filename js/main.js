
document.querySelector("#fila1TablaProductosIngresados").style.display = "none"
document.querySelector("#fila2TablaProductosIngresados").style.display = "none"
document.querySelector("#fila3TablaProductosIngresados").style.display = "none"
document.querySelector("#fila4TablaProductosIngresados").style.display = "none"
document.querySelector("#fila5TablaProductosIngresados").style.display = "none"

document.querySelector("#fila1TablaProductos").style.display = "none"
document.querySelector("#fila2TablaProductos").style.display = "none"
document.querySelector("#fila3TablaProductos").style.display = "none"
document.querySelector("#fila4TablaProductos").style.display = "none"
document.querySelector("#fila5TablaProductos").style.display = "none"

document.querySelector("#fila1TablaClientes").style.display = "none"
document.querySelector("#fila2TablaClientes").style.display = "none"
document.querySelector("#fila3TablaClientes").style.display = "none"
document.querySelector("#fila4TablaClientes").style.display = "none"
document.querySelector("#fila5TablaClientes").style.display = "none"

document.querySelector("#fila1TablaProveedores").style.display = "none"
document.querySelector("#fila2TablaProveedores").style.display = "none"
document.querySelector("#fila3TablaProveedores").style.display = "none"
document.querySelector("#fila4TablaProveedores").style.display = "none"
document.querySelector("#fila5TablaProveedores").style.display = "none"

document.querySelector("#fila1TablaVentas").style.display = "none"
document.querySelector("#fila2TablaVentas").style.display = "none"
document.querySelector("#fila3TablaVentas").style.display = "none"
document.querySelector("#fila4TablaVentas").style.display = "none"
document.querySelector("#fila5TablaVentas").style.display = "none"

document.querySelector("#popUpDetalleVentaFila1TablaVentas").style.display = "none"
document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas").style.display = "none"
document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas").style.display = "none"
document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas").style.display = "none"
document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas").style.display = "none"
document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas").style.display = "none"

document.querySelector("#popUpDetalleVentaFila2TablaVentas").style.display = "none"
document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas").style.display = "none"
document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas").style.display = "none"
document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas").style.display = "none"
document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas").style.display = "none"
document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas").style.display = "none"

document.querySelector("#popUpDetalleVentaFila3TablaVentas").style.display = "none"
document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas").style.display = "none"
document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas").style.display = "none"
document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas").style.display = "none"
document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas").style.display = "none"
document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas").style.display = "none"

document.querySelector("#popUpDetalleVentaFila4TablaVentas").style.display = "none"
document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas").style.display = "none"
document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas").style.display = "none"
document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas").style.display = "none"
document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas").style.display = "none"
document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas").style.display = "none"

document.querySelector("#popUpDetalleVentaFila5TablaVentas").style.display = "none"
document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas").style.display = "none"
document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas").style.display = "none"
document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas").style.display = "none"
document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas").style.display = "none"
document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas").style.display = "none"

document.querySelector("#btnImprimirVenta").style.display = "none"

//botones de ventanas

const btnNuevaVenta = document.querySelector("#btnNuevaVenta")
btnNuevaVenta.addEventListener("click",mostrarVentanaNuevaVenta)

const btnProductos = document.querySelector("#btnProductos")
btnProductos.addEventListener("click",mostrarVentanaProductos)

const btnClientes = document.querySelector("#btnClientes")
btnClientes.addEventListener("click",mostrarVentanaClientes)

const btnProveedores = document.querySelector("#btnProveedores")
btnProveedores.addEventListener("click",mostrarVentanaProvedores)

const btnVentas = document.querySelector("#btnVentas")
btnVentas.addEventListener("click",mostrarVentanaVentas)

const btnAcercaDe = document.querySelector("#btnAcercaDe")
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

const fila1TablaProductosIngresados = document.querySelector("#fila1TablaProductosIngresados")
const codigoFila1TablaProductosIngresados = document.querySelector("#codigoFila1TablaProductosIngresados")
const descrFila1TablaProductosIngresados = document.querySelector("#descrFila1TablaProductosIngresados")
const cantFila1TablaProductosIngresados = document.querySelector("#cantFila1TablaProductosIngresados")
const precioFila1TablaProductosIngresados = document.querySelector("#precioFila1TablaProductosIngresados")
const totalFila1TablaProductosIngresados = document.querySelector("#totalFila1TablaProductosIngresados")

const fila2TablaProductosIngresados = document.querySelector("#fila2TablaProductosIngresados")
const codigoFila2TablaProductosIngresados = document.querySelector("#codigoFila2TablaProductosIngresados")
const descrFila2TablaProductosIngresados = document.querySelector("#descrFila2TablaProductosIngresados")
const cantFila2TablaProductosIngresados = document.querySelector("#cantFila2TablaProductosIngresados")
const precioFila2TablaProductosIngresados = document.querySelector("#precioFila2TablaProductosIngresados")
const totalFila2TablaProductosIngresados = document.querySelector("#totalFila2TablaProductosIngresados")

const fila3TablaProductosIngresados = document.querySelector("#fila3TablaProductosIngresados")
const codigoFila3TablaProductosIngresados = document.querySelector("#codigoFila3TablaProductosIngresados")
const descrFila3TablaProductosIngresados = document.querySelector("#descrFila3TablaProductosIngresados")
const cantFila3TablaProductosIngresados = document.querySelector("#cantFila3TablaProductosIngresados")
const precioFila3TablaProductosIngresados = document.querySelector("#precioFila3TablaProductosIngresados")
const totalFila3TablaProductosIngresados = document.querySelector("#totalFila3TablaProductosIngresados")

const fila4TablaProductosIngresados = document.querySelector("#fila4TablaProductosIngresados")
const codigoFila4TablaProductosIngresados = document.querySelector("#codigoFila4TablaProductosIngresados")
const descrFila4TablaProductosIngresados = document.querySelector("#descrFila4TablaProductosIngresados")
const cantFila4TablaProductosIngresados = document.querySelector("#cantFila4TablaProductosIngresados")
const precioFila4TablaProductosIngresados = document.querySelector("#precioFila4TablaProductosIngresados")
const totalFila4TablaProductosIngresados = document.querySelector("#totalFila4TablaProductosIngresados")

const fila5TablaProductosIngresados = document.querySelector("#fila5TablaProductosIngresados")
const codigoFila5TablaProductosIngresados = document.querySelector("#codigoFila5TablaProductosIngresados")
const descrFila5TablaProductosIngresados = document.querySelector("#descrFila5TablaProductosIngresados")
const cantFila5TablaProductosIngresados = document.querySelector("#cantFila5TablaProductosIngresados")
const precioFila5TablaProductosIngresados = document.querySelector("#precioFila5TablaProductosIngresados")
const totalFila5TablaProductosIngresados = document.querySelector("#totalFila5TablaProductosIngresados")

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

fila1TablaProductosIngresados.addEventListener("click",seleccTablaProductosIngresadosFila1)
fila2TablaProductosIngresados.addEventListener("click",seleccTablaProductosIngresadosFila2)
fila3TablaProductosIngresados.addEventListener("click",seleccTablaProductosIngresadosFila3)
fila4TablaProductosIngresados.addEventListener("click",seleccTablaProductosIngresadosFila4)
fila5TablaProductosIngresados.addEventListener("click",seleccTablaProductosIngresadosFila5)

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

// lista de productos

const fila1TablaProductos = document.querySelector("#fila1TablaProductos")
fila1TablaProductos.addEventListener("click",seleccTablaProductosFila1)
const codigoFila1TablaProductos = document.querySelector("#codigoFila1TablaProductos")
const descrFila1TablaProductos = document.querySelector("#descrFila1TablaProductos")
const precioFila1TablaProductos = document.querySelector("#precioFila1TablaProductos")
const stockFila1TablaProductos = document.querySelector("#stockFila1TablaProductos")
const provFila1TablaProductos = document.querySelector("#provFila1TablaProductos")

const fila2TablaProductos = document.querySelector("#fila2TablaProductos")
fila2TablaProductos.addEventListener("click",seleccTablaProductosFila2)
const codigoFila2TablaProductos = document.querySelector("#codigoFila2TablaProductos")
const descrFila2TablaProductos = document.querySelector("#descrFila2TablaProductos")
const precioFila2TablaProductos = document.querySelector("#precioFila2TablaProductos")
const stockFila2TablaProductos = document.querySelector("#stockFila2TablaProductos")
const provFila2TablaProductos = document.querySelector("#provFila2TablaProductos")

const fila3TablaProductos = document.querySelector("#fila3TablaProductos")
fila3TablaProductos.addEventListener("click",seleccTablaProductosFila3)
const codigoFila3TablaProductos = document.querySelector("#codigoFila3TablaProductos")
const descrFila3TablaProductos = document.querySelector("#descrFila3TablaProductos")
const precioFila3TablaProductos = document.querySelector("#precioFila3TablaProductos")
const stockFila3TablaProductos = document.querySelector("#stockFila3TablaProductos")
const provFila3TablaProductos = document.querySelector("#provFila3TablaProductos")

const fila4TablaProductos = document.querySelector("#fila4TablaProductos")
fila4TablaProductos.addEventListener("click",seleccTablaProductosFila4)
const codigoFila4TablaProductos = document.querySelector("#codigoFila4TablaProductos")
const descrFila4TablaProductos = document.querySelector("#descrFila4TablaProductos")
const precioFila4TablaProductos = document.querySelector("#precioFila4TablaProductos")
const stockFila4TablaProductos = document.querySelector("#stockFila4TablaProductos")
const provFila4TablaProductos = document.querySelector("#provFila4TablaProductos")

const fila5TablaProductos = document.querySelector("#fila5TablaProductos")
fila5TablaProductos.addEventListener("click",seleccTablaProductosFila5)
const codigoFila5TablaProductos = document.querySelector("#codigoFila5TablaProductos")
const descrFila5TablaProductos = document.querySelector("#descrFila5TablaProductos")
const precioFila5TablaProductos = document.querySelector("#precioFila5TablaProductos")
const stockFila5TablaProductos = document.querySelector("#stockFila5TablaProductos")
const provFila5TablaProductos = document.querySelector("#provFila5TablaProductos")

// ventana clientes

const inputBuscarClientesVC = document.querySelector("#inputBuscarClientesVC")
inputBuscarClientesVC.addEventListener("input",mostrarUlBuscadorVC)

const ulBuscadorClienteVC = document.querySelector("#ulBuscadorClienteVC")

const liVCMarceloBraganza = document.querySelector("#liVCMarceloBraganza")
liVCMarceloBraganza.addEventListener("click",setearLiMarceloBraganza)

const liVCJulietaMiquelarena = document.querySelector("#liVCJulietaMiquelarena")
liVCJulietaMiquelarena.addEventListener("click",setearLiJulietaMiquelarena)

const inputNombreClienteVC = document.querySelector("#inputNombreClienteVC")
const inputDniClienteVC = document.querySelector("#inputDniClienteVC")
const inputTelefonoClienteVC = document.querySelector("#inputTelefonoClienteVC")
const inputEmailClienteVC = document.querySelector("#inputEmailClienteVC")
const inputDireccionClienteVC = document.querySelector("#inputDireccionClienteVC")

const btnGuardarCliente = document.querySelector("#btnGuardarCliente")
btnGuardarCliente.addEventListener("click",guardarClienteVC)

const btnModificarCliente = document.querySelector("#btnModificarCliente")
btnModificarCliente.addEventListener("click",modificarClienteVC)

const btnBorrarCliente = document.querySelector("#btnBorrarCliente")
btnBorrarCliente.addEventListener("click",borrarClienteVC)

const btnNuevoCliente = document.querySelector("#btnNuevoCliente")
btnNuevoCliente.addEventListener("click",nuevoClienteVC)

// lista de clientes

const fila1TablaClientes = document.querySelector("#fila1TablaClientes")
fila1TablaClientes.addEventListener("click",seleccTablaClientesFila1)
const nombreFila1TablaClientes = document.querySelector("#nombreFila1TablaClientes")
const dniFila1TablaClientes = document.querySelector("#dniFila1TablaClientes")
const telefonoFila1TablaClientes = document.querySelector("#telefonoFila1TablaClientes")
const emailFila1TablaClientes = document.querySelector("#emailFila1TablaClientes")
const direccionFila1TablaClientes = document.querySelector("#direccionFila1TablaClientes")

const fila2TablaClientes = document.querySelector("#fila2TablaClientes")
fila2TablaClientes.addEventListener("click",seleccTablaClientesFila2)
const nombreFila2TablaClientes = document.querySelector("#nombreFila2TablaClientes")
const dniFila2TablaClientes = document.querySelector("#dniFila2TablaClientes")
const telefonoFila2TablaClientes = document.querySelector("#telefonoFila2TablaClientes")
const emailFila2TablaClientes = document.querySelector("#emailFila2TablaClientes")
const direccionFila2TablaClientes = document.querySelector("#direccionFila2TablaClientes")

const fila3TablaClientes = document.querySelector("#fila3TablaClientes")
fila3TablaClientes.addEventListener("click",seleccTablaClientesFila3)
const nombreFila3TablaClientes = document.querySelector("#nombreFila3TablaClientes")
const dniFila3TablaClientes = document.querySelector("#dniFila3TablaClientes")
const telefonoFila3TablaClientes = document.querySelector("#telefonoFila3TablaClientes")
const emailFila3TablaClientes = document.querySelector("#emailFila3TablaClientes")
const direccionFila3TablaClientes = document.querySelector("#direccionFila3TablaClientes")

const fila4TablaClientes = document.querySelector("#fila4TablaClientes")
fila4TablaClientes.addEventListener("click",seleccTablaClientesFila4)
const nombreFila4TablaClientes = document.querySelector("#nombreFila4TablaClientes")
const dniFila4TablaClientes = document.querySelector("#dniFila4TablaClientes")
const telefonoFila4TablaClientes = document.querySelector("#telefonoFila1TablaClientes")
const emailFila4TablaClientes = document.querySelector("#emailFila4TablaClientes")
const direccionFila4TablaClientes = document.querySelector("#direccionFila4TablaClientes")

const fila5TablaClientes = document.querySelector("#fila5TablaClientes")
fila5TablaClientes.addEventListener("click",seleccTablaClientesFila5)
const nombreFila5TablaClientes = document.querySelector("#nombreFila5TablaClientes")
const dniFila5TablaClientes = document.querySelector("#dniFila5TablaClientes")
const telefonoFila5TablaClientes = document.querySelector("#telefonoFila5TablaClientes")
const emailFila5TablaClientes = document.querySelector("#emailFila5TablaClientes")
const direccionFila5TablaClientes = document.querySelector("#direccionFila5TablaClientes")

// ventana proveedores

const inputBuscarProveedoresVProv = document.querySelector("#inputBuscarProveedoresVProv")
inputBuscarProveedoresVProv.addEventListener("input",mostrarUlBuscadorVProv)

const ulBuscadorProveedorVProv = document.querySelector("#ulBuscadorProveedorVProv")

const liVProvSancor = document.querySelector("#liVProvSancor")
liVProvSancor.addEventListener("click",setearLiVProvSancor)

const liVProvDistElColo = document.querySelector("#liVProvDistElColo")
liVProvDistElColo.addEventListener("click",setearLiVProvDistElColo)


const inputRazonSocialVProv = document.querySelector("#inputRazonSocialVProv")
const inputCuilCuitVProv = document.querySelector("#inputCuilCuitVProv")
const inputTelefonoVProv = document.querySelector("#inputTelefonoVProv")
const inputEmailVProv = document.querySelector("#inputEmailVProv")
const inputDireccionVProv = document.querySelector("#inputDireccionVProv")

const btnGuardarProveedor = document.querySelector("#btnGuardarProveedor")
btnGuardarProveedor.addEventListener("click",guardarProveedorVProv)

const btnModificarProveedor = document.querySelector("#btnModificarProveedor")
btnModificarProveedor.addEventListener("click",modificarProveedorVProv)

const btnBorrarProveedor = document.querySelector("#btnBorrarProveedor")
btnBorrarProveedor.addEventListener("click",borrarProveedorVProv)

const btnNuevoProveedor = document.querySelector("#btnNuevoProveedor")
btnNuevoProveedor.addEventListener("click",nuevoProveedorVProv)

// lista proveedores

const fila1TablaProveedores = document.querySelector("#fila1TablaProveedores")
fila1TablaProveedores.addEventListener("click",seleccTablaProveedoresFila1)
const razonSocialFila1TablaProveedores = document.querySelector("#razonSocialFila1TablaProveedores")
const cuiTCuilFila1TablaProveedores = document.querySelector("#cuiTCuilFila1TablaProveedores")
const telefonoFila1TablaProveedores = document.querySelector("#telefonoFila1TablaProveedores")
const emailFila1TablaProveedores = document.querySelector("#emailFila1TablaProveedores")
const direccionFila1TablaProveedores = document.querySelector("#direccionFila1TablaProveedores")

const fila2TablaProveedores = document.querySelector("#fila2TablaProveedores")
fila2TablaProveedores.addEventListener("click",seleccTablaProveedoresFila2)
const razonSocialFila2TablaProveedores = document.querySelector("#razonSocialFila2TablaProveedores")
const cuiTCuilFila2TablaProveedores = document.querySelector("#cuiTCuilFila2TablaProveedores")
const telefonoFila2TablaProveedores = document.querySelector("#telefonoFila2TablaProveedores")
const emailFila2TablaProveedores = document.querySelector("#emailFila2TablaProveedores")
const direccionFila2TablaProveedores = document.querySelector("#direccionFila2TablaProveedores")

const fila3TablaProveedores = document.querySelector("#fila3TablaProveedores")
fila3TablaProveedores.addEventListener("click",seleccTablaProveedoresFila3)
const razonSocialFila3TablaProveedores = document.querySelector("#razonSocialFila3TablaProveedores")
const cuiTCuilFila3TablaProveedores = document.querySelector("#cuiTCuilFila3TablaProveedores")
const telefonoFila3TablaProveedores = document.querySelector("#telefonoFila3TablaProveedores")
const emailFila3TablaProveedores = document.querySelector("#emailFila3TablaProveedores")
const direccionFila3TablaProveedores = document.querySelector("#direccionFila3TablaProveedores")

const fila4TablaProveedores = document.querySelector("#fila4TablaProveedores")
fila4TablaProveedores.addEventListener("click",seleccTablaProveedoresFila4)
const razonSocialFila4TablaProveedores = document.querySelector("#razonSocialFila4TablaProveedores")
const cuiTCuilFila4TablaProveedores = document.querySelector("#cuiTCuilFila4TablaProveedores")
const telefonoFila4TablaProveedores = document.querySelector("#telefonoFila4TablaProveedores")
const emailFila4TablaProveedores = document.querySelector("#emailFila4TablaProveedores")
const direccionFila4TablaProveedores = document.querySelector("#direccionFila4TablaProveedores")

const fila5TablaProveedores = document.querySelector("#fila5TablaProveedores")
fila5TablaProveedores.addEventListener("click",seleccTablaProveedoresFila5)
const razonSocialFila5TablaProveedores = document.querySelector("#razonSocialFila5TablaProveedores")
const cuiTCuilFila5TablaProveedores = document.querySelector("#cuiTCuilFila5TablaProveedores")
const telefonoFila5TablaProveedores = document.querySelector("#telefonoFila5TablaProveedores")
const emailFila5TablaProveedores = document.querySelector("#emailFila5TablaProveedores")
const direccionFila5TablaProveedores = document.querySelector("#direccionFila5TablaProveedores")

// ventana ventas

const inputBuscarVentasVV = document.querySelector("#inputBuscarVentasVV")
inputBuscarVentasVV.addEventListener("input",mostrarUlBuscadorVentas)

const btnBorrarVentaVV = document.querySelector("#btnBorrarVentaVV")
btnBorrarVentaVV.addEventListener("click",borrarVenta)

const btnImprimirVenta = document.querySelector("#btnImprimirVenta")
//btnImprimirVenta.addEventListener("click",imprimirVenta)

const saldoTotalVentasVV = document.querySelector("#saldoTotalVentasVV")

const tablaListaVentas = document.querySelector("#tablaListaVentas")

const fila1TablaVentas = document.querySelector("#fila1TablaVentas")
fila1TablaVentas.addEventListener("click",seleccTablaVentasFila1)
const codigoFila1TablaVentas = document.querySelector("#codigoFila1TablaVentas")
const btnVerDetalleFila1TablaVentas = document.querySelector("#btnVerDetalleFila1TablaVentas")
btnVerDetalleFila1TablaVentas.addEventListener("click",mostrarPopUpDetalleVentaFila1TablaVentas)
const clienteFila1TablaVentas = document.querySelector("#clienteFila1TablaVentas")
const tipoPagoFila1TablaVentas = document.querySelector("#tipoPagoFila1TablaVentas")
const saldoTotalVentaFila1TablaVentas = document.querySelector("#saldoTotalVentaFila1TablaVentas")

const fila2TablaVentas = document.querySelector("#fila2TablaVentas")
fila2TablaVentas.addEventListener("click",seleccTablaVentasFila2)
const codigoFila2TablaVentas = document.querySelector("#codigoFila2TablaVentas")
const btnVerDetalleFila2TablaVentas = document.querySelector("#btnVerDetalleFila2TablaVentas")
btnVerDetalleFila2TablaVentas.addEventListener("click",mostrarPopUpDetalleVentaFila2TablaVentas)
const clienteFila2TablaVentas = document.querySelector("#clienteFila2TablaVentas")
const tipoPagoFila2TablaVentas = document.querySelector("#tipoPagoFila2TablaVentas")
const saldoTotalVentaFila2TablaVentas = document.querySelector("#saldoTotalVentaFila2TablaVentas")

const fila3TablaVentas = document.querySelector("#fila3TablaVentas")
fila3TablaVentas.addEventListener("click",seleccTablaVentasFila3)
const codigoFila3TablaVentas = document.querySelector("#codigoFila3TablaVentas")
const btnVerDetalleFila3TablaVentas = document.querySelector("#btnVerDetalleFila3TablaVentas")
btnVerDetalleFila3TablaVentas.addEventListener("click",mostrarPopUpDetalleVentaFila3TablaVentas)
const clienteFila3TablaVentas = document.querySelector("#clienteFila3TablaVentas")
const tipoPagoFila3TablaVentas = document.querySelector("#tipoPagoFila3TablaVentas")
const saldoTotalVentaFila3TablaVentas = document.querySelector("#saldoTotalVentaFila3TablaVentas")

const fila4TablaVentas = document.querySelector("#fila4TablaVentas")
fila4TablaVentas.addEventListener("click",seleccTablaVentasFila4)
const codigoFila4TablaVentas = document.querySelector("#codigoFila4TablaVentas")
const btnVerDetalleFila4TablaVentas = document.querySelector("#btnVerDetalleFila4TablaVentas")
btnVerDetalleFila4TablaVentas.addEventListener("click",mostrarPopUpDetalleVentaFila4TablaVentas)
const clienteFila4TablaVentas = document.querySelector("#clienteFila4TablaVentas")
const tipoPagoFila4TablaVentas = document.querySelector("#tipoPagoFila4TablaVentas")
const saldoTotalVentaFila4TablaVentas = document.querySelector("#saldoTotalVentaFila4TablaVentas")

const fila5TablaVentas = document.querySelector("#fila5TablaVentas")
fila5TablaVentas.addEventListener("click",seleccTablaVentasFila5)
const codigoFila5TablaVentas = document.querySelector("#codigoFila5TablaVentas")
const btnVerDetalleFila5TablaVentas = document.querySelector("#btnVerDetalleFila5TablaVentas")
btnVerDetalleFila5TablaVentas.addEventListener("click",mostrarPopUpDetalleVentaFila5TablaVentas)
const clienteFila5TablaVentas = document.querySelector("#clienteFila5TablaVentas")
const tipoPagoFila5TablaVentas = document.querySelector("#tipoPagoFila5TablaVentas")
const saldoTotalVentaFila5TablaVentas = document.querySelector("#saldoTotalVentaFila5TablaVentas")

// acerca de

const razonSocialDatosEmpresa = document.querySelector("#razonSocialDatosEmpresa")
 
// popups

// popUps ventana nueva venta

const popUpIngreseUnCodigo = document.querySelector("#popUpIngreseUnCodigo")
const inputCerrarPopUpCod = document.querySelector("#inputCerrarPopUpCod")
const btnContinuarVendiendoCo = document.querySelector("#btnContinuarVendiendoCo")
inputCerrarPopUpCod.addEventListener("keydown",cerrarPopUpIngreseCodigo)
btnContinuarVendiendoCo.addEventListener("click",cerrarPopUpIngreseCodigo)

const popUpCodigoRepetido = document.querySelector("#popUpCodigoRepetido")
const inputCerrarPopUpCodRep = document.querySelector("#inputCerrarPopUpCodRep")
const btnContinuarVendiendoCod = document.querySelector("#btnContinuarVendiendoCod")
inputCerrarPopUpCodRep.addEventListener("keydown",cerrarPopUpCodigoRep)
btnContinuarVendiendoCod.addEventListener("click",cerrarPopUpCodigoRep)

const popUpIngreseCantidad = document.querySelector("#popUpIngreseCantidad")
const inputCerrarPopUpCant = document.querySelector("#inputCerrarPopUpCant")
const btnContinuarVendiendoCa = document.querySelector("#btnContinuarVendiendoCa")
inputCerrarPopUpCant.addEventListener("keydown",cerrarPopUpIngreseCantidad)
btnContinuarVendiendoCa.addEventListener("click",cerrarPopUpIngreseCantidad)

const popUpIngreseDni = document.querySelector("#popUpIngreseDni")
const inputCerrarPopUpDni = document.querySelector("#inputCerrarPopUpDni")
const btnContinuarVendiendoDn = document.querySelector("#btnContinuarVendiendoDn")
inputCerrarPopUpDni.addEventListener("keydown",cerrarPopUpIngreseDni)
btnContinuarVendiendoDn.addEventListener("click",cerrarPopUpIngreseDni)

const popUpConfirmacionVenta = document.querySelector("#popUpConfirmacionVenta")
const inputCerrarPopUpCV = document.querySelector("#inputCerrarPopUpCV")
const btnContinuarVendiendoCV = document.querySelector("#btnContinuarVendiendoCV")
inputCerrarPopUpCV.addEventListener("keydown",cerrarPopUpConfVenta)
btnContinuarVendiendoCV.addEventListener("click",cerrarPopUpConfVenta)

const popUpIngresarProdATablaNV = document.querySelector("#popUpIngresarProdATablaNV")
const inputCerrarPopUpIPATNV = document.querySelector("#inputCerrarPopUpIPATNV")
const btnIngresarProdATablaNV = document.querySelector("#btnIngresarProdATablaNV")
inputCerrarPopUpIPATNV.addEventListener("keydown",cerrarPopUpIngreseProdATabla)
btnIngresarProdATablaNV.addEventListener("click",cerrarPopUpIngreseProdATabla)


// popUps ventana productos

const popUpCompletarCamposVP = document.querySelector("#popUpCompletarCamposVP")
const inputCerrarPopUpCCVP = document.querySelector("#inputCerrarPopUpCCVP")
const btnCompletarCamposVP = document.querySelector("#btnCompletarCamposVP")
inputCerrarPopUpCCVP.addEventListener("keydown",cerrarPopUpCCVP)
btnCompletarCamposVP.addEventListener("click",cerrarPopUpCCVP)

const popUpProductoYaExiste = document.querySelector("#popUpProductoYaExiste")
const inputCerrarPopUpPYEVP = document.querySelector("#inputCerrarPopUpPYEVP")
const btnProductoYaExisteVP = document.querySelector("#btnProductoYaExisteVP")
inputCerrarPopUpPYEVP.addEventListener("keydown",cerrarPopUpPYEVP)
btnProductoYaExisteVP.addEventListener("click",cerrarPopUpPYEVP)

// popUps ventana clientes

const popUpCompletarCamposVC = document.querySelector("#popUpCompletarCamposVC")
const btnCompletarCamposVC = document.querySelector("#btnCompletarCamposVC")
const inputCerrarPopUpCCVC = document.querySelector("#inputCerrarPopUpCCVC")
inputCerrarPopUpCCVC.addEventListener("keydown",cerrarPopUpCCVC)
btnCompletarCamposVC.addEventListener("click",cerrarPopUpCCVC)

const popUpClienteYaExiste = document.querySelector("#popUpClienteYaExiste")
const btnClienteYaExisteVC = document.querySelector("#btnClienteYaExisteVC")
const inputCerrarPopUpCYEVC = document.querySelector("#inputCerrarPopUpCYEVC")
inputCerrarPopUpCYEVC.addEventListener("keydown",cerrarPopUpCYEVC)
btnClienteYaExisteVC.addEventListener("click",cerrarPopUpCYEVC)

// popUps proveedores

const popUpCompletarCamposVProv = document.querySelector("#popUpCompletarCamposVProv")
const btnCompletarCamposVProv = document.querySelector("#btnCompletarCamposVProv")
const inputCerrarPopUpCCVProv = document.querySelector("#inputCerrarPopUpCCVProv")
inputCerrarPopUpCCVProv.addEventListener("keydown",cerrarPopUpCCVProv)
btnCompletarCamposVProv.addEventListener("click",cerrarPopUpCCVProv)

const popUpProveedorYaExiste = document.querySelector("#popUpProveedorYaExiste")
const btnProveedorYaExisteVProv = document.querySelector("#btnProveedorYaExisteVProv")
const inputCerrarPopUpPYEVProv = document.querySelector("#inputCerrarPopUpPYEVProv")
inputCerrarPopUpPYEVProv.addEventListener("keydown",cerrarPopUpPYEVProv)
btnProveedorYaExisteVProv.addEventListener("click",cerrarPopUpPYEVProv)

// popUps ventana ventas

// fila 1

const popUpDetalleVentaFila1TablaVentas = document.querySelector("#popUpDetalleVentaFila1TablaVentas")

const inputCerrarPopUpDetalleVentaFila1TablaVentas = document.querySelector("#inputCerrarPopUpDetalleVentaFila1TablaVentas")
inputCerrarPopUpDetalleVentaFila1TablaVentas.addEventListener("keydown",cerrarPopUpDetalleVentaFila1TablaVentas)

const tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.
querySelector("#tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")

const btnCerrarPopUpDetalleVentaFila1TablaVentas = document.querySelector("#btnCerrarPopUpDetalleVentaFila1TablaVentas")
btnCerrarPopUpDetalleVentaFila1TablaVentas.addEventListener("click",cerrarPopUpDetalleVentaFila1TablaVentas)

const fila1tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const descrFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#descrFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const cantFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#cantFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const precioFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#precioFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const totalFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#totalFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")

const fila2tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const descrFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#descrFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const cantFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#cantFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const precioFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#precioFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const totalFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#totalFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")

const fila3tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const descrFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#descrFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const cantFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#cantFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const precioFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#precioFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const totalFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#totalFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")

const fila4tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const descrFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#descrFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const cantFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#cantFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const precioFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#precioFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const totalFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#totalFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")

const fila5tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const descrFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#descrFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const cantFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#cantFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const precioFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#precioFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const totalFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas = document.querySelector("#totalFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")


const saldoTotalPopUpDetalleFila1TablaVentas = document.querySelector("#saldoTotalPopUpDetalleFila1TablaVentas")

// fila 2

const popUpDetalleVentaFila2TablaVentas = document.querySelector("#popUpDetalleVentaFila2TablaVentas")

const inputCerrarPopUpDetalleVentaFila2TablaVentas = document.querySelector("#inputCerrarPopUpDetalleVentaFila2TablaVentas")
inputCerrarPopUpDetalleVentaFila2TablaVentas.addEventListener("keydown",cerrarPopUpDetalleVentaFila2TablaVentas)

const tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.
querySelector("#tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")

const btnCerrarPopUpDetalleVentaFila2TablaVentas = document.querySelector("#btnCerrarPopUpDetalleVentaFila2TablaVentas")
btnCerrarPopUpDetalleVentaFila2TablaVentas.addEventListener("click",cerrarPopUpDetalleVentaFila2TablaVentas)

const fila1tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const descrFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#descrFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const cantFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#cantFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const precioFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#precioFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const totalFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#totalFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")

const fila2tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const descrFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#descrFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const cantFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#cantFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const precioFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#precioFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const totalFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#totalFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")

const fila3tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const descrFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#descrFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const cantFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#cantFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const precioFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#precioFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const totalFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#totalFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")

const fila4tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas")
const codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const descrFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#descrFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const cantFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#cantFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const precioFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#precioFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const totalFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#totalFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")

const fila5tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const descrFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#descrFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const cantFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#cantFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const precioFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#precioFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")
const totalFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas = document.querySelector("#totalFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas")


const saldoTotalPopUpDetalleFila2TablaVentas = document.querySelector("#saldoTotalPopUpDetalleFila2TablaVentas")

// fila 3

const popUpDetalleVentaFila3TablaVentas = document.querySelector("#popUpDetalleVentaFila3TablaVentas")

const inputCerrarPopUpDetalleVentaFila3TablaVentas = document.querySelector("#inputCerrarPopUpDetalleVentaFila3TablaVentas")
inputCerrarPopUpDetalleVentaFila3TablaVentas.addEventListener("keydown",cerrarPopUpDetalleVentaFila3TablaVentas)

const tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.
querySelector("#tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")

const btnCerrarPopUpDetalleVentaFila3TablaVentas = document.querySelector("#btnCerrarPopUpDetalleVentaFila3TablaVentas")
btnCerrarPopUpDetalleVentaFila3TablaVentas.addEventListener("click",cerrarPopUpDetalleVentaFila3TablaVentas)

const fila1tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const descrFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#descrFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const cantFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#cantFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const precioFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#precioFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const totalFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#totalFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")

const fila2tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const descrFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#descrFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const cantFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#cantFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const precioFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#precioFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const totalFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#totalFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")

const fila3tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const descrFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#descrFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const cantFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#cantFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const precioFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#precioFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const totalFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#totalFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")

const fila4tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const descrFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#descrFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const cantFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#cantFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const precioFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#precioFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const totalFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#totalFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")

const fila5tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const descrFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#descrFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const cantFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#cantFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const precioFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#precioFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")
const totalFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas = document.querySelector("#totalFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas")


const saldoTotalPopUpDetalleFila3TablaVentas = document.querySelector("#saldoTotalPopUpDetalleFila3TablaVentas")

// fila 4

const popUpDetalleVentaFila4TablaVentas = document.querySelector("#popUpDetalleVentaFila4TablaVentas")

const inputCerrarPopUpDetalleVentaFila4TablaVentas = document.querySelector("#inputCerrarPopUpDetalleVentaFila4TablaVentas")
inputCerrarPopUpDetalleVentaFila4TablaVentas.addEventListener("keydown",cerrarPopUpDetalleVentaFila4TablaVentas)

const tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.
querySelector("#tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")

const btnCerrarPopUpDetalleVentaFila4TablaVentas = document.querySelector("#btnCerrarPopUpDetalleVentaFila4TablaVentas")
btnCerrarPopUpDetalleVentaFila4TablaVentas.addEventListener("click",cerrarPopUpDetalleVentaFila4TablaVentas)

const fila1tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const descrFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#descrFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const cantFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#cantFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const precioFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#precioFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const totalFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#totalFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")

const fila2tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const descrFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#descrFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const cantFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#cantFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const precioFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#precioFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const totalFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#totalFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")

const fila3tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const descrFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#descrFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const cantFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#cantFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const precioFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#precioFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const totalFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#totalFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")

const fila4tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const descrFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#descrFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const cantFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#cantFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const precioFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#precioFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const totalFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#totalFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")

const fila5tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const descrFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#descrFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const cantFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#cantFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const precioFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#precioFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")
const totalFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas = document.querySelector("#totalFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas")


const saldoTotalPopUpDetalleFila4TablaVentas = document.querySelector("#saldoTotalPopUpDetalleFila4TablaVentas")

// fila 5

const popUpDetalleVentaFila5TablaVentas = document.querySelector("#popUpDetalleVentaFila5TablaVentas")

const inputCerrarPopUpDetalleVentaFila5TablaVentas = document.querySelector("#inputCerrarPopUpDetalleVentaFila5TablaVentas")
inputCerrarPopUpDetalleVentaFila5TablaVentas.addEventListener("keydown",cerrarPopUpDetalleVentaFila5TablaVentas)

const tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.
querySelector("#tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")

const btnCerrarPopUpDetalleVentaFila5TablaVentas = document.querySelector("#btnCerrarPopUpDetalleVentaFila5TablaVentas")
btnCerrarPopUpDetalleVentaFila5TablaVentas.addEventListener("click",cerrarPopUpDetalleVentaFila5TablaVentas)

const fila1tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const descrFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#descrFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const cantFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#cantFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const precioFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#precioFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const totalFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#totalFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")

const fila2tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const descrFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#descrFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const cantFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#cantFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const precioFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#precioFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const totalFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#totalFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")

const fila3tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const descrFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#descrFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const cantFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#cantFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const precioFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#precioFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const totalFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#totalFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")

const fila4tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const descrFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#descrFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const cantFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#cantFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const precioFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#precioFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const totalFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#totalFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")

const fila5tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const descrFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#descrFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const cantFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#cantFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const precioFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#precioFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")
const totalFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas = document.querySelector("#totalFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas")


const saldoTotalPopUpDetalleFila5TablaVentas = document.querySelector("#saldoTotalPopUpDetalleFila5TablaVentas")

// Arrays

const listaProductosIngresadosNuevaVenta = []

const listaProductos = []

const listaVentas = []

const saldosTotalesNuevaVenta = []

const saldosTotalesVentas = []

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

function cerrarPopUpIngreseCodigo() {
    popUpIngreseUnCodigo.style.display = 'none'
    mostrarVentanaNuevaVenta()
}

function cerrarPopUpCodigoRep() {
    popUpCodigoRepetido.style.display = 'none'
    inputCodigoProductoNV.focus()
}

function cerrarPopUpIngreseCantidad() {
    popUpIngreseCantidad.style.display = 'none'
    inputCantidadNV.focus()
}

function cerrarPopUpIngreseDni() {
    popUpIngreseDni.style.display = 'none'
    inputDniNV.focus()
}

function cerrarPopUpConfVenta() {
    popUpConfirmacionVenta.style.display = 'none'
    mostrarVentanaNuevaVenta()
}

function cerrarPopUpIngreseProdATabla() {
    popUpIngresarProdATablaNV.style.display = 'none'
    mostrarVentanaNuevaVenta()
}

function cerrarPopUpCCVP() {
    popUpCompletarCamposVP.style.display = 'none'
    inputCodigoProductoVP.focus()
}

function cerrarPopUpPYEVP() {
    popUpProductoYaExiste.style.display = 'none'
    inputCodigoProductoVP.focus()
}

function cerrarPopUpCCVC() {
    popUpCompletarCamposVC.style.display = 'none'
    inputNombreClienteVC.focus()
}

function cerrarPopUpCYEVC() {
    popUpClienteYaExiste.style.display = 'none'
    inputNombreClienteVC.focus()
}

function cerrarPopUpCCVProv() {
    popUpCompletarCamposVProv.style.display = 'none'
    inputRazonSocialVProv.focus()
}

function cerrarPopUpPYEVProv() {
    popUpProveedorYaExiste.style.display = 'none'
    inputRazonSocialVProv.focus()
}

// nueva venta

function setearProductoNuevaVenta(e) {

    

    if(e.keyCode === 13) {

        if (inputCodigoProductoNV.value == ``) {

            Toastify({
                text: "Debes ingresar un producto a la tabla",
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
    
        }

        fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if (inputCodigoProductoNV.value == producto.codigo) {
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

            Toastify({
                text: "Debes ingresar la cantidad",
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();

            /* popUpIngreseCantidad.style.display = 'flex' 
            inputCerrarPopUpCant.style.display = 'flex'
            inputCerrarPopUpCant.focus() */
    
        } else if ( (inputCodigoProductoNV.value == codigoFila1TablaProductosIngresados.textContent) || (inputCodigoProductoNV.value == codigoFila2TablaProductosIngresados.textContent) || (inputCodigoProductoNV.value == codigoFila3TablaProductosIngresados.textContent) || (inputCodigoProductoNV.value == codigoFila4TablaProductosIngresados.textContent) || (inputCodigoProductoNV.value == codigoFila5TablaProductosIngresados.textContent) ) {


            Toastify({
                text: "Ya existe este producto en la lista",
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
              inputCerrarPopUpCodRep.focus()

            /* popUpCodigoRepetido.style.display = 'flex'
            inputCerrarPopUpCodRep.style.display = 'flex'
            inputCerrarPopUpCodRep.focus() */

        } else if(codigoFila1TablaProductosIngresados.textContent == "") {

            document.querySelector("#fila1TablaProductosIngresados").style.display = "grid"
            codigoFila1TablaProductosIngresados.textContent = inputCodigoProductoNV.value
            descrFila1TablaProductosIngresados.textContent = inputBuscarProductoNV.value
            cantFila1TablaProductosIngresados.textContent = inputCantidadNV.value
            precioFila1TablaProductosIngresados.textContent = inputPrecioNV.innerText
            totalFila1TablaProductosIngresados.textContent = inputCantidadNV.value * inputPrecioNV.innerText

            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            localStorage.setItem("Producto Nuevo",JSON.stringify(prod))

            saldosTotalesNuevaVenta.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldoTotalNuevaVenta()

            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()

        } else if(codigoFila2TablaProductosIngresados.textContent == "") {

            document.querySelector("#fila2TablaProductosIngresados").style.display = "grid"
            codigoFila2TablaProductosIngresados.textContent = inputCodigoProductoNV.value
            descrFila2TablaProductosIngresados.textContent = inputBuscarProductoNV.value
            cantFila2TablaProductosIngresados.textContent = inputCantidadNV.value
            precioFila2TablaProductosIngresados.textContent = inputPrecioNV.innerText
            totalFila2TablaProductosIngresados.textContent = inputCantidadNV.value * inputPrecioNV.innerText

            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            localStorage.setItem("Producto Nuevo",JSON.stringify(prod))

            saldosTotalesNuevaVenta.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldoTotalNuevaVenta()

            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()

        } else if(codigoFila3TablaProductosIngresados.textContent == "") {

            document.querySelector("#fila3TablaProductosIngresados").style.display = "grid"
            codigoFila3TablaProductosIngresados.textContent = inputCodigoProductoNV.value
            descrFila3TablaProductosIngresados.textContent = inputBuscarProductoNV.value
            cantFila3TablaProductosIngresados.textContent = inputCantidadNV.value
            precioFila3TablaProductosIngresados.textContent = inputPrecioNV.innerText
            totalFila3TablaProductosIngresados.textContent = inputCantidadNV.value * inputPrecioNV.innerText

            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)            

            localStorage.setItem("Producto Nuevo",JSON.stringify(prod))

            saldosTotalesNuevaVenta.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldoTotalNuevaVenta()

            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()

        } else if(codigoFila4TablaProductosIngresados.textContent == "") {

            document.querySelector("#fila4TablaProductosIngresados").style.display = "grid"
            codigoFila4TablaProductosIngresados.textContent = inputCodigoProductoNV.value
            descrFila4TablaProductosIngresados.textContent = inputBuscarProductoNV.value
            cantFila4TablaProductosIngresados.textContent = inputCantidadNV.value
            precioFila4TablaProductosIngresados.textContent = inputPrecioNV.innerText
            totalFila4TablaProductosIngresados.textContent = inputCantidadNV.value * inputPrecioNV.innerText

            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)           
            
            localStorage.setItem("Producto Nuevo",JSON.stringify(prod))

            saldosTotalesNuevaVenta.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldoTotalNuevaVenta()

            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()

        } else if(codigoFila5TablaProductosIngresados.textContent == "") {

            document.querySelector("#fila5TablaProductosIngresados").style.display = "grid"
            codigoFila5TablaProductosIngresados.textContent = inputCodigoProductoNV.value
            descrFila5TablaProductosIngresados.textContent = inputBuscarProductoNV.value
            cantFila5TablaProductosIngresados.textContent = inputCantidadNV.value
            precioFila5TablaProductosIngresados.textContent = inputPrecioNV.innerText
            totalFila5TablaProductosIngresados.textContent = inputCantidadNV.value * inputPrecioNV.innerText

            const prod = new ProductoIngresado (inputCodigoProductoNV.value,inputBuscarProductoNV.value,inputCantidadNV.value,inputPrecioNV.innerText,inputPrecioNV.innerText * inputCantidadNV.value)
            listaProductosIngresadosNuevaVenta.push(prod)         
            
            localStorage.setItem("Producto Nuevo",JSON.stringify(prod))

            saldosTotalesNuevaVenta.push(inputCantidadNV.value * inputPrecioNV.innerText)
            mostrarSaldoTotalNuevaVenta()

            limpiarImputsNuevaVenta()
            inputCodigoProductoNV.focus()

        }
         

    }

}

function borrarProdIngresado() {

    if (inputCodigoProductoNV.value == codigoFila1TablaProductosIngresados.textContent) {
        document.querySelector("#fila1TablaProductosIngresados").style.display = "none"
        codigoFila1TablaProductosIngresados.textContent = ""
        saldoTotalNV.innerText = saldoTotalNV.innerText - totalFila1TablaProductosIngresados.textContent
        saldosTotalesNuevaVenta.pop()
        limpiarImputsNuevaVenta()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoFila2TablaProductosIngresados.textContent) {
        document.querySelector("#fila2TablaProductosIngresados").style.display = "none"
        codigoFila2TablaProductosIngresados.textContent = ""
        saldoTotalNV.innerText = saldoTotalNV.innerText - totalFila2TablaProductosIngresados.textContent
        limpiarImputsNuevaVenta()
        saldosTotalesNuevaVenta.pop()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoFila3TablaProductosIngresados.textContent) {
        document.querySelector("#fila3TablaProductosIngresados").style.display = "none"
        codigoFila3TablaProductosIngresados.textContent = ""
        saldoTotalNV.innerText = saldoTotalNV.innerText - totalFila3TablaProductosIngresados.textContent
        limpiarImputsNuevaVenta()
        saldosTotalesNuevaVenta.pop()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoFila4TablaProductosIngresados.textContent) {
        document.querySelector("#fila4TablaProductosIngresados").style.display = "none"
        codigoFila4TablaProductosIngresados.textContent = ""
        saldoTotalNV.innerText = saldoTotalNV.innerText - totalFila4TablaProductosIngresados.textContent
        limpiarImputsNuevaVenta()
        saldosTotalesNuevaVenta.pop()
        inputCodigoProductoNV.focus()
    } else if (inputCodigoProductoNV.value == codigoFila5TablaProductosIngresados.textContent) {
        document.querySelector("#fila5TablaProductosIngresados").style.display = "none"
        codigoFila5TablaProductosIngresados.textContent = ""
        saldoTotalNV.innerText = saldoTotalNV.innerText - totalFila5TablaProductosIngresados.textContent
        limpiarImputsNuevaVenta()
        saldosTotalesNuevaVenta.pop()
        inputCodigoProductoNV.focus()
    }

}

function setearNombreCliente(e) {

    if(e.keyCode === 13) {

        fetch('./clientes.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((cliente) => {

            if (inputDniNV.value == cliente.dni) {

                inputNombreNV.innerText = cliente.nombre

            }
            

        })

        })

    }

}

function habilitarSelectCuotas() {

    const pago = selectTipoPagoNV.value
    
    if (pago === 'Tipo de Pago') {
        selectCantCuotasNV.setAttribute('disabled', 'true')
        selectCantCuotasNV.value = "Cant de Cuotas"
    } else if (pago === 'Efectivo') {
        selectCantCuotasNV.setAttribute('disabled', 'true')
        selectCantCuotasNV.value = "Cant de Cuotas"
    } else if (pago === 'Tarjeta de Debito') {
        selectCantCuotasNV.setAttribute('disabled', 'true')
        selectCantCuotasNV.value = "Cant de Cuotas"
    } else if (pago === 'Tarjeta de Credito') {
        selectCantCuotasNV.removeAttribute('disabled', 'true')
    }

}

function mostrarSaldoTotalNuevaVenta() {

    saldoTotalNV.innerText = saldosTotalesNuevaVenta.reduce((acum, elemento) => acum + elemento,0)
    
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

function limpiarImputsVentanaPago() {

    inputDniNV.value = ""
    inputNombreNV.innerText = ""
    selectTipoPagoNV.value = "Tipo de Pago"
    selectCantCuotasNV.value = "Cant de Cuotas"
    saldoTotalNV.textContent = ""

}

function limpiarTablaProductosIngresados() {

    document.querySelector("#fila1TablaProductosIngresados").style.display = "none"
    codigoFila1TablaProductosIngresados.textContent = ""

    document.querySelector("#fila2TablaProductosIngresados").style.display = "none"
    codigoFila2TablaProductosIngresados.textContent = ""

    document.querySelector("#fila3TablaProductosIngresados").style.display = "none"
    codigoFila3TablaProductosIngresados.textContent = ""

    document.querySelector("#fila4TablaProductosIngresados").style.display = "none"
    codigoFila4TablaProductosIngresados.textContent = ""

    document.querySelector("#fila5TablaProductosIngresados").style.display = "none"
    codigoFila5TablaProductosIngresados.textContent = ""

}

function confirmarVenta() {

    if (codigoFila1TablaProductosIngresados.textContent == "") {

        Toastify({
            text: "Debes ingresar un producto a la tabla",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

          inputCerrarPopUpIPATNV.focus()
 
        /* popUpIngresarProdATablaNV.style.display = 'flex'
        inputCerrarPopUpIPATNV.style.display = 'flex'
        inputCerrarPopUpIPATNV.focus() */

    } else {

        saldosTotalesVentas.push(Number(saldoTotalNV.textContent))
        mostrarSaldoTotalVentasVV()
        guardarDetalle()
        guardarVenta()
        
        limpiarImputsVentanaPago()
        limpiarImputsNuevaVenta()   
        limpiarTablaProductosIngresados()

        saldosTotalesNuevaVenta.length = 0;


        Toastify({
            text: "La venta se registró con éxito",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        /* popUpConfirmacionVenta.style.display = 'flex'
        inputCerrarPopUpCV.style.display = 'flex'
        inputCerrarPopUpCV.focus() */
    }

}

function guardarVenta() {

    if (codigoFila1TablaVentas.textContent == "") {

        fila1TablaVentas.style.display = "grid"
        codigoFila1TablaVentas.textContent = "1"
        clienteFila1TablaVentas.textContent =  inputNombreNV.innerText
        if (inputNombreNV.textContent == "") {
            clienteFila1TablaVentas.textContent = "-"
        }
        if (selectTipoPagoNV.value == "Tipo de Pago") {
            tipoPagoFila1TablaVentas.textContent = "-"
        } else {
            tipoPagoFila1TablaVentas.textContent = selectTipoPagoNV.value
        }
        
        saldoTotalVentaFila1TablaVentas.textContent = saldoTotalNV.innerText
        

    } else if (codigoFila2TablaVentas.textContent == "") {

        fila2TablaVentas.style.display = "grid"
        codigoFila2TablaVentas.textContent = "2"
        clienteFila2TablaVentas.textContent =  inputNombreNV.innerText
        if (inputNombreNV.textContent == "") {
            clienteFila2TablaVentas.textContent = "-"
        }
        if (selectTipoPagoNV.value == "Tipo de Pago") {
            tipoPagoFila2TablaVentas.textContent = "-"
        } else {
            tipoPagoFila2TablaVentas.textContent = selectTipoPagoNV.value
        }
        saldoTotalVentaFila2TablaVentas.textContent = saldoTotalNV.innerText


    } else if (codigoFila3TablaVentas.textContent == "") {

        fila3TablaVentas.style.display = "grid"
        codigoFila3TablaVentas.textContent = "3"
        clienteFila3TablaVentas.textContent =  inputNombreNV.innerText
        if (inputNombreNV.textContent == "") {
            clienteFila3TablaVentas.textContent = "-"
        }
        if (selectTipoPagoNV.value == "Tipo de Pago") {
            tipoPagoFila3TablaVentas.textContent = "-"
        } else {
            tipoPagoFila3TablaVentas.textContent = selectTipoPagoNV.value
        }
        saldoTotalVentaFila3TablaVentas.textContent = saldoTotalNV.innerText


    } else if (codigoFila4TablaVentas.textContent == "") {

        fila4TablaVentas.style.display = "grid"
        codigoFila4TablaVentas.textContent = "4"
        clienteFila4TablaVentas.textContent =  inputNombreNV.innerText
        if (inputNombreNV.textContent == "") {
            clienteFila4TablaVentas.textContent = "-"
        }
        if (selectTipoPagoNV.value == "Tipo de Pago") {
            tipoPagoFila4TablaVentas.textContent = "-"
        } else {
            tipoPagoFila4TablaVentas.textContent = selectTipoPagoNV.value
        }
        saldoTotalVentaFila4TablaVentas.textContent = saldoTotalNV.innerText


    } else if (codigoFila5TablaVentas.textContent == "") {

        fila5TablaVentas.style.display = "grid"
        codigoFila5TablaVentas.textContent = "5"
        clienteFila5TablaVentas.textContent =  inputNombreNV.innerText
        if (inputNombreNV.textContent == "") {
            clienteFila5TablaVentas.textContent = "-"
        }
        if (selectTipoPagoNV.value == "Tipo de Pago") {
            tipoPagoFila5TablaVentas.textContent = "-"
        } else {
            tipoPagoFila5TablaVentas.textContent = selectTipoPagoNV.value
        }
        saldoTotalVentaFila5TablaVentas.textContent = saldoTotalNV.innerText


    }

}

function guardarDetalle() {

    if (codigoFila1TablaVentas.textContent == "") {

        for (producto of listaProductosIngresadosNuevaVenta)  {

            if (codigoFila1TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas").style.display = "grid"
                codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = producto.codigo
                descrFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = descrFila1TablaProductosIngresados.textContent
                cantFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = cantFila1TablaProductosIngresados.textContent
                precioFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = precioFila1TablaProductosIngresados.textContent
                totalFila1TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = totalFila1TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila1TablaVentas.textContent = saldoTotalNV.textContent
        
            }
            
            if (codigoFila2TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas").style.display = "grid"
                codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = producto.codigo
                descrFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = descrFila2TablaProductosIngresados.textContent
                cantFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = cantFila2TablaProductosIngresados.textContent
                precioFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = precioFila2TablaProductosIngresados.textContent
                totalFila2TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = totalFila2TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila1TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila3TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas").style.display = "grid"
                codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = producto.codigo
                descrFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = descrFila3TablaProductosIngresados.textContent
                cantFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = cantFila3TablaProductosIngresados.textContent
                precioFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = precioFila3TablaProductosIngresados.textContent
                totalFila3TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = totalFila3TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila1TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila4TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas").style.display = "grid"
                codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = producto.codigo
                descrFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = descrFila4TablaProductosIngresados.textContent
                cantFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = cantFila4TablaProductosIngresados.textContent
                precioFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = precioFila4TablaProductosIngresados.textContent
                totalFila4TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = totalFila4TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila1TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila5TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas").style.display = "grid"
                codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = producto.codigo
                descrFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = descrFila5TablaProductosIngresados.textContent
                cantFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = cantFila5TablaProductosIngresados.textContent
                precioFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = precioFila5TablaProductosIngresados.textContent
                totalFila5TablaProductosIngresadosPopUpDetalleVentaFila1TablaVentas.textContent = totalFila5TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila1TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
        }  

    } else if (codigoFila2TablaVentas.textContent == "") {

        for (producto of listaProductosIngresadosNuevaVenta)  {

            if (codigoFila1TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas").style.display = "grid"
                codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = producto.codigo
                descrFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = descrFila1TablaProductosIngresados.textContent
                cantFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = cantFila1TablaProductosIngresados.textContent
                precioFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = precioFila1TablaProductosIngresados.textContent
                totalFila1TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = totalFila1TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila2TablaVentas.textContent = saldoTotalNV.textContent
        
            }
            
            if (codigoFila2TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas").style.display = "grid"
                codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = producto.codigo
                descrFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = descrFila2TablaProductosIngresados.textContent
                cantFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = cantFila2TablaProductosIngresados.textContent
                precioFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = precioFila2TablaProductosIngresados.textContent
                totalFila2TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = totalFila2TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila2TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila3TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas").style.display = "grid"
                codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = producto.codigo
                descrFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = descrFila3TablaProductosIngresados.textContent
                cantFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = cantFila3TablaProductosIngresados.textContent
                precioFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = precioFila3TablaProductosIngresados.textContent
                totalFila3TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = totalFila3TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila2TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila4TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas").style.display = "grid"
                codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = producto.codigo
                descrFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = descrFila4TablaProductosIngresados.textContent
                cantFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = cantFila4TablaProductosIngresados.textContent
                precioFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = precioFila4TablaProductosIngresados.textContent
                totalFila4TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = totalFila4TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila2TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila5TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas").style.display = "grid"
                codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = producto.codigo
                descrFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = descrFila5TablaProductosIngresados.textContent
                cantFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = cantFila5TablaProductosIngresados.textContent
                precioFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = precioFila5TablaProductosIngresados.textContent
                totalFila5TablaProductosIngresadosPopUpDetalleVentaFila2TablaVentas.textContent = totalFila5TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila2TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
        }  

    } else if (codigoFila3TablaVentas.textContent == "") {

        for (producto of listaProductosIngresadosNuevaVenta)  {

            if (codigoFila1TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas").style.display = "grid"
                codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = producto.codigo
                descrFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = descrFila1TablaProductosIngresados.textContent
                cantFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = cantFila1TablaProductosIngresados.textContent
                precioFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = precioFila1TablaProductosIngresados.textContent
                totalFila1TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = totalFila1TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila3TablaVentas.textContent = saldoTotalNV.textContent
        
            }
            
            if (codigoFila2TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas").style.display = "grid"
                codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = producto.codigo
                descrFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = descrFila2TablaProductosIngresados.textContent
                cantFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = cantFila2TablaProductosIngresados.textContent
                precioFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = precioFila2TablaProductosIngresados.textContent
                totalFila2TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = totalFila2TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila3TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila3TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas").style.display = "grid"
                codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = producto.codigo
                descrFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = descrFila3TablaProductosIngresados.textContent
                cantFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = cantFila3TablaProductosIngresados.textContent
                precioFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = precioFila3TablaProductosIngresados.textContent
                totalFila3TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = totalFila3TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila3TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila4TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas").style.display = "grid"
                codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = producto.codigo
                descrFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = descrFila4TablaProductosIngresados.textContent
                cantFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = cantFila4TablaProductosIngresados.textContent
                precioFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = precioFila4TablaProductosIngresados.textContent
                totalFila4TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = totalFila4TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila3TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila5TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas").style.display = "grid"
                codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = producto.codigo
                descrFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = descrFila5TablaProductosIngresados.textContent
                cantFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = cantFila5TablaProductosIngresados.textContent
                precioFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = precioFila5TablaProductosIngresados.textContent
                totalFila5TablaProductosIngresadosPopUpDetalleVentaFila3TablaVentas.textContent = totalFila5TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila3TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
        }  

    } else if (codigoFila4TablaVentas.textContent == "") {

        for (producto of listaProductosIngresadosNuevaVenta)  {

            if (codigoFila1TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas").style.display = "grid"
                codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = producto.codigo
                descrFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = descrFila1TablaProductosIngresados.textContent
                cantFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = cantFila1TablaProductosIngresados.textContent
                precioFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = precioFila1TablaProductosIngresados.textContent
                totalFila1TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = totalFila1TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila4TablaVentas.textContent = saldoTotalNV.textContent
        
            }
            
            if (codigoFila2TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas").style.display = "grid"
                codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = producto.codigo
                descrFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = descrFila2TablaProductosIngresados.textContent
                cantFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = cantFila2TablaProductosIngresados.textContent
                precioFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = precioFila2TablaProductosIngresados.textContent
                totalFila2TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = totalFila2TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila4TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila3TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas").style.display = "grid"
                codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = producto.codigo
                descrFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = descrFila3TablaProductosIngresados.textContent
                cantFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = cantFila3TablaProductosIngresados.textContent
                precioFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = precioFila3TablaProductosIngresados.textContent
                totalFila3TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = totalFila3TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila4TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila4TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas").style.display = "grid"
                codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = producto.codigo
                descrFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = descrFila4TablaProductosIngresados.textContent
                cantFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = cantFila4TablaProductosIngresados.textContent
                precioFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = precioFila4TablaProductosIngresados.textContent
                totalFila4TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = totalFila4TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila4TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila5TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas").style.display = "grid"
                codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = producto.codigo
                descrFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = descrFila5TablaProductosIngresados.textContent
                cantFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = cantFila5TablaProductosIngresados.textContent
                precioFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = precioFila5TablaProductosIngresados.textContent
                totalFila5TablaProductosIngresadosPopUpDetalleVentaFila4TablaVentas.textContent = totalFila5TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila4TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
        }  

    } else if (codigoFila5TablaVentas.textContent == "") {

        for (producto of listaProductosIngresadosNuevaVenta)  {

            if (codigoFila1TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila1tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas").style.display = "grid"
                codigoFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = producto.codigo
                descrFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = descrFila1TablaProductosIngresados.textContent
                cantFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = cantFila1TablaProductosIngresados.textContent
                precioFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = precioFila1TablaProductosIngresados.textContent
                totalFila1TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = totalFila1TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila5TablaVentas.textContent = saldoTotalNV.textContent
        
            }
            
            if (codigoFila2TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila2tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas").style.display = "grid"
                codigoFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = producto.codigo
                descrFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = descrFila2TablaProductosIngresados.textContent
                cantFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = cantFila2TablaProductosIngresados.textContent
                precioFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = precioFila2TablaProductosIngresados.textContent
                totalFila2TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = totalFila2TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila5TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila3TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila3tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas").style.display = "grid"
                codigoFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = producto.codigo
                descrFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = descrFila3TablaProductosIngresados.textContent
                cantFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = cantFila3TablaProductosIngresados.textContent
                precioFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = precioFila3TablaProductosIngresados.textContent
                totalFila3TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = totalFila3TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila5TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila4TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila4tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas").style.display = "grid"
                codigoFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = producto.codigo
                descrFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = descrFila4TablaProductosIngresados.textContent
                cantFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = cantFila4TablaProductosIngresados.textContent
                precioFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = precioFila4TablaProductosIngresados.textContent
                totalFila4TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = totalFila4TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila5TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
            if (codigoFila5TablaProductosIngresados.textContent == producto.codigo) {
    
                document.querySelector("#fila5tablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas").style.display = "grid"
                codigoFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = producto.codigo
                descrFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = descrFila5TablaProductosIngresados.textContent
                cantFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = cantFila5TablaProductosIngresados.textContent
                precioFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = precioFila5TablaProductosIngresados.textContent
                totalFila5TablaProductosIngresadosPopUpDetalleVentaFila5TablaVentas.textContent = totalFila5TablaProductosIngresados.textContent
        
                saldoTotalPopUpDetalleFila5TablaVentas.textContent = saldoTotalNV.textContent
                
            }
    
        }  

    }

         

}

function seleccTablaProductosIngresadosFila1() {

    inputBuscarProductoNV.value = descrFila1TablaProductosIngresados.textContent
    inputCodigoProductoNV.value = codigoFila1TablaProductosIngresados.textContent
    inputCantidadNV.value = cantFila1TablaProductosIngresados.textContent
    inputPrecioNV.innerText = precioFila1TablaProductosIngresados.textContent

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if(codigoFila1TablaProductosIngresados.textContent == producto.codigo) {
    
                inputStockDispNV.innerText = producto.stock
        
            }
            

        })

    })
    

}

function seleccTablaProductosIngresadosFila2() {
    
    inputBuscarProductoNV.value = descrFila2TablaProductosIngresados.textContent
    inputCodigoProductoNV.value = codigoFila2TablaProductosIngresados.textContent
    inputCantidadNV.value = cantFila2TablaProductosIngresados.textContent
    inputPrecioNV.innerText = precioFila2TablaProductosIngresados.textContent

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if(codigoFila2TablaProductosIngresados.textContent == producto.codigo) {
    
                inputStockDispNV.innerText = producto.stock
        
            }
            

        })

    })

}

function seleccTablaProductosIngresadosFila3() {
   
    inputBuscarProductoNV.value = descrFila3TablaProductosIngresados.textContent
    inputCodigoProductoNV.value = codigoFila3TablaProductosIngresados.textContent
    inputCantidadNV.value = cantFila3TablaProductosIngresados.textContent
    inputPrecioNV.innerText = precioFila3TablaProductosIngresados.textContent

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if(codigoFila3TablaProductosIngresados.textContent == producto.codigo) {
    
                inputStockDispNV.innerText = producto.stock
        
            }
            

        })

    })

}

function seleccTablaProductosIngresadosFila4() {
    
    inputBuscarProductoNV.value = descrFila4TablaProductosIngresados.textContent
    inputCodigoProductoNV.value = codigoFila4TablaProductosIngresados.textContent
    inputCantidadNV.value = cantFila4TablaProductosIngresados.textContent
    inputPrecioNV.innerText = precioFila4TablaProductosIngresados.textContent

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if(codigoFila4TablaProductosIngresados.textContent == producto.codigo) {
    
                inputStockDispNV.innerText = producto.stock
        
            }
            

        })

    })

}

function seleccTablaProductosIngresadosFila5() {
 
    inputBuscarProductoNV.value = descrFila5TablaProductosIngresados.textContent
    inputCodigoProductoNV.value = codigoFila5TablaProductosIngresados.textContent
    inputCantidadNV.value = cantFila5TablaProductosIngresados.textContent
    inputPrecioNV.innerText = precioFila5TablaProductosIngresados.textContent

    fetch('./productos.json')
        .then( (res) => res.json())
        .then( (data) => { data.forEach((producto) => {

            if(codigoFila5TablaProductosIngresados.textContent == producto.codigo) {
    
                inputStockDispNV.innerText = producto.stock
        
            }
            

        })

    })

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

function guardarProductoVP() {

    if ( (inputCodigoProductoVP.value == "") || (inputDescrProductoVP.value == "") || (inputPrecioProductoVP.value == "") || (inputStockProductoVP.value == "") || (inputProvProductoVP.value == "") ) {


        Toastify({
            text: "Debes completar todos los campos",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        /* popUpCompletarCamposVP.style.display = "flex"
        inputCerrarPopUpCCVP.style.display = "flex"
        inputCerrarPopUpCCVP.focus() */

    } else if ( (inputCodigoProductoVP.value == codigoFila1TablaProductos.textContent) || (inputCodigoProductoVP.value == codigoFila2TablaProductos.textContent) || (inputCodigoProductoVP.value == codigoFila3TablaProductos.textContent) || (inputCodigoProductoVP.value == codigoFila4TablaProductos.textContent) || (inputCodigoProductoVP.value == codigoFila5TablaProductos.textContent) ) {

        Toastify({
            text: "El producto ya está registrado",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        /* popUpProductoYaExiste.style.display = "flex"
        inputCerrarPopUpPYEVP.style.display = "flex"
        inputCerrarPopUpPYEVP.focus() */


    } else if (codigoFila1TablaProductos.textContent == "")  {

        document.querySelector("#fila1TablaProductos").style.display = "grid"
        codigoFila1TablaProductos.textContent = inputCodigoProductoVP.value     
        descrFila1TablaProductos.textContent = inputDescrProductoVP.value     
        precioFila1TablaProductos.textContent = inputPrecioProductoVP.value     
        stockFila1TablaProductos.textContent = inputStockProductoVP.value     
        provFila1TablaProductos.textContent = inputProvProductoVP.value 
        
        listaProductos.push({codigo: inputCodigoProductoVP.value,descripcion: inputDescrProductoVP.value, precio: inputPrecioProductoVP.value, stock: inputStockProductoVP.value, proveedor: inputProvProductoVP.value}) 
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    } else if (codigoFila2TablaProductos.textContent == "") {

        document.querySelector("#fila2TablaProductos").style.display = "grid"
        codigoFila2TablaProductos.textContent = inputCodigoProductoVP.value     
        descrFila2TablaProductos.textContent = inputDescrProductoVP.value     
        precioFila2TablaProductos.textContent = inputPrecioProductoVP.value     
        stockFila2TablaProductos.textContent = inputStockProductoVP.value     
        provFila2TablaProductos.textContent = inputProvProductoVP.value 
        
        listaProductos.push({codigo: inputCodigoProductoVP.value,descripcion: inputDescrProductoVP.value, precio: inputPrecioProductoVP.value, stock: inputStockProductoVP.value, proveedor: inputProvProductoVP.value}) 
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    } else if (codigoFila3TablaProductos.textContent == "") {

        document.querySelector("#fila3TablaProductos").style.display = "grid"
        codigoFila3TablaProductos.textContent = inputCodigoProductoVP.value     
        descrFila3TablaProductos.textContent = inputDescrProductoVP.value     
        precioFila3TablaProductos.textContent = inputPrecioProductoVP.value     
        stockFila3TablaProductos.textContent = inputStockProductoVP.value     
        provFila3TablaProductos.textContent = inputProvProductoVP.value 
        
        listaProductos.push({codigo: inputCodigoProductoVP.value,descripcion: inputDescrProductoVP.value, precio: inputPrecioProductoVP.value, stock: inputStockProductoVP.value, proveedor: inputProvProductoVP.value}) 
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    } else if (codigoFila4TablaProductos.textContent == "") {

        document.querySelector("#fila4TablaProductos").style.display = "grid"
        codigoFila4TablaProductos.textContent = inputCodigoProductoVP.value     
        descrFila4TablaProductos.textContent = inputDescrProductoVP.value     
        precioFila4TablaProductos.textContent = inputPrecioProductoVP.value     
        stockFila4TablaProductos.textContent = inputStockProductoVP.value     
        provFila4TablaProductos.textContent = inputProvProductoVP.value 
        
        listaProductos.push({codigo: inputCodigoProductoVP.value,descripcion: inputDescrProductoVP.value, precio: inputPrecioProductoVP.value, stock: inputStockProductoVP.value, proveedor: inputProvProductoVP.value}) 
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    } else if (codigoFila5TablaProductos.textContent == "") {

        document.querySelector("#fila5TablaProductos").style.display = "grid"
        codigoFila5TablaProductos.textContent = inputCodigoProductoVP.value     
        descrFila5TablaProductos.textContent = inputDescrProductoVP.value     
        precioFila5TablaProductos.textContent = inputPrecioProductoVP.value     
        stockFila5TablaProductos.textContent = inputStockProductoVP.value     
        provFila5TablaProductos.textContent = inputProvProductoVP.value 
        
        listaProductos.push({codigo: inputCodigoProductoVP.value,descripcion: inputDescrProductoVP.value, precio: inputPrecioProductoVP.value, stock: inputStockProductoVP.value, proveedor: inputProvProductoVP.value}) 
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    }
   
}

function modificarProductoVP() {

    if ( (inputCodigoProductoVP.value == "") || (inputDescrProductoVP.value == "") || (inputPrecioProductoVP.value == "") || (inputStockProductoVP.value == "") || (inputProvProductoVP.value == "") ) {

        Toastify({
            text: "Debes completar todos los campos",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        /* popUpCompletarCamposVP.style.display = "flex"
        inputCerrarPopUpCCVP.style.display = "flex"
        inputCerrarPopUpCCVP.focus() */

    } else if (inputCodigoProductoVP.value == codigoFila1TablaProductos.textContent) {
        
        descrFila1TablaProductos.textContent = inputDescrProductoVP.value     
        precioFila1TablaProductos.textContent = inputPrecioProductoVP.value     
        stockFila1TablaProductos.textContent = inputStockProductoVP.value     
        provFila1TablaProductos.textContent = inputProvProductoVP.value
        limpiarInputsVP()

    } else if (inputCodigoProductoVP.value == codigoFila2TablaProductos.textContent) {
        
        descrFila2TablaProductos.textContent = inputDescrProductoVP.value     
        precioFila2TablaProductos.textContent = inputPrecioProductoVP.value     
        stockFila2TablaProductos.textContent = inputStockProductoVP.value     
        provFila2TablaProductos.textContent = inputProvProductoVP.value
        limpiarInputsVP()

    } else if (inputCodigoProductoVP.value == codigoFila3TablaProductos.textContent) {
        
        descrFila3TablaProductos.textContent = inputDescrProductoVP.value     
        precioFila3TablaProductos.textContent = inputPrecioProductoVP.value     
        stockFila3TablaProductos.textContent = inputStockProductoVP.value     
        provFila3TablaProductos.textContent = inputProvProductoVP.value
        limpiarInputsVP()

    } else if (inputCodigoProductoVP.value == codigoFila4TablaProductos.textContent) {
        
        descrFila4TablaProductos.textContent = inputDescrProductoVP.value     
        precioFila4TablaProductos.textContent = inputPrecioProductoVP.value     
        stockFila4TablaProductos.textContent = inputStockProductoVP.value     
        provFila4TablaProductos.textContent = inputProvProductoVP.value
        limpiarInputsVP()

    } else if (inputCodigoProductoVP.value == codigoFila5TablaProductos.textContent) {
        
        descrFila5TablaProductos.textContent = inputDescrProductoVP.value     
        precioFila5TablaProductos.textContent = inputPrecioProductoVP.value     
        stockFila5TablaProductos.textContent = inputStockProductoVP.value     
        provFila5TablaProductos.textContent = inputProvProductoVP.value
        limpiarInputsVP()

    }

}

function borrarProductoVP() {
    
    if (inputCodigoProductoVP.value == codigoFila1TablaProductos.textContent) {

        document.querySelector("#fila1TablaProductos").style.display = "none"
        codigoFila1TablaProductos.textContent = ""
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    } else if (inputCodigoProductoVP.value == codigoFila2TablaProductos.textContent) {
        
        document.querySelector("#fila2TablaProductos").style.display = "none"
        codigoFila2TablaProductos.textContent = ""
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    } else if (inputCodigoProductoVP.value == codigoFila3TablaProductos.textContent) {
        
        document.querySelector("#fila3TablaProductos").style.display = "none"
        codigoFila3TablaProductos.textContent = ""
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    } else if (inputCodigoProductoVP.value == codigoFila4TablaProductos.textContent) {
        
        document.querySelector("#fila4TablaProductos").style.display = "none"
        codigoFila4TablaProductos.textContent = ""
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    } else if (inputCodigoProductoVP.value == codigoFila5TablaProductos.textContent) {
        
        document.querySelector("#fila5TablaProductos").style.display = "none"
        codigoFila5TablaProductos.textContent = ""
        limpiarInputsVP()
        inputCodigoProductoVP.focus()

    }

}

function nuevoProductoVP() {
    limpiarInputsVP()
    inputCodigoProductoVP.focus()
}

function seleccTablaProductosFila1() {

    inputCodigoProductoVP.value = codigoFila1TablaProductos.textContent
    inputDescrProductoVP.value = descrFila1TablaProductos.textContent
    inputPrecioProductoVP.value = precioFila1TablaProductos.textContent
    inputStockProductoVP.value = stockFila1TablaProductos.textContent
    inputProvProductoVP.value = provFila1TablaProductos.textContent

}

function seleccTablaProductosFila2() {

    inputCodigoProductoVP.value = codigoFila2TablaProductos.textContent
    inputDescrProductoVP.value = descrFila2TablaProductos.textContent
    inputPrecioProductoVP.value = precioFila2TablaProductos.textContent
    inputStockProductoVP.value = stockFila2TablaProductos.textContent
    inputProvProductoVP.value = provFila2TablaProductos.textContent

}

function seleccTablaProductosFila3() {

    inputCodigoProductoVP.value = codigoFila3TablaProductos.textContent
    inputDescrProductoVP.value = descrFila3TablaProductos.textContent
    inputPrecioProductoVP.value = precioFila3TablaProductos.textContent
    inputStockProductoVP.value = stockFila3TablaProductos.textContent
    inputProvProductoVP.value = provFila3TablaProductos.textContent

}

function seleccTablaProductosFila4() {

    inputCodigoProductoVP.value = codigoFila4TablaProductos.textContent
    inputDescrProductoVP.value = descrFila4TablaProductos.textContent
    inputPrecioProductoVP.value = precioFila4TablaProductos.textContent
    inputStockProductoVP.value = stockFila4TablaProductos.textContent
    inputProvProductoVP.value = provFila4TablaProductos.textContent

}

function seleccTablaProductosFila5() {

    inputCodigoProductoVP.value = codigoFila5TablaProductos.textContent
    inputDescrProductoVP.value = descrFila5TablaProductos.textContent
    inputPrecioProductoVP.value = precioFila5TablaProductos.textContent
    inputStockProductoVP.value = stockFila5TablaProductos.textContent
    inputProvProductoVP.value = provFila5TablaProductos.textContent

}

function limpiarInputsVP() {

    inputBuscarProductoVP.value = ""
    inputCodigoProductoVP.value = ""
    inputDescrProductoVP.value = ""
    inputPrecioProductoVP.value = ""
    inputStockProductoVP.value = ""
    inputProvProductoVP.value = ""
    inputCodigoProductoVP.focus()

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

function mostrarUlBuscadorVC(e) {

    if (e.target.matches("#inputBuscarClientesVC")) {

        if (e.target.value == "") {

            ulBuscadorClienteVC.style.display = 'none'   

        } else {

            ulBuscadorClienteVC.style.display = 'block'

            document.querySelectorAll(".ulBuscadorClienteVC__li").forEach(prod => {
                prod.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? prod.classList.remove("filtro") : prod.classList.add("filtro") 
            })

        }

    }    

}

function setearLiMarceloBraganza() {

    fetch('./clientes.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((cliente) => {

        if (liVCMarceloBraganza.textContent == cliente.nombre) {
            inputBuscarClientesVC.value = cliente.nombre
            inputNombreClienteVC.value = cliente.nombre
            inputDniClienteVC.value = cliente.dni
            inputTelefonoClienteVC.value = cliente.telefono
            inputEmailClienteVC.value = cliente.email
            inputDireccionClienteVC.value = cliente.direccion
        }

    })

    })

    ulBuscadorClienteVC.style.display = "none"

}

function setearLiJulietaMiquelarena() {
    
    fetch('./clientes.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((cliente) => {

        if (liVCJulietaMiquelarena.textContent == cliente.nombre) {
            inputBuscarClientesVC.value = cliente.nombre
            inputNombreClienteVC.value = cliente.nombre
            inputDniClienteVC.value = cliente.dni
            inputTelefonoClienteVC.value = cliente.telefono
            inputEmailClienteVC.value = cliente.email
            inputDireccionClienteVC.value = cliente.direccion
        }

    })

    })

    ulBuscadorClienteVC.style.display = "none"

}

function guardarClienteVC() {

    if ( (inputNombreClienteVC.value == "") || (inputDniClienteVC.value == "") || (inputTelefonoClienteVC.value == "") || (inputEmailClienteVC.value == "") || (inputDireccionClienteVC.value == "") ) {

        Toastify({
            text: "Debes completar todos los campos",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        /* popUpCompletarCamposVC.style.display = "flex"
        inputCerrarPopUpCCVC.style.display = "flex"
        inputCerrarPopUpCCVC.focus() */

    } else if ( (inputDniClienteVC.value == dniFila1TablaClientes.textContent) || (inputDniClienteVC.value == dniFila2TablaClientes.textContent) || (inputDniClienteVC.value == dniFila3TablaClientes.textContent) || (inputDniClienteVC.value == dniFila4TablaClientes.textContent) || (inputDniClienteVC.value == dniFila5TablaClientes.textContent) ) {

        Toastify({
            text: "El cliente ya está registrado",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        /* popUpClienteYaExiste.style.display = "flex"
        inputCerrarPopUpCYEVC.style.display = "flex"
        inputCerrarPopUpCYEVC.focus() */


    } else if (dniFila1TablaClientes.textContent == "")  {

        document.querySelector("#fila1TablaClientes").style.display = "grid"
        nombreFila1TablaClientes.textContent = inputNombreClienteVC.value     
        dniFila1TablaClientes.textContent = inputDniClienteVC.value     
        telefonoFila1TablaClientes.textContent = inputTelefonoClienteVC.value     
        emailFila1TablaClientes.textContent = inputEmailClienteVC.value     
        direccionFila1TablaClientes.textContent = inputDireccionClienteVC.value 

        limpiarInputsVC()
        inputNombreClienteVC.focus()

    } else if (dniFila2TablaClientes.textContent == "")  {

        document.querySelector("#fila2TablaClientes").style.display = "grid"
        nombreFila2TablaClientes.textContent = inputNombreClienteVC.value     
        dniFila2TablaClientes.textContent = inputDniClienteVC.value     
        telefonoFila2TablaClientes.textContent = inputTelefonoClienteVC.value     
        emailFila2TablaClientes.textContent = inputEmailClienteVC.value     
        direccionFila2TablaClientes.textContent = inputDireccionClienteVC.value 

        limpiarInputsVC()
        inputNombreClienteVC.focus()

    } else if (dniFila3TablaClientes.textContent == "")  {

        document.querySelector("#fila3TablaClientes").style.display = "grid"
        nombreFila3TablaClientes.textContent = inputNombreClienteVC.value     
        dniFila3TablaClientes.textContent = inputDniClienteVC.value     
        telefonoFila3TablaClientes.textContent = inputTelefonoClienteVC.value     
        emailFila3TablaClientes.textContent = inputEmailClienteVC.value     
        direccionFila3TablaClientes.textContent = inputDireccionClienteVC.value 

        limpiarInputsVC()
        inputNombreClienteVC.focus()

    } else if (dniFila4TablaClientes.textContent == "")  {

        document.querySelector("#fila4TablaClientes").style.display = "grid"
        nombreFila4TablaClientes.textContent = inputNombreClienteVC.value     
        dniFila4TablaClientes.textContent = inputDniClienteVC.value     
        telefonoFila4TablaClientes.textContent = inputTelefonoClienteVC.value     
        emailFila4TablaClientes.textContent = inputEmailClienteVC.value     
        direccionFila4TablaClientes.textContent = inputDireccionClienteVC.value 

        limpiarInputsVC()
        inputNombreClienteVC.focus()

    } else if (dniFila5TablaClientes.textContent == "")  {

        document.querySelector("#fila5TablaClientes").style.display = "grid"
        nombreFila5TablaClientes.textContent = inputNombreClienteVC.value     
        dniFila5TablaClientes.textContent = inputDniClienteVC.value     
        telefonoFila5TablaClientes.textContent = inputTelefonoClienteVC.value     
        emailFila5TablaClientes.textContent = inputEmailClienteVC.value     
        direccionFila5TablaClientes.textContent = inputDireccionClienteVC.value 

        limpiarInputsVC()
        inputNombreClienteVC.focus()

    }
   
}

function modificarClienteVC() {
   
    if ( (inputNombreClienteVC.value == "") || (inputDniClienteVC.value == "") || (inputTelefonoClienteVC.value == "") || (inputEmailClienteVC.value == "") || (inputDireccionClienteVC.value == "") ) {

        Toastify({
            text: "Debes completar todos los campos",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        /* popUpCompletarCamposVC.style.display = "flex"
        inputCerrarPopUpCCVC.style.display = "flex"
        inputCerrarPopUpCCVC.focus() */

    } else if (inputDniClienteVC.value == dniFila1TablaClientes.textContent) {
        
        nombreFila1TablaClientes.textContent = inputNombreClienteVC.value     
        dniFila1TablaClientes.textContent = inputDniClienteVC.value     
        telefonoFila1TablaClientes.textContent = inputTelefonoClienteVC.value     
        emailFila1TablaClientes.textContent = inputEmailClienteVC.value
        direccionFila1TablaClientes.textContent = inputDireccionClienteVC.value
        limpiarInputsVC()

    } else if (inputDniClienteVC.value == dniFila2TablaClientes.textContent) {
        
        nombreFila2TablaClientes.textContent = inputNombreClienteVC.value     
        dniFila2TablaClientes.textContent = inputDniClienteVC.value     
        telefonoFila2TablaClientes.textContent = inputTelefonoClienteVC.value     
        emailFila2TablaClientes.textContent = inputEmailClienteVC.value
        direccionFila2TablaClientes.textContent = inputDireccionClienteVC.value
        limpiarInputsVC()

    } else if (inputDniClienteVC.value == dniFila3TablaClientes.textContent) {
        
        nombreFila3TablaClientes.textContent = inputNombreClienteVC.value     
        dniFila3TablaClientes.textContent = inputDniClienteVC.value     
        telefonoFila3TablaClientes.textContent = inputTelefonoClienteVC.value     
        emailFila3TablaClientes.textContent = inputEmailClienteVC.value
        direccionFila3TablaClientes.textContent = inputDireccionClienteVC.value
        limpiarInputsVC()

    } else if (inputDniClienteVC.value == dniFila4TablaClientes.textContent) {
        
        nombreFila4TablaClientes.textContent = inputNombreClienteVC.value     
        dniFila4TablaClientes.textContent = inputDniClienteVC.value     
        telefonoFila4TablaClientes.textContent = inputTelefonoClienteVC.value     
        emailFila4TablaClientes.textContent = inputEmailClienteVC.value
        direccionFila4TablaClientes.textContent = inputDireccionClienteVC.value
        limpiarInputsVC()

    } else if (inputDniClienteVC.value == dniFila5TablaClientes.textContent) {
        
        nombreFila5TablaClientes.textContent = inputNombreClienteVC.value     
        dniFila5TablaClientes.textContent = inputDniClienteVC.value     
        telefonoFila5TablaClientes.textContent = inputTelefonoClienteVC.value     
        emailFila5TablaClientes.textContent = inputEmailClienteVC.value
        direccionFila5TablaClientes.textContent = inputDireccionClienteVC.value
        limpiarInputsVC()

    }
    
}

function borrarClienteVC() {
    
    if (inputDniClienteVC.value == dniFila1TablaClientes.textContent) {

        document.querySelector("#fila1TablaClientes").style.display = "none"
        dniFila1TablaClientes.textContent = ""
        limpiarInputsVC()
        inputNombreClienteVC.focus()

    } else if (inputDniClienteVC.value == dniFila2TablaClientes.textContent) {
        
        document.querySelector("#fila2TablaClientes").style.display = "none"
        dniFila2TablaClientes.textContent = ""
        limpiarInputsVC()
        inputNombreClienteVC.focus()

    } else if (inputDniClienteVC.value == dniFila3TablaClientes.textContent) {
        
        document.querySelector("#fila3TablaClientes").style.display = "none"
        dniFila3TablaClientes.textContent = ""
        limpiarInputsVC()
        inputNombreClienteVC.focus()

    } else if (inputDniClienteVC.value == dniFila4TablaClientes.textContent) {
        
        document.querySelector("#fila4TablaClientes").style.display = "none"
        dniFila4TablaClientes.textContent = ""
        limpiarInputsVC()
        inputNombreClienteVC.focus()

    } else if (inputDniClienteVC.value == dniFila5TablaClientes.textContent) {
        
        document.querySelector("#fila5TablaClientes").style.display = "none"
        dniFila5TablaClientes.textContent = ""
        limpiarInputsVC()
        inputNombreClienteVC.focus()

    }

}

function nuevoClienteVC() {
    limpiarInputsVC()
    inputNombreClienteVC.focus()
}

function seleccTablaClientesFila1() {

    inputNombreClienteVC.value = nombreFila1TablaClientes.textContent
    inputDniClienteVC.value = dniFila1TablaClientes.textContent
    inputTelefonoClienteVC.value = telefonoFila1TablaClientes.textContent
    inputEmailClienteVC.value = emailFila1TablaClientes.textContent
    inputDireccionClienteVC.value = direccionFila1TablaClientes.textContent

}

function seleccTablaClientesFila2() {

    inputNombreClienteVC.value = nombreFila2TablaClientes.textContent
    inputDniClienteVC.value = dniFila2TablaClientes.textContent
    inputTelefonoClienteVC.value = telefonoFila2TablaClientes.textContent
    inputEmailClienteVC.value = emailFila2TablaClientes.textContent
    inputDireccionClienteVC.value = direccionFila2TablaClientes.textContent

}

function seleccTablaClientesFila3() {

    inputNombreClienteVC.value = nombreFila3TablaClientes.textContent
    inputDniClienteVC.value = dniFila3TablaClientes.textContent
    inputTelefonoClienteVC.value = telefonoFila3TablaClientes.textContent
    inputEmailClienteVC.value = emailFila3TablaClientes.textContent
    inputDireccionClienteVC.value = direccionFila3TablaClientes.textContent

}

function seleccTablaClientesFila4() {

    inputNombreClienteVC.value = nombreFila4TablaClientes.textContent
    inputDniClienteVC.value = dniFila4TablaClientes.textContent
    inputTelefonoClienteVC.value = telefonoFila4TablaClientes.textContent
    inputEmailClienteVC.value = emailFila4TablaClientes.textContent
    inputDireccionClienteVC.value = direccionFila4TablaClientes.textContent

}

function seleccTablaClientesFila5() {

    inputNombreClienteVC.value = nombreFila5TablaClientes.textContent
    inputDniClienteVC.value = dniFila5TablaClientes.textContent
    inputTelefonoClienteVC.value = telefonoFila5TablaClientes.textContent
    inputEmailClienteVC.value = emailFila5TablaClientes.textContent
    inputDireccionClienteVC.value = direccionFila5TablaClientes.textContent

}

function limpiarInputsVC() {

    inputBuscarClientesVC.value = ""
    inputNombreClienteVC.value = ""
    inputDniClienteVC.value = ""
    inputTelefonoClienteVC.value = ""
    inputEmailClienteVC.value = ""
    inputDireccionClienteVC.value = ""
    inputNombreClienteVC.focus()

}

// ventana proveedores

function mostrarUlBuscadorVProv(e) {

    if (e.target.matches("#inputBuscarProveedoresVProv")) {

        if (e.target.value == "") {

            ulBuscadorProveedorVProv.style.display = 'none'   

        } else {

            ulBuscadorProveedorVProv.style.display = 'block'

            document.querySelectorAll(".ulBuscadorProveedorVProv__li").forEach(prod => {
                prod.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? prod.classList.remove("filtro") : prod.classList.add("filtro") 
            })

        }

    }    

}

function setearLiVProvSancor() {

    fetch('./proveedores.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((proveedor) => {

        if (liVProvSancor.textContent == proveedor.razonSocial) {

            inputBuscarProveedoresVProv.value = proveedor.razonSocial
            inputRazonSocialVProv.value = proveedor.razonSocial
            inputCuilCuitVProv.value = proveedor.cuitCuil
            inputTelefonoVProv.value = proveedor.telefono
            inputEmailVProv.value = proveedor.email
            inputDireccionVProv.value = proveedor.direccion

        }

    })

    })

    ulBuscadorProveedorVProv.style.display = "none"

}

function setearLiVProvDistElColo() {

    fetch('./proveedores.json')
    .then( (res) => res.json())
    .then( (data) => { data.forEach((proveedor) => {

        if (liVProvDistElColo.textContent == proveedor.razonSocial) {

            inputBuscarProveedoresVProv.value = proveedor.razonSocial
            inputRazonSocialVProv.value = proveedor.razonSocial
            inputCuilCuitVProv.value = proveedor.cuitCuil
            inputTelefonoVProv.value = proveedor.telefono
            inputEmailVProv.value = proveedor.email
            inputDireccionVProv.value = proveedor.direccion

        }

    })

    })

    ulBuscadorProveedorVProv.style.display = "none"

}

function guardarProveedorVProv() {

    if ( (inputRazonSocialVProv.value == "") || (inputCuilCuitVProv.value == "") || (inputTelefonoVProv.value == "") || (inputEmailVProv.value == "") || (inputDireccionVProv.value == "") ) {

        Toastify({
            text: "Debes completar todos los campos",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        /* popUpCompletarCamposVProv.style.display = "flex"
        inputCerrarPopUpCCVProv.style.display = "flex"
        inputCerrarPopUpCCVProv.focus() */

    } else if ( (inputCuilCuitVProv.value == cuiTCuilFila1TablaProveedores.textContent) || (inputCuilCuitVProv.value == cuiTCuilFila2TablaProveedores.textContent) || (inputCuilCuitVProv.value == cuiTCuilFila3TablaProveedores.textContent) || (inputCuilCuitVProv.value == cuiTCuilFila4TablaProveedores.textContent) || (inputCuilCuitVProv.value == cuiTCuilFila5TablaProveedores.textContent) ) {

        Toastify({
            text: "El proveedor ya está registrado",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        /* popUpProveedorYaExiste.style.display = "flex"
        inputCerrarPopUpPYEVProv.style.display = "flex"
        inputCerrarPopUpPYEVProv.focus() */


    } else if (cuiTCuilFila1TablaProveedores.textContent == "")  {

        document.querySelector("#fila1TablaProveedores").style.display = "grid"
        razonSocialFila1TablaProveedores.textContent = inputRazonSocialVProv.value     
        cuiTCuilFila1TablaProveedores.textContent = inputCuilCuitVProv.value     
        telefonoFila1TablaProveedores.textContent = inputTelefonoVProv.value     
        emailFila1TablaProveedores.textContent = inputEmailVProv.value     
        direccionFila1TablaProveedores.textContent = inputDireccionVProv.value 

        limpiarInputsVProv()
        inputRazonSocialVProv.focus()

    } else if (cuiTCuilFila2TablaProveedores.textContent == "")  {

        document.querySelector("#fila2TablaProveedores").style.display = "grid"
        razonSocialFila2TablaProveedores.textContent = inputRazonSocialVProv.value     
        cuiTCuilFila2TablaProveedores.textContent = inputCuilCuitVProv.value     
        telefonoFila2TablaProveedores.textContent = inputTelefonoVProv.value     
        emailFila2TablaProveedores.textContent = inputEmailVProv.value     
        direccionFila2TablaProveedores.textContent = inputDireccionVProv.value 

        limpiarInputsVProv()
        inputRazonSocialVProv.focus()

    } else if (cuiTCuilFila3TablaProveedores.textContent == "")  {

        document.querySelector("#fila3TablaProveedores").style.display = "grid"
        razonSocialFila3TablaProveedores.textContent = inputRazonSocialVProv.value     
        cuiTCuilFila3TablaProveedores.textContent = inputCuilCuitVProv.value     
        telefonoFila3TablaProveedores.textContent = inputTelefonoVProv.value     
        emailFila3TablaProveedores.textContent = inputEmailVProv.value     
        direccionFila3TablaProveedores.textContent = inputDireccionVProv.value 

        limpiarInputsVProv()
        inputRazonSocialVProv.focus()

    } else if (cuiTCuilFila4TablaProveedores.textContent == "")  {

        document.querySelector("#fila4TablaProveedores").style.display = "grid"
        razonSocialFila4TablaProveedores.textContent = inputRazonSocialVProv.value     
        cuiTCuilFila4TablaProveedores.textContent = inputCuilCuitVProv.value     
        telefonoFila4TablaProveedores.textContent = inputTelefonoVProv.value     
        emailFila4TablaProveedores.textContent = inputEmailVProv.value     
        direccionFila4TablaProveedores.textContent = inputDireccionVProv.value 

        limpiarInputsVProv()
        inputRazonSocialVProv.focus()

    } else if (cuiTCuilFila5TablaProveedores.textContent == "")  {

        document.querySelector("#fila5TablaProveedores").style.display = "grid"
        razonSocialFila5TablaProveedores.textContent = inputRazonSocialVProv.value     
        cuiTCuilFila5TablaProveedores.textContent = inputCuilCuitVProv.value     
        telefonoFila5TablaProveedores.textContent = inputTelefonoVProv.value     
        emailFila5TablaProveedores.textContent = inputEmailVProv.value     
        direccionFila5TablaProveedores.textContent = inputDireccionVProv.value 

        limpiarInputsVProv()
        inputRazonSocialVProv.focus()

    }
   
}

function modificarProveedorVProv() {
   
    if ( (inputRazonSocialVProv.value == "") || (inputCuilCuitVProv.value == "") || (inputTelefonoVProv.value == "") || (inputEmailVProv.value == "") || (inputDireccionVProv.value == "") ) {

        Toastify({
            text: "Debes completar todos los campos",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        /* popUpCompletarCamposVProv.style.display = "flex"
        inputCerrarPopUpCCVProv.style.display = "flex"
        inputCerrarPopUpCCVProv.focus() */

    } else if (inputCuilCuitVProv.value == cuiTCuilFila1TablaProveedores.textContent) {
        
        razonSocialFila1TablaProveedores.textContent = inputRazonSocialVProv.value     
        cuiTCuilFila1TablaProveedores.textContent = inputCuilCuitVProv.value     
        telefonoFila1TablaProveedores.textContent = inputTelefonoVProv.value     
        emailFila1TablaProveedores.textContent = inputEmailVProv.value
        direccionFila1TablaProveedores.textContent = inputDireccionVProv.value
        limpiarInputsVProv()

    } else if (inputCuilCuitVProv.value == cuiTCuilFila2TablaProveedores.textContent) {
        
        razonSocialFila2TablaProveedores.textContent = inputRazonSocialVProv.value     
        cuiTCuilFila2TablaProveedores.textContent = inputCuilCuitVProv.value     
        telefonoFila2TablaProveedores.textContent = inputTelefonoVProv.value     
        emailFila2TablaProveedores.textContent = inputEmailVProv.value
        direccionFila2TablaProveedores.textContent = inputDireccionVProv.value
        limpiarInputsVProv()

    } else if (inputCuilCuitVProv.value == cuiTCuilFila3TablaProveedores.textContent) {
        
        razonSocialFila3TablaProveedores.textContent = inputRazonSocialVProv.value     
        cuiTCuilFila3TablaProveedores.textContent = inputCuilCuitVProv.value     
        telefonoFila3TablaProveedores.textContent = inputTelefonoVProv.value     
        emailFila3TablaProveedores.textContent = inputEmailVProv.value
        direccionFila3TablaProveedores.textContent = inputDireccionVProv.value
        limpiarInputsVProv()

    } else if (inputCuilCuitVProv.value == cuiTCuilFila4TablaProveedores.textContent) {
        
        razonSocialFila4TablaProveedores.textContent = inputRazonSocialVProv.value     
        cuiTCuilFila4TablaProveedores.textContent = inputCuilCuitVProv.value     
        telefonoFila4TablaProveedores.textContent = inputTelefonoVProv.value     
        emailFila4TablaProveedores.textContent = inputEmailVProv.value
        direccionFila4TablaProveedores.textContent = inputDireccionVProv.value
        limpiarInputsVProv()

    } else if (inputCuilCuitVProv.value == cuiTCuilFila5TablaProveedores.textContent) {
        
        razonSocialFila5TablaProveedores.textContent = inputRazonSocialVProv.value     
        cuiTCuilFila5TablaProveedores.textContent = inputCuilCuitVProv.value     
        telefonoFila5TablaProveedores.textContent = inputTelefonoVProv.value     
        emailFila5TablaProveedores.textContent = inputEmailVProv.value
        direccionFila5TablaProveedores.textContent = inputDireccionVProv.value
        limpiarInputsVProv()

    }
    
}

function borrarProveedorVProv() {
    
    if (inputCuilCuitVProv.value == cuiTCuilFila1TablaProveedores.textContent) {

        document.querySelector("#fila1TablaProveedores").style.display = "none"
        cuiTCuilFila1TablaProveedores.textContent = ""
        limpiarInputsVProv()
        inputRazonSocialVProv.focus()

    } else if (inputCuilCuitVProv.value == cuiTCuilFila2TablaProveedores.textContent) {
        
        document.querySelector("#fila2TablaProveedores").style.display = "none"
        cuiTCuilFila2TablaProveedores.textContent = ""
        limpiarInputsVProv()
        inputRazonSocialVProv.focus()
    } else if (inputCuilCuitVProv.value == cuiTCuilFila3TablaProveedores.textContent) {
        
        document.querySelector("#fila3TablaProveedores").style.display = "none"
        cuiTCuilFila3TablaProveedores.textContent = ""
        limpiarInputsVProv()
        inputRazonSocialVProv.focus()
    } else if (inputCuilCuitVProv.value == cuiTCuilFila4TablaProveedores.textContent) {
        
        document.querySelector("#fila4TablaProveedores").style.display = "none"
        cuiTCuilFila4TablaProveedores.textContent = ""
        limpiarInputsVProv()
        inputRazonSocialVProv.focus()
    } else if (inputCuilCuitVProv.value == cuiTCuilFila5TablaProveedores.textContent) {
        
        document.querySelector("#fila5TablaProveedores").style.display = "none"
        cuiTCuilFila5TablaProveedores.textContent = ""
        limpiarInputsVProv()
        inputRazonSocialVProv.focus()
    }

}

function nuevoProveedorVProv() {
    limpiarInputsVProv()
    inputRazonSocialVProv.focus()
}

function limpiarInputsVProv() {

    inputBuscarProveedoresVProv.value = ""
    inputRazonSocialVProv.value = ""
    inputCuilCuitVProv.value = ""
    inputTelefonoVProv.value = ""
    inputEmailVProv.value = ""
    inputDireccionVProv.value = ""
    inputRazonSocialVProv.focus()

}

function seleccTablaProveedoresFila1() {

    inputRazonSocialVProv.value = razonSocialFila1TablaProveedores.textContent
    inputCuilCuitVProv.value = cuiTCuilFila1TablaProveedores.textContent
    inputTelefonoVProv.value = telefonoFila1TablaProveedores.textContent
    inputEmailVProv.value = emailFila1TablaProveedores.textContent
    inputDireccionVProv.value = direccionFila1TablaProveedores.textContent

}

function seleccTablaProveedoresFila2() {

    inputRazonSocialVProv.value = razonSocialFila2TablaProveedores.textContent
    inputCuilCuitVProv.value = cuiTCuilFila2TablaProveedores.textContent
    inputTelefonoVProv.value = telefonoFila2TablaProveedores.textContent
    inputEmailVProv.value = emailFila2TablaProveedores.textContent
    inputDireccionVProv.value = direccionFila2TablaProveedores.textContent

}

function seleccTablaProveedoresFila3() {

    inputRazonSocialVProv.value = razonSocialFila3TablaProveedores.textContent
    inputCuilCuitVProv.value = cuiTCuilFila3TablaProveedores.textContent
    inputTelefonoVProv.value = telefonoFila3TablaProveedores.textContent
    inputEmailVProv.value = emailFila3TablaProveedores.textContent
    inputDireccionVProv.value = direccionFila3TablaProveedores.textContent

}

function seleccTablaProveedoresFila4() {

    inputRazonSocialVProv.value = razonSocialFila4TablaProveedores.textContent
    inputCuilCuitVProv.value = cuiTCuilFila4TablaProveedores.textContent
    inputTelefonoVProv.value = telefonoFila4TablaProveedores.textContent
    inputEmailVProv.value = emailFila4TablaProveedores.textContent
    inputDireccionVProv.value = direccionFila4TablaProveedores.textContent

}

function seleccTablaProveedoresFila5() {

    inputRazonSocialVProv.value = razonSocialFila5TablaProveedores.textContent
    inputCuilCuitVProv.value = cuiTCuilFila5TablaProveedores.textContent
    inputTelefonoVProv.value = telefonoFila5TablaProveedores.textContent
    inputEmailVProv.value = emailFila5TablaProveedores.textContent
    inputDireccionVProv.value = direccionFila5TablaProveedores.textContent

}

// ventana ventas

function mostrarUlBuscadorVentas(e) {

    if (e.target.matches("#inputBuscarVentasVV")) {

        if (e.target.value == "") {

            document.querySelector("#fila1TablaVentas").style.display = "none"
            document.querySelector("#fila2TablaVentas").style.display = "none"
            document.querySelector("#fila3TablaVentas").style.display = "none"
            document.querySelector("#fila4TablaVentas").style.display = "none"
            document.querySelector("#fila5TablaVentas").style.display = "none"

            if (codigoFila1TablaVentas.textContent == "1") {

                document.querySelector("#fila1TablaVentas").style.display = "grid"

            }
            
            if (codigoFila2TablaVentas.textContent == "2") {

                document.querySelector("#fila2TablaVentas").style.display = "grid"

            }
            
            if (codigoFila3TablaVentas.textContent == "3") {

                document.querySelector("#fila3TablaVentas").style.display = "grid"

            }

            if (codigoFila4TablaVentas.textContent == "4") {

                document.querySelector("#fila4TablaVentas").style.display = "grid"

            }

            if (codigoFila5TablaVentas.textContent == "5") {

                document.querySelector("#fila5TablaVentas").style.display = "grid"

            }

        } else if (e.target.value == "1") {

            document.querySelector("#fila1TablaVentas").style.display = "grid"
            document.querySelector("#fila2TablaVentas").style.display = "none"
            document.querySelector("#fila3TablaVentas").style.display = "none"
            document.querySelector("#fila4TablaVentas").style.display = "none"
            document.querySelector("#fila5TablaVentas").style.display = "none"

        } else if (e.target.value == "2") {

            document.querySelector("#fila1TablaVentas").style.display = "none"
            document.querySelector("#fila2TablaVentas").style.display = "grid"
            document.querySelector("#fila3TablaVentas").style.display = "none"
            document.querySelector("#fila4TablaVentas").style.display = "none"
            document.querySelector("#fila5TablaVentas").style.display = "none"

        } else if (e.target.value == "3") {

            document.querySelector("#fila1TablaVentas").style.display = "none"
            document.querySelector("#fila2TablaVentas").style.display = "none"
            document.querySelector("#fila3TablaVentas").style.display = "grid"
            document.querySelector("#fila4TablaVentas").style.display = "none"
            document.querySelector("#fila5TablaVentas").style.display = "none"

        } else if (e.target.value == "4") {

            document.querySelector("#fila1TablaVentas").style.display = "none"
            document.querySelector("#fila2TablaVentas").style.display = "none"
            document.querySelector("#fila3TablaVentas").style.display = "none"
            document.querySelector("#fila4TablaVentas").style.display = "grid"
            document.querySelector("#fila5TablaVentas").style.display = "none"

        } else if (e.target.value == "5") {

            document.querySelector("#fila1TablaVentas").style.display = "none"
            document.querySelector("#fila2TablaVentas").style.display = "none"
            document.querySelector("#fila3TablaVentas").style.display = "none"
            document.querySelector("#fila4TablaVentas").style.display = "none"
            document.querySelector("#fila5TablaVentas").style.display = "grid"

        }

    }    

}

function mostrarPopUpDetalleVentaFila1TablaVentas() {

    document.querySelector("#popUpDetalleVentaFila1TablaVentas").style.display = "flex"
    inputCerrarPopUpDetalleVentaFila1TablaVentas.style.display = 'flex'
    inputCerrarPopUpDetalleVentaFila1TablaVentas.focus()

}

function mostrarPopUpDetalleVentaFila2TablaVentas() {

    document.querySelector("#popUpDetalleVentaFila2TablaVentas").style.display = "flex"
    inputCerrarPopUpDetalleVentaFila2TablaVentas.style.display = 'flex'
    inputCerrarPopUpDetalleVentaFila2TablaVentas.focus()

}

function mostrarPopUpDetalleVentaFila3TablaVentas() {

    document.querySelector("#popUpDetalleVentaFila3TablaVentas").style.display = "flex"
    inputCerrarPopUpDetalleVentaFila3TablaVentas.style.display = 'flex'
    inputCerrarPopUpDetalleVentaFila3TablaVentas.focus()

}

function mostrarPopUpDetalleVentaFila4TablaVentas() {

    document.querySelector("#popUpDetalleVentaFila4TablaVentas").style.display = "flex"
    inputCerrarPopUpDetalleVentaFila4TablaVentas.style.display = 'flex'
    inputCerrarPopUpDetalleVentaFila4TablaVentas.focus()

}

function mostrarPopUpDetalleVentaFila5TablaVentas() {

    document.querySelector("#popUpDetalleVentaFila5TablaVentas").style.display = "flex"
    inputCerrarPopUpDetalleVentaFila5TablaVentas.style.display = 'flex'
    inputCerrarPopUpDetalleVentaFila5TablaVentas.focus()

}

function mostrarSaldoTotalVentasVV() {

    saldoTotalVentasVV.textContent = saldosTotalesVentas.reduce((acum, elemento) => acum + elemento,)

}

function cerrarPopUpDetalleVentaFila1TablaVentas() {

    document.querySelector("#popUpDetalleVentaFila1TablaVentas").style.display = "none"

}

function cerrarPopUpDetalleVentaFila2TablaVentas() {

    document.querySelector("#popUpDetalleVentaFila2TablaVentas").style.display = "none"

}

function cerrarPopUpDetalleVentaFila3TablaVentas() {

    document.querySelector("#popUpDetalleVentaFila3TablaVentas").style.display = "none"

}

function cerrarPopUpDetalleVentaFila4TablaVentas() {

    document.querySelector("#popUpDetalleVentaFila4TablaVentas").style.display = "none"

}

function cerrarPopUpDetalleVentaFila5TablaVentas() {

    document.querySelector("#popUpDetalleVentaFila5TablaVentas").style.display = "none"

}

function seleccTablaVentasFila1() {

    inputBuscarVentasVV.value = codigoFila1TablaVentas.textContent

}

function seleccTablaVentasFila2() {

    inputBuscarVentasVV.value = codigoFila2TablaVentas.textContent

}

function seleccTablaVentasFila3() {

    inputBuscarVentasVV.value = codigoFila3TablaVentas.textContent

}

function seleccTablaVentasFila4() {

    inputBuscarVentasVV.value = codigoFila4TablaVentas.textContent

}

function seleccTablaVentasFila5() {

    inputBuscarVentasVV.value = codigoFila5TablaVentas.textContent

}

function borrarVenta() {

    if (inputBuscarVentasVV.value == codigoFila1TablaVentas.textContent) {

        document.querySelector("#fila1TablaVentas").style.display = "none"
        inputBuscarVentasVV.value = ""
        codigoFila1TablaProductos.textContent = ""
        saldoTotalVentasVV.textContent = saldoTotalVentasVV.textContent - saldoTotalVentaFila1TablaVentas.textContent 

        saldosTotalesVentas.pop()

    } else if (inputBuscarVentasVV.value == codigoFila2TablaVentas.textContent) {

        document.querySelector("#fila2TablaVentas").style.display = "none"
        inputBuscarVentasVV.value = ""
        codigoFila2TablaProductos.textContent = ""
        saldoTotalVentasVV.textContent = saldoTotalVentasVV.textContent - saldoTotalVentaFila2TablaVentas.textContent

        saldosTotalesVentas.pop()

    } else if (inputBuscarVentasVV.value == codigoFila3TablaVentas.textContent) {

        document.querySelector("#fila3TablaVentas").style.display = "none"
        inputBuscarVentasVV.value = ""
        codigoFila3TablaProductos.textContent = ""
        saldoTotalVentasVV.textContent = saldoTotalVentasVV.textContent - saldoTotalVentaFila3TablaVentas.textContent

        saldosTotalesVentas.pop()

    } else if (inputBuscarVentasVV.value == codigoFila4TablaVentas.textContent) {

        document.querySelector("#fila4TablaVentas").style.display = "none"
        inputBuscarVentasVV.value = ""
        codigoFila4TablaProductos.textContent = ""
        saldoTotalVentasVV.textContent = saldoTotalVentasVV.textContent - saldoTotalVentaFila4TablaVentas.textContent

        saldosTotalesVentas.pop()

    } else if (inputBuscarVentasVV.value == codigoFila5TablaVentas.textContent) {

        document.querySelector("#fila5TablaVentas").style.display = "none"
        inputBuscarVentasVV.value = ""
        codigoFila5TablaProductos.textContent = ""
        saldoTotalVentasVV.textContent = saldoTotalVentasVV.textContent - saldoTotalVentaFila5TablaVentas.textContent

        saldosTotalesVentas.pop()

    }

}

// acerca de 

const obtenerDatos = async() => {

    const resp = await fetch("./datosEmpresa.json")
    const data = await resp.json()

    data.forEach( (dato) => {

        razonSocialDatosEmpresa.textContent = dato.razonSocial
        direccionPostal1DatosEmpresa.textContent = dato.direccionPostal1
        direccionPostal2DatosEmpresa.textContent = dato.direccionPostal2
        nombreDatosEmpresa.textContent = dato.nombre
        telefonoDatosEmpresa.textContent = dato.telefono

    } )

}

// Llamada a las funciones

mostrarVentanaNuevaVenta()

obtenerDatos()

// Pruebas



// fin Pruebas
