import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrl: './editar-evento.component.scss'
})
export class EditarEventoComponent {
  readonly dialog = inject(MatDialog)

  close(){
    this.dialog.closeAll()
  }
  salvar(){
    this.close()
  }
}
