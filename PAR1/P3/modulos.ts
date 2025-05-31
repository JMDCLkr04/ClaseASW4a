// Punto 1
let nombreCoctel: string = "Manhattan";
let precioCoctel: number = 7.00;
let disponible: boolean = true;
let cantidadDisponible: number = 14;
let localesQueVenden: string[] = ["Lupulo", "Pepiadas", "Bar-Budo", "QHQ", "Latitud Cero", "Manta Host"];

// Punto 2
interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
}

interface Producto {
  id: number;
  nombre: string;
  caducidad: string;
  precio: number;
  disponible: boolean;
  readonly categoria: string;
}

interface Pedido {
  id: number;
  cliente: Cliente;
  productos: Producto[];
  fechaInicio: string;
  estado: "pendiente" | "entregado" | "enviado" | "cancelado";
}

// Punto 3
class ClienteImpl implements Cliente {
  constructor(
    public id: number,
    public nombre: string,
    public email: string,
    public telefono?: string
  ) {}

  validarEmail(): boolean {
    return this.email.includes("@");
  }
}

class ProductoImpl implements Producto {
  constructor(
    public id: number,
    public nombre: string,
    public caducidad: string,
    public precio: number,
    public disponible: boolean,
    public readonly categoria: string
  ) {}

  validarStock(stock: number): boolean {
    return stock > 0;
  }
}

class PedidoImpl implements Pedido {
  constructor(
    public id: number,
    public cliente: Cliente,
    public productos: Producto[],
    public fechaInicio: string,
    public estado: "pendiente" | "enviado" | "entregado" | "cancelado"
  ) {}

  totalProductos(): number {
    return this.productos.length;
  }
}

// Punto 4
const clientes: Cliente[] = [
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

const productos: Producto[] = [
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

const pedidos: Pedido[] = [
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
function mostrarProductos(lista: Producto[]): void {
  lista.forEach(p => console.log(p));
}

function contarDisponibles(lista: Producto[]): number {
  return lista.filter(p => p.disponible).length;
}

function agregarProducto(lista: Producto[], producto: Producto): void {
  lista.push(producto);
}

function eliminarProductoPorId(lista: Producto[], id: number): void {
  const index = lista.findIndex(p => p.id === id);
  if (index !== -1) lista.splice(index, 1);
}

// Punto 6 y 7: map()
const nombresMayus = productos.map(p => p.nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombresMayus);

const resumenClientes = clientes.map(c => `${c.nombre} <${c.email}>`);
console.log("Resumen clientes:", resumenClientes);

// Punto 8: filter()
const disponibles = productos.filter(p => p.disponible);
console.log("Productos disponibles:", disponibles);

// Punto 9: reduce()
const totalInventario = productos.reduce((acc, p) => acc + p.precio, 0);
console.log("Valor total del inventario:", totalInventario);

// Punto 10 y 12: estructuras anidadas
function imprimirPedidosConDetalle(pedidos: Pedido[]): void {
  pedidos.forEach(pedido => {
    console.log(`Pedido #${pedido.id}`);
    console.log(`Cliente: ${pedido.cliente.nombre}`);
    console.log("Productos:");
    pedido.productos.forEach(p => console.log(`- ${p.nombre} ($${p.precio})`));
    console.log("Estado:", pedido.estado);
    console.log("----");
  });
}

imprimirPedidosConDetalle(pedidos);
