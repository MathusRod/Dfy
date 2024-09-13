import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {
  inputShowPassword: string = "password"
  inputShowConfirmPassword: string = "password"
  formRegistrar: FormGroup;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.criarForm();
  }
  criarForm(){
    this.formRegistrar = this.formBuilder.group({
      nomeUsuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      confirmarSenha: ['', [Validators.required]]
    });
  }
  mostrarSenha(id:number){
    if(id == 1){
      if(this.inputShowPassword=="password"){
        this.inputShowPassword = "text"
      } else this.inputShowPassword = "password"
    } else {
      if(this.inputShowConfirmPassword == "password"){
        this.inputShowConfirmPassword = "text"
      } else {
        this.inputShowConfirmPassword = "password"
      }
    }
  }
}
