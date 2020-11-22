class Usuarios {
    constructor(nombre,telefono,email,password,rol,deuda,deuda_cobros){
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.password = password;
        this.deuda = deuda;
        this.deuda_cobros = deuda_cobros;
        this.rol = rol;
    }
}

class Pagos {
    constructor(telefono,pago,fecha){
        this.telefono = telefono;
        this.pago = pago;
        this.fecha = fecha;
    }
}