// generar la visualización de una tabla

$.ajax({
    url: 'https://my-json-server.typicode.com/alaravena/ldp3101/usuarios',
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