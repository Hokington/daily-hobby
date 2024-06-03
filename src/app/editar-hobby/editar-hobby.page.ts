import { Component, OnInit } from '@angular/core';

// Services
import { Hobby, HobbyService } from '../hobby.service';

@Component({
  selector: 'app-editar-hobby',
  templateUrl: './editar-hobby.page.html',
  styleUrls: ['./editar-hobby.page.scss'],
})
export class EditarHobbyPage implements OnInit {

  public hobbies: Hobby[] = this.hobbyService.getHobbies();

  constructor(private hobbyService: HobbyService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.hobbies = this.hobbyService.getHobbies();
  }

  deleteHobby(title: string){
    this.hobbyService.deleteHobby(title)
    this.hobbies = this.hobbyService.getHobbies();
  }
}
