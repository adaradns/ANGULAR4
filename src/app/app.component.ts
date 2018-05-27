import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4';
  description = 'Esta es la descripcion de mi pagina con angular 4';
  name = '';
  notas = [
	  {
	  	id : 1,
	  	titulo : 'Nota 1',
	  	descripcion: 'Esta es mi nota numero 1'	
	  },
	  {
	  	id : 2,
	  	titulo : 'Nota 2',
	  	descripcion: 'Esta es mi nota numero 2'	
	  },
	  {
	  	id : 3,
	  	titulo : 'Nota 3',
	  	descripcion: 'Esta es mi nota numero 3'	
	  },
	  {
	  	id : 4,
	  	titulo : 'Nota 4',
	  	descripcion: 'Esta es mi nota numero 4'	
	  },
	  {
	  	id : 5,
	  	titulo : 'Nota 5',
	  	descripcion: 'Esta es mi nota numero 5'	
	  }
  ];
}
