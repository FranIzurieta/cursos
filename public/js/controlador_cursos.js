'use strict';

mostrarListaCursos()
document.getElementById("defaultOpen").click();


//declaración de variables para obtener datos

let botonRegistrar = document.querySelector('#btnRegistrar');
let inputCodigo = document.querySelector('#txtCodigo');
let inputNombre = document.querySelector('#txtNombre');
let inputCreditos = document.querySelector('#txtCreditos');
let inputRequisitos = document.querySelector('#txtRequisitos');
let inputFecha = document.querySelector('#txtFecha');
let inputEstado = document.querySelector('#rdButton');
let inputBuscar = document.querySelector('#txtBuscarCodigo');

inputBuscar.addEventListener('keyup', mostrarBusqueda);

botonRegistrar.addEventListener('click' , obtenerDatos);

let regexCodigo = /^[a-zA-Z0-9]+$/;
let regexNombre = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ ]+$/;
let regexCreditos = /^[0-9]+$/;



function abrirFuncion(evento, funcion) {
    let i, tabContent, tablinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(funcion).style.display = "block";
    evento.currentTarget.className += " active";
};


    let listaCursos = obtenerCursos();
    let tbody = document.querySelector('#tblCursos tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaCursos.length; i++){
        let fila = tbody.insertRow();

        let celdaCodigo = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaCreditos = fila.insertCell();
        let celdaRequisitos = fila.insertCell();
        let celdaFecha = fila.insertCell();
        let celdaEstado = fila.insertCell();
        let celdaEditar = fila.insertCell();
        let celdaEliminar = fila.insertCell();




        celdaCodigo.innerHTML = listaCursos[i]['codigo'];
        celdaNombre.innerHTML = listaCursos[i]['nombre'];
        celdaCreditos.innerHTML = listaCursos[i]['creditos'];
        celdaRequisitos.innerHTML = listaCursos[i]['requisitos'];
        celdaFecha.innerHTML = listaCursos[i]['fecha'];
        celdaEstado.innerHTML = listaCursos[i]['estado'];

    };


function obtenerDatos(){
    let bError = false;
    let sCodigo = inputCodigo.value;
    let sNombre = inputNombre.value;
    let nCreditos = Number(inputCreditos.value);
    let sRequisitos = inputRequisitos.value;
    let dFecha = Date(inputFecha.value);
    let bEstado = inputEstado.checked;
    
    //bError = validar();
    
    if(bError == true){
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el curso, revise los campos en rojo',
            type: 'warning',
            confirmButtonText: 'Continuar'
          });
    }else{
        let respuesta = registrarCurso(sCodigo, sNombre, nCreditos, sRequisitos, dFecha, bEstado);
        if(respuesta.success == true){
            swal({
                title: 'Registro correcto',
                text: respuesta.msg,
                type: 'success',
                confirmButtonText: 'Continuar'
              });
        }else{
            swal({
                title: 'Registro incorrecto',
                text: respuesta.msg,
                type: 'error',
                confirmButtonText: 'Continuar'
              });
        } 
    }
  
    limpiarFormulario();
        mostrarListaCarreras();
};

