import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  modalPefilOpen: boolean = false;
  modalNotificacaoOpen: boolean = false;
  constructor(private usuarioService: UsuarioService){}
  deslogar(){
    this.usuarioService.deslogar(false)
  }
  chamarModalPerfil(){
    this.modalPefilOpen = !this.modalPefilOpen
    if(this.modalNotificacaoOpen){
      this.modalNotificacaoOpen = !this.modalNotificacaoOpen
    }
  }
  chamarModalNotificacao(){
    this.modalNotificacaoOpen = !this.modalNotificacaoOpen
    if(this.modalPefilOpen){
      this.modalPefilOpen = !this.modalPefilOpen
    }
  }
}
