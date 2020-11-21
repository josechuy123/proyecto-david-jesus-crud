let bd = JSON.parse(localStorage.getItem("usuarios"));
if (!bd || bd==undefined)
{
    bd = { 
        datos: [],
    }
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")); 
console.log(usuarios)

const login = () =>{
    let telefono = document.getElementById("telefono").value;
    let password = document.getElementById("password").value;

    if(telefono == "" || password == "")
        return alert("Llene todos los campos");

    let usuario = authenticate(telefono, password);
    if (usuario == null) return;

    localStorage.setItem('auth',JSON.stringify(usuario));
    location.replace("index.html");
}

const authenticate = (telefono, password) => {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")); 
    console.log(usuarios);

    for(let usuario of usuarios.datos){
        if( usuario.telefono == telefono && usuario.password == password)
            return usuario;
    }

    alert("Credenciales incorrectas");
    return null;
}

const checkAuth = () => {
    let usuario = JSON.parse(localStorage.getItem("auth")); 

    if( !(!usuario || usuario == null || typeof(usuario) == "undefined"))
        location.replace("index.html");
}

let usuario = checkAuth();
