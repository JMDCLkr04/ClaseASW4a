// Punto 1
var nombreCoctel = "Manhattan";
var precioCoctel = 7.00;
var disponible = true;
var cantidadDisponible = 14;
var localesQueVenden = ["Lupulo", "Pepiadas", "Bar-Budo", "QHQ", "Latitud Cero", "Manta Host"];
// Punto 3
var ClienteImpl = /** @class */ (function () {
    function ClienteImpl(id, nombre, email, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
    ClienteImpl.prototype.validarEmail = function () {
        return this.email.includes("@");
    };
    return ClienteImpl;
}());
var ProductoImpl = /** @class */ (function () {
    function ProductoImpl(id, nombre, caducidad, precio, disponible, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.caducidad = caducidad;
        this.precio = precio;
        this.disponible = disponible;
        this.categoria = categoria;
    }
    ProductoImpl.prototype.validarStock = function (stock) {
        return stock > 0;
    };
    return ProductoImpl;
}());
var PedidoImpl = /** @class */ (function () {
    function PedidoImpl(id, cliente, productos, fechaInicio, estado) {
        this.id = id;
        this.cliente = cliente;
        this.productos = productos;
        this.fechaInicio = fechaInicio;
        this.estado = estado;
    }
    PedidoImpl.prototype.totalProductos = function () {
        return this.productos.length;
    };
    return PedidoImpl;
}());
// Punto 4
var clientes = [
    new ClienteImpl(1, "Ana", "ana@email.com"),
    new ClienteImpl(2, "Luis", "luis@email.com"),
    new ClienteImpl(3, "Pedro", "pedro@email.com"),
    new ClienteImpl(4, "Laura", "laura@email.com"),
    new ClienteImpl(5, "Elena", "elena@email.com"),
    new ClienteImpl(6, "Carlos", "carlos@email.com"),
    new ClienteImpl(7, "Mario", "mario@email.com"),
    new ClienteImpl(8, "Lucía", "lucia@email.com"),
    new ClienteImpl(9, "Sara", "sara@email.com"),
    new ClienteImpl(10, "David", "david@email.com"),
];
var productos = [
    new ProductoImpl(1, "Blue Lagoon", "2024-05-06", 5.00, true, "Juveniles"),
    new ProductoImpl(2, "Martini", "2025-06-01", 14.99, true, "Clásico"),
    new ProductoImpl(3, "Old Fashioned", "2025-07-06", 20.50, false, "Vintage"),
    new ProductoImpl(4, "Blue Blazer", "2025-07-06", 20.50, false, "Flameados"),
    new ProductoImpl(5, "B-54", "2025-07-12", 20.50, true, "Flameados"),
    new ProductoImpl(6, "Dry Martini", "2025-07-05", 20.50, true, "Vintage"),
    new ProductoImpl(7, "Dirty Martini", "2025-07-07", 20.50, false, "Vintage"),
    new ProductoImpl(8, "Michelada Mango", "2025-07-06", 20.50, true, "Panas"),
    new ProductoImpl(9, "Manhattan", "2025-07-06", 20.50, true, "Vintage"),
    new ProductoImpl(10, "Michelada", "2025-07-06", 20.50, true, "Panas"),
];
var pedidos = [
    new PedidoImpl(1, clientes[0], [productos[0], productos[1]], "2025-06-06", "pendiente"),
    new PedidoImpl(2, clientes[1], [productos[2], productos[3]], "2025-06-06", "entregado"),
    new PedidoImpl(3, clientes[2], [productos[4]], "2025-06-06", "enviado"),
    new PedidoImpl(4, clientes[3], [productos[5], productos[6]], "2025-06-06", "cancelado"),
    new PedidoImpl(5, clientes[4], [productos[7], productos[8]], "2025-06-06", "enviado"),
    new PedidoImpl(6, clientes[5], [productos[9]], "2025-06-06", "entregado"),
    new PedidoImpl(7, clientes[6], [productos[1]], "2025-06-06", "pendiente"),
    new PedidoImpl(8, clientes[7], [productos[0], productos[4]], "2025-06-06", "enviado"),
    new PedidoImpl(9, clientes[8], [productos[3], productos[2]], "2025-06-06", "cancelado"),
    new PedidoImpl(10, clientes[9], [productos[6], productos[5]], "2025-06-06", "pendiente"),
];
// Punto 5
function mostrarProductos(lista) {
    lista.forEach(function (p) { return console.log(p); });
}
function contarDisponibles(lista) {
    return lista.filter(function (p) { return p.disponible; }).length;
}
function agregarProducto(lista, producto) {
    lista.push(producto);
}
function eliminarProductoPorId(lista, id) {
    var index = lista.findIndex(function (p) { return p.id === id; });
    if (index !== -1)
        lista.splice(index, 1);
}
// Punto 6 y 7: map()
var nombresMayus = productos.map(function (p) { return p.nombre.toUpperCase(); });
console.log("Nombres en mayúsculas:", nombresMayus);
var resumenClientes = clientes.map(function (c) { return "".concat(c.nombre, " <").concat(c.email, ">"); });
console.log("Resumen clientes:", resumenClientes);
// Punto 8: filter()
var disponibles = productos.filter(function (p) { return p.disponible; });
console.log("Productos disponibles:", disponibles);
// Punto 9: reduce()
var totalInventario = productos.reduce(function (acc, p) { return acc + p.precio; }, 0);
console.log("Valor total del inventario:", totalInventario);
// Punto 10 y 12: estructuras anidadas
function imprimirPedidosConDetalle(pedidos) {
    pedidos.forEach(function (pedido) {
        console.log("Pedido #".concat(pedido.id));
        console.log("Cliente: ".concat(pedido.cliente.nombre));
        console.log("Productos:");
        pedido.productos.forEach(function (p) { return console.log("- ".concat(p.nombre, " ($").concat(p.precio, ")")); });
        console.log("Estado:", pedido.estado);
        console.log("----");
    });
}
imprimirPedidosConDetalle(pedidos);
