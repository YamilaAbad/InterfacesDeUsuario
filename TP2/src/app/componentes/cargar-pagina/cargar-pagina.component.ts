import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router} from '@angular/router';
@Component({
  selector: 'app-cargar-pagina',
  templateUrl: './cargar-pagina.component.html',
  styleUrls: ['./cargar-pagina.component.css']
})
export class CargarPaginaComponent implements OnInit {
  loading: boolean = false;
  constructor(private router: Router) {
		this.router.events.subscribe((event: Event) => {
			switch (true) {
				case event instanceof NavigationStart: {
					this.loading = true;
					setTimeout(() => {
						this.loading = false;
					}, 1000);
					break;
				}
				default: {
					break;
				}
			}
		});
	}
  ngOnInit(): void {
  }

}
