import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarEventoComponent } from '../editar-evento/editar-evento.component';

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrl: './detalhes-evento.component.scss'
})
export class DetalhesEventoComponent {
  readonly dialog = inject(MatDialog)

  close(){
    this.dialog.closeAll()
  }
  openEditarEvento(){
    this.close()
    this.dialog.open(EditarEventoComponent)
  }
}
