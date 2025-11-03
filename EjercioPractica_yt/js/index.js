let usuario="Jab";
let productoComprado=1;
const DESCUENTO=0.1;
let precioDescuento;
const PRODUCTOS=[{
    producto:"Pantalón",
    precio:10,
    talla:"m",
    imagen:"pantalon.jpg"
  },{
    producto:"Gorra",
    precio:5,
    talla:"s",
    imagen:"gorra.jpg"
  }
];
document.querySelector("body").innerHTML=
`   
  <h1>${usuario}</h1>
    <section class="caja">
    <div>
        ${PRODUCTOS[productoComprado].producto}
        (${PRODUCTOS[productoComprado].precio} $)
    </div>
    <div>
        Descuento: ${calculardescuento()}
    </div>
    <div>
        Precio final: ${calcularPrecio()}
    </div>
    <div>
        Talla: ${PRODUCTOS[productoComprado].talla.toUpperCase()}
    </div>
    <img src="img/${PRODUCTOS[productoComprado].imagen}" alt="PRODUCTO">

    </section>`

    function calculardescuento(){
        precioDescuento = PRODUCTOS[productoComprado].precio * DESCUENTO;
        return precioDescuento;
    }
    function calcularPrecio(){
      return PRODUCTOS[productoComprado].precio - precioDescuento;
    }