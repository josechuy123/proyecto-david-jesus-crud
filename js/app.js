//let bd = { datos: [] }
let bd = JSON.parse(localStorage.getItem("usuarios"));
if (!bd || bd==undefined)
{
    bd = { 
        datos: [],
    }
}

let listar_usuarios = document.getElementById("listar_usuarios");
let listar_usuarios_cobros = document.getElementById("listar_usuarios_cobros");

document.getElementById("btnGuardarCliente").addEventListener("click" , ()=> {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rol = document.getElementById("rol").value;
    let deuda = 0;

    let datos = new Usuarios(nombre,telefono,email,password,rol,parseInt(deuda));
    bd.datos.push(datos);

    

    localStorage.setItem("usuarios" , JSON.stringify(bd));
    //localStorage.setItem("auth" , );
    location.replace("index.html");
});

function lista_usuarios()
{
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    listar_usuarios.innerHTML = "";
    listar_usuarios_cobros.innerHTML = "";
    if(usuarios!=null)
    {
        usuarios.datos.forEach(usuario => {
            listar_usuarios.innerHTML+=`
            
            <tr style="text-align:center">
                <th scope="row">${ usuario.nombre }</th>
                <td>${ usuario.telefono }</td>
                <td>${ usuario.email }</td>
                <td>${ usuario.rol }</td>
                <td>$${ usuario.deuda }</td>
                <td>
                    <button type="button" class="btn btn-primary" onclick="abrirModalCobroCliente(${ usuario.telefono })" >Agregar pago</button>
                    <button type="button" class="btn btn-warning" onclick="abrirModalCliente(${ usuario.telefono })" >Agregar deuda</button>
                    <button type="button" class="btn btn-danger" onclick=" eliminar(${ usuario.telefono }) " >Eliminar</button>
                </td>
            </tr>
           
            `
            listar_usuarios_cobros.innerHTML+=`
            
            <tr style="text-align:center">
                <th scope="row">${ usuario.nombre }</th>
                <td>${ usuario.telefono }</td>
                <td>$${ usuario.deuda }</td>
                <td>
                    <button type="button" class="btn btn-success" onclick="abrirModalCliente(${ usuario.telefono })" >Cantidad a cobrar</button>
                </td>
            </tr>
           
            `
        });    
         
    }  
}

function eliminar(telefono)
{
    let usuarios = JSON.parse(localStorage.getItem("usuarios")); 
    console.log(usuarios);
    usuarios.datos.forEach((usuario,i) => {
        if( usuario.telefono == telefono )
        {
            usuarios.datos.splice(i,1);
        }
    });

    localStorage.setItem('usuarios',JSON.stringify(usuarios));
    location.replace("index.html");
}

function abrirModalCobroCliente(telefono)
{
    $("#telefono_cobro").val(telefono)
    $("#agregar_cobro_cliente").modal("show");
}

function agregarCobroCliente()
{
    let telefono = document.getElementById("telefono_cobro").value;
    let cobro = document.getElementById("cobro").value;
    if(cobro <= 0 )
        return alert("Numero mayor a 0");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")); 
    
    usuarios.datos.forEach((usuario) => {
        if( usuario.telefono == telefono )
        {
            usuario.deuda = parseInt(usuario.deuda)-parseInt(cobro);
        }
    });

    localStorage.setItem('usuarios',JSON.stringify(usuarios));
    location.replace("index.html");
}

function abrirModalClientes()
{
    $("#cantidad_cobrar_clientes_todos").modal("show");
}
//Agregar deuda a todos los clientes por igual
function AgregarDeudaClientes()
{
    let deuda = document.getElementById("deuda_todo").value;
    if(deuda <= 0 )
        return alert("Numero mayor a 0");
    let usuarios = JSON.parse(localStorage.getItem("usuarios")); 
    
    usuarios.datos.forEach((usuario) => {
        usuario.deuda = parseInt(usuario.deuda)+parseInt(deuda);
        console.log(usuario.deuda)
    });
    
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
    location.replace("index.html");
}

function abrirModalCliente(telefono)
{
    $("#telefono_c").val(telefono)
    $("#cantidad_cobrar_cliente").modal("show");
}

//Agregar deuda a un solo cliente en especial
function AgregarDeudaCliente()
{
    let telefono = document.getElementById("telefono_c").value;
    let deuda = document.getElementById("deuda").value;
    if(deuda <= 0 )
        return alert("Numero mayor a 0");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")); 
    
    usuarios.datos.forEach((usuario) => {
        if( usuario.telefono == telefono )
        {
            usuario.deuda = parseInt(usuario.deuda)+parseInt(deuda);
            console.log(usuario.deuda)
        }
    });
    
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
    location.replace("index.html");
}


const checkAuth = () => {
    let usuario = JSON.parse(localStorage.getItem("auth")); 

    if( !usuario || usuario == null || typeof(usuario) == "undefined")
        location.replace("login.html");

    return usuario
}

const showInfo = () => {
    document.getElementById("mainTitle").innerHTML = usuario.nombre
}


let usuario = checkAuth();

showInfo();

