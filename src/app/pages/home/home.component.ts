import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(private usuarioService: UsuarioService){}
  deslogar(){
    this.usuarioService.deslogar(false)
  }

}
