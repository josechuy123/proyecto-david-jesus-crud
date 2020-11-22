const checkAuth = () => {
    let usuario = JSON.parse(localStorage.getItem("auth")); 

    if( !usuario || usuario == null || typeof(usuario) == "undefined")
        location.replace("login.html");
    if( usuario.rol == "Administrador" )
        location.replace("index.html");
    return usuario
}

const showInfo = () => {
    document.getElementById("title_deudor").innerHTML += " " + usuario.nombre + " <br> Prestamo: " + "$"+usuario.deuda_cobros + " <br> Restante: $" + usuario.deuda
    let info_cliente = document.getElementById("info-cliente");
    let pagos = JSON.parse(localStorage.getItem("pagos")); 
    info_cliente.innerHTML = "";

    pagos.pagos.forEach(pago => {
        if(usuario.telefono == pago.telefono)
        {
           info_cliente.innerHTML+=`

                <tr style="text-align:center">
                    <td>$${ pago.pago }</td>
                    <td>${ pago.fecha }</td>
                </tr>
            ` 
        }
        
    });
    
}

let usuario = checkAuth();

showInfo();