import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { CriarEventoComponent } from '../../modals/evento/criar-evento/criar-evento.component';
import { DetalhesEventoComponent } from '../../modals/evento/detalhes-evento/detalhes-evento.component';

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

  readonly dialog = inject(MatDialog)
  
  openCriarEvento() {
    this.dialog.open(CriarEventoComponent);
  }
  openDetalhes(){
    this.dialog.open(DetalhesEventoComponent)
  }
}
