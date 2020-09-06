import { Component, OnInit } from '@angular/core';
import { Configuracion}from '@models/configuracion.model';
import { ConfiguracionService} from '@services/configuracion.service'
@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.scss']
})
export class ConfiguracionesComponent implements OnInit {
  checked:any=0;
  reducirStok=0
  slider:any=1
  nConfiguracio=new Configuracion('atributo',0,0,1,0);
  btnState={
    start:true,
    disabled:false,
    loading:false,
    success:false
  }
  atributos={
    marca:0,
    color:0,
    lote:0,
    laboratorio:0,
    fechaVenc:0,
    promo1:0,
    promo2:0
  }

  constructor(private _sConfiguracion:ConfiguracionService) { }

  ngOnInit(): void {
  this.nConfiguracio.fechavauto
    this._sConfiguracion.getConfiguraciones().subscribe(
      data=>{
        console.log(data[0]);
        console.log(this.btnState.start);
        
      }
    )
  }

}
