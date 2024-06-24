import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  errors: string[] = [];

  name: string = '';
  email: string = '';
  password: string = '';
  password2: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  register() {

    this.errors = []

    if (this.name == ""){
      this.errors.push('El Nombre no puede estar vacío')
      return
    }

    if (this.email == ""){
      this.errors.push('El Email no puede estar vacío')
      return
    }

    if (this.password == ""){
      this.errors.push('La contraseña es obligatoria')
      return
    }

    if (this.password !== this.password2){
      this.errors.push('Las contraseñas deben coincidir')
      return
    }

    if (this.errors) {
      this.errors = []
    }

    const user: User = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    if(this.authService.getUser(user.email) != null){
      this.errors.push('Este usuario ya existe')
      return
    }

    this.authService.addUser(user)

    this.router.navigateByUrl('/login');
  }

}
