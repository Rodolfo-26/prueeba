import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  login(formulario : NgForm){
  
    console.log(formulario.valid)
    console.log('form', formulario.valid);

    if(formulario.invalid){
      console.log('Todos los campos son requeridos')
      return
    }

    if(this.email==='admin' && this.password==='admin'){
      this.navController.navigateForward('/inicio')
    }else{
      console.log('Login Incorrecto');
    }
  }

}
