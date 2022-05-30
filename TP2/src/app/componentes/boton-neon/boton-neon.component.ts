import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-neon',
  templateUrl: './boton-neon.component.html',
  styleUrls: ['./boton-neon.component.css']
})
export class BotonNeonComponent implements OnInit {
  @Input() opcion: string;
  @Input() link: string;
  constructor() { 
    this.opcion= Input();
    this.link= Input();
  }

  ngOnInit(): void {
  }

}
