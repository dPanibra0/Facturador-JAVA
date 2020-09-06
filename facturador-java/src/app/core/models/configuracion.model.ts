export class Configuracion {
  public atributosprod: string;
  public fechavauto: number;
  public idconfig: number;
  public reducirstock: number;
  public ventasinstock: number;
  constructor(
    atributosprod: string,
    fechavauto: number,
    idconfig: number,
    reducirstock: number,
    ventasinstock: number
  ){
    this.atributosprod= atributosprod;
    this.fechavauto= fechavauto;
    this.idconfig= idconfig;
    this.reducirstock= reducirstock;
    this.ventasinstock= ventasinstock;
  };
}
