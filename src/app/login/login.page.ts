import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  login(formulario : NgForm){
  
    console.log(formulario.valid)
    console.log('form', formulario.valid);

    if(formulario.invalid){
      console.log('Todos los campos son requeridos')
      return
    }

    if(this.email==='admin' && this.password==='admin')(console.log('Login Correcto'))
    else{
      console.log('Login Incorrecto');
    }
  }

}
