import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent implements OnInit {

  constructor(private _cargarScripts: CargarScriptsService) { 
    _cargarScripts.carga(["submit-button"])
}

  ngOnInit(): void {
  }

}
