import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { Hobby, HobbyService } from '../hobby.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(private router: Router, private hobbyService: HobbyService, private authService: AuthService) {}

  public session = this.authService.getSession()

  public hobbies: Hobby[] = this.hobbyService.getHobbies(this.session.email);

  
  ionViewWillEnter() {
    this.hobbies = this.hobbyService.getHobbies(this.session.email);
  }

  addHobby() {
    this.router.navigateByUrl('/tabs/empezar-hobby');
  }

  editHobby() {
    this.router.navigateByUrl('/tabs/editar-hobby');
  }



}
