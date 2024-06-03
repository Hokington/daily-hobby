import { Component, OnInit } from '@angular/core';
import { Hobby, HobbyService } from '../../hobby.service';

@Component({
  selector: 'app-hobby-list',
  templateUrl: './hobby-list.component.html',
  styleUrls: ['./hobby-list.component.scss'],
})

export class HobbyListComponent  implements OnInit {

  public hobbies: Hobby[] = this.hobbyService.getHobbies();

  constructor(private hobbyService: HobbyService) { }

  ngOnInit() {
    this.hobbies = this.hobbyService.getHobbies();
  }

  ionViewWillEnter() {
    this.hobbies = this.hobbyService.getHobbies()
  }

}
