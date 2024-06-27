









// INDEX-CONTENEDOR-7***********OFFCANVAS***************************












//***********JQUERY******************

$('.elevar-contenedor').hover(
  function() {
      $(this).addClass('elevated');
  }, function() {
      $(this).removeClass('elevated');
  }
);



$('.zoom-contenedor').hover(
  function() {
      $(this).addClass('zoomin');
  }, function() {
      $(this).removeClass('zoomin');
  }
);



//***********INTENTO-TABLA*****************

$.ajax({
  url: 'assets/js/lista-productos.json',
  type: 'GET',
  dataType: 'json',
  success: function(respuesta){
      let tr;
      $.each(respuesta, function(index,elemento){
          tr = '<tr>',
              tr += '<th scope="row">'+ elemento.id +'</th>',
              tr += '<td>'+ elemento.nombre +'</td>',
              tr += '<td>'+ elemento.email +'</td>',
              tr += '<td><button type="button" id="botonera" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalLista" data-nombre="'+ elemento.nombre +'" data-edad="'+ elemento.edad +'" data-avatar="'+ elemento.avatar +'">Datos persona</button></td>',
          tr += '</tr>',

          $('#listado').append(tr);
      })
  },
  error: function(){
      console.log('no se ve la lista')
  }
})

// mostrar datos del modal

document.getElementById('modalLista').addEventListener('show.bs.modal', function(event){
  let dataBoton = event.relatedTarget
  let nombreBoton = dataBoton.getAttribute('data-nombre')
  let edadBoton = dataBoton.getAttribute('data-edad')
  let imgBoton = dataBoton.getAttribute('data-avatar')
  document.getElementById('modalListaLabel').innerHTML = nombreBoton
  document.getElementById('datosEdad').innerHTML = edadBoton + ' años'
  document.getElementById('imgDatos').setAttribute('src',imgBoton)
})




// OFFCANVAS


const offcanvasEjemplo = document.getElementById('offcanvasExample')

offcanvasEjemplo.addEventListener('show.bs.offcanvas', function(event){
  console.log('se está abriendo el offcanva');


  const valor1 = document.getElementById('inputTitulo').value
  const valor2 = document.getElementById('inputContenido').value

  
  let boton = event.relatedTarget // etiquetado-relacionado
  let mensaje = boton.getAttribute('data-titulo')
  let contenido = boton.getAttribute('data-content') 

  // document.getElementById('tituloOffcanvas').innerText = mensaje 
  // document.getElementById('bodyOffcanvas').innerText = contenido

  if (valor1 === '') {
    document.getElementById('tituloOffcanvas').innerHTML = mensaje;
} else {
    document.getElementById('tituloOffcanvas').innerHTML = 'Felicidades! ' + valor1+ ', ya tienes tu Cupón de un 20%! ';
}

if (valor2 === '') {
    document.getElementById('bodyOffcanvas').innerHTML = contenido;
} else {
    document.getElementById('bodyOffcanvas').innerHTML = 'Hemos enviado el código de tu descuento a tu correo ' + valor2 + ', para que lo utilices en tu primera compra! ';
}


});








