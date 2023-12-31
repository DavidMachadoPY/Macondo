function agregarFila(a, b, c) {
  var tabla = document.getElementById("newDatos");
  var fila = tabla.insertRow();

  var celdaProducto = fila.insertCell(0);
  var celdaPrecio = fila.insertCell(1);
  var celdaCantidad = fila.insertCell(2);
  var celdaTotal = fila.insertCell(3);

  celdaProducto.innerHTML = a;
  celdaPrecio.innerHTML = b;

  var cantidad, total;

  switch (c) {
    case "1":
    case "2":
    case "3":
    case "4":
      cantidad = document.getElementById("input" + c).value;
      break;
  }

  cantidad = isNaN(cantidad) ? 0 : parseInt(cantidad);
  total = parseInt(b) * cantidad;

  celdaCantidad.innerHTML = isNaN(cantidad) ? 0 : cantidad;;
  celdaTotal.innerHTML = isNaN(total) ? 0 : total;
}

function suma(cantidad){
  var plus = document.getElementsByClassName("suma");
  plus.addEventListener('click', cantidad +=1)
}
