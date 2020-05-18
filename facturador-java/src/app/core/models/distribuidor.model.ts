export class Distribuidor{
    public iddistrib:number;
    public nombre:string;
    public correo:string;
    public direccion:string;
    public telefono:string;
    public estado:number;
    public tipodoc:string;
    public nrodoc:string;
    public perscontact:string;


	constructor(
        iddistrib:number,
        nombre:string,
        correo:string,
        direccion:string,
        telefono:string,
        estado:number,
        tipodoc:string,
        nrodoc:string,
        perscontact:string,
    ) {
        this.iddistrib=iddistrib;
        this.nombre=nombre;
        this.correo=correo;
        this.direccion=direccion;
        this.telefono=telefono;
        this.estado=estado;
        this.tipodoc=tipodoc;
        this.nrodoc=nrodoc;
        this.perscontact=perscontact;
	}

}