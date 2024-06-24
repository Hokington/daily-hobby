import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  errors: string[] = [];

  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {

    this.errors = []

    if (this.email == ""){
      this.errors.push('El Email no puede estar vacío')
      return
    }
    if (this.password == ""){
      this.errors.push('La contraseña es obligatoria')
      return
    }

    if (this.errors) {
      this.errors = []
    }

    const user = this.authService.getUser(this.email)

    if(user == null){
      this.errors.push('Este usuario no existe')
      return
    }

    if(user.password != this.password) {
      this.errors.push('Credenciales incorrectas')
      return
    }

    this.authService.createSession(user)
    
    this.router.navigateByUrl('/tabs');
  }

}
