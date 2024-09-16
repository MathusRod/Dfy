
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrl: './criar-evento.component.scss'
})
export class CriarEventoComponent {
  readonly dialog = inject(MatDialog)

  close(){
    this.dialog.closeAll()
  }
  salvar(){
    this.close()
  }
}
