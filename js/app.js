let clientes = document.getElementById("clientes")

document.getElementById("btnGuardarCliente").addEventListener("click" , ()=> {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rol = document.getElementById("rol").value;

    let datos = new Usuarios(nombre,telefono,email,password,rol);
    console.log(datos);
    localStorage.setItem("usuarios" , JSON.stringify(datos));
});

function listar(){
    clientes.innerHTML="";
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if(usuarios!=null)
    {
        for (let i = 0; i < usuarios.length; i++) {
            clientes.innerHTML+=`
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Email</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Ejemplo</th>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td>
                        <button type="button"></button>
                    </td>
                </tr>
            </tbody>
        </table>
            `
        }
    }
}