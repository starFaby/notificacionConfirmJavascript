function alerta()
    {
    var mensaje;
    var opcion = confirm("Clicka en Aceptar o Cancelar");
    if (opcion == true) {
        mensaje = "Has clickado OK";
        console.log(mensaje);
	} else {
        mensaje = "Has clickado Cancelar";
        console.log(mensaje);
	}
}

confirm()