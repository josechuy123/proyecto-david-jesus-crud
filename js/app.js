//let bd = { datos: [] }
let bd = JSON.parse(localStorage.getItem("usuarios"));

if (!bd || bd==undefined){
	bd = { datos: []  }
}

let listar_usuarios = document.getElementById("listar_usuarios");

document.getElementById("btnGuardarCliente").addEventListener("click" , ()=> {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rol = document.getElementById("rol").value;

    let datos = new Usuarios(nombre,telefono,email,password,rol);
    bd.datos.push(datos);

    localStorage.setItem("usuarios" , JSON.stringify(bd));
    console.log(datos);
    location.replace("index.html");
});

function lista_usuarios(){
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    listar_usuarios.innerHTML = "";
    if(usuarios!=null)
    {
        usuarios.datos.forEach(usuario => {
            listar_usuarios.innerHTML+=`
            
            <tr>
                <th scope="row">${ usuario.nombre }</th>
                <td>${ usuario.telefono }</td>
                <td>${ usuario.email }</td>
                <td>
                    <button type="button" class="btn btn-primary">Agregar cobro</button>
                    <button type="button" class="btn btn-danger">Eliminar</button>
                </td>
            </tr>
           
            `
        });      
    }  
}