interface ICliente{
  id: number;
  cedula: string;
  nombre: string;
  facturas?: IFactura[];
 }

interface IProducto{
  id: number;
  nombre: string;
  precio: number;
  stock: number;
}

interface IFactura{
  id: number;
  codigo: number;
  cliente: ICliente;
  detalles?: IDetalleFactura[];
  total: number;
  fecha: Date;
}

interface IDetalleFactura{
  id: number;
  facturas?: IFactura[];
  producto: IProducto;
  cantidad: number;
  subtotal: number;
  descuento: number;
  total: number;
}

 class Cliente implements ICliente{
  id: number;
  cedula: string;
  nombre: string;

  constructor(id: number, cedula: string, nombre: string) {
    this.id = id;
    this.cedula = cedula;
    this.nombre = nombre;
  }
 }
 const cliente = new Cliente(1, "123456789", "Juan Perez");
 console.log(cliente);

const factura: IFactura = {
  id: 1,
  codigo: 123456,
  cliente: {
    id: 1,
    cedula: "123456789",
    nombre: "Juan Perez"
  },
  total: 100,
  fecha: new Date(),
  detalles: [
    {
      id: 1,
      producto: {
        id: 1,
        nombre: "Producto 1",
        precio: 10,
        stock: 100
      },
      cantidad: 2,
      subtotal: 20,
      descuento: 0,
      total: 20,
    },
    {
      id: 2,
      producto: {
        id: 2,
        nombre: "Producto 2",
        precio: 30,
        stock: 50
      },
      cantidad: 1,
      subtotal: 30,
      descuento: 0,
      total: 30,
    }
    ]
}

console.log(factura.codigo);
console.log(factura.fecha);
console.log(factura.cliente.nombre);
console.log(factura.total);

factura.detalles?.forEach((detalle) => {
  console.log(detalle.producto.nombre);
  console.log(detalle.cantidad);
  console.log(detalle.subtotal);
  console.log(detalle.descuento);
  console.log(detalle.total);
}
);

function calcularTotal(factura: IFactura, detalle: IDetalleFactura):void{
  factura.detalles?.push(detalle);
}

function mostrarFacturaPorHTML(factura: IFactura): void {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    <h1>Factura</h1>
    <p>Codigo: ${factura.codigo}</p>
    <p>Fecha: ${factura.fecha.toLocaleDateString()}</p>
    <p>Cliente: ${factura.cliente.nombre}</p>
    <p>Total: ${factura.total}</p>
    <h2>Detalles</h2>
    <ul>
      ${factura.detalles?.map((detalle) => `
        <li>
          Producto: ${detalle.producto.nombre} <br>
          Cantidad: ${detalle.cantidad} <br>
          Subtotal: ${detalle.subtotal} <br>
          Descuento: ${detalle.descuento} <br>
          Total: ${detalle.total}
        </li>
      `).join('')}
    </ul>
  `;
}

function calcularTotalFactura(factura: IFactura): number {
  let total = 0;
  factura.detalles?.forEach((detalle) => {
    total += detalle.total;
  });
  return total;
}
function agregarDetalleFactura(factura: IFactura, detalle: IDetalleFactura): void {
  factura.detalles?.push(detalle);
  factura.total = calcularTotalFactura(factura);
}
function eliminarDetalleFactura(factura: IFactura, detalle: IDetalleFactura): void {
  const index = factura.detalles?.indexOf(detalle);
  if (index !== undefined && index >= 0) {
    factura.detalles?.splice(index, 1);
    factura.total = calcularTotalFactura(factura);
  }
}
function modificarDetalleFactura(factura: IFactura, detalle: IDetalleFactura): void {
  const index = factura.detalles?.indexOf(detalle);
  if (index !== undefined && index >= 0) {
    factura.detalles?.splice(index, 1, detalle);
    factura.total = calcularTotalFactura(factura);
  }
}

mostrarFacturaPorHTML(factura);