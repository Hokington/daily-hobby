import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  errors: string[] = [];

  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
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

    this.router.navigateByUrl('/tabs');
  }

}
