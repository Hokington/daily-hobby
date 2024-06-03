import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { Hobby, HobbyService } from '../hobby.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public hobbies: Hobby[] = this.hobbyService.getHobbies();

  constructor(private router: Router, private hobbyService: HobbyService) {}

  ionViewWillEnter() {
    this.hobbies = this.hobbyService.getHobbies();
  }

  addHobby() {
    this.router.navigateByUrl('/tabs/empezar-hobby');
  }

  editHobby() {
    this.router.navigateByUrl('/tabs/editar-hobby');
  }

}
