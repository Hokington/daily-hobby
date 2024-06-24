import { Component } from '@angular/core';
import { HobbyService, Hobby } from '../hobby.service';
import { AuthService } from '../services/auth.service';
import { APIService } from '../services/api.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private hobbyService: HobbyService, private authService: AuthService, private apiService: APIService) {}

  public randomImage: string = ''

  public session = this.authService.getSession()
  public hobbies: Hobby[] = this.hobbyService.getHobbies(this.session.email);
  public completedTasksToday: number = 0
  public totalTasks: number = 0

  ionViewWillEnter() {

    this.loadRandomImage();

    this.hobbies = this.hobbyService.getHobbies(this.session.email);
    this.completedTasksToday = this.hobbies.filter( hobby => hobby.isFinished).length
    this.totalTasks = this.hobbies.length
    if (this.completedTasksToday == this.totalTasks){
      const dialog = document.querySelector('dialog')
      if (dialog){
        dialog.showModal();
      }
    }
  }

  async loadRandomImage() {
    this.randomImage = await this.apiService.getRandomImage();
  }

}
