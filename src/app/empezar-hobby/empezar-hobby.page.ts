import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HobbyService } from '../hobby.service';

@Component({
  selector: 'app-empezar-hobby',
  templateUrl: './empezar-hobby.page.html',
  styleUrls: ['./empezar-hobby.page.scss'],
})
export class EmpezarHobbyPage implements OnInit {

  errors: string[] = []

  title: string = ""
  color: string = "#137383"
  duration: number = 30

  constructor(private router: Router, private hobbyService: HobbyService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.title = ""
    this.color = "#137383"
    this.duration = 30
  }

  addHobby() {
    if (this.title == ""){
      this.errors.push('El titulo no puede estar vacío')
      return
    }
    if (this.color == ""){
      this.errors.push('El Color es obligatorio')
      return
    }
    if (this.duration <= 0){
      this.errors.push('La duración debe ser mayor a 0')
      return
    }

    if (this.errors) {
      this.errors = []
    }

    this.hobbyService.addHobby(this.title, this.color, this.duration)
    this.router.navigate(['/tabs']);
  }
}
