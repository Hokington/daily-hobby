import { Component, OnInit } from '@angular/core';

// Services
import { Hobby, HobbyService } from '../hobby.service';
import { AuthService } from '../services/auth.service';

// Plugin
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-editar-hobby',
  templateUrl: './editar-hobby.page.html',
  styleUrls: ['./editar-hobby.page.scss'],
})
export class EditarHobbyPage implements OnInit {
  
  constructor(private hobbyService: HobbyService, private authService: AuthService) { }
  
  public session = this.authService.getSession();
  public hobbies: Hobby[] = this.hobbyService.getHobbies(this.session.email);

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.hobbies = this.hobbyService.getHobbies(this.session.email);
  }

  async deleteHobby(title: string){
    this.hobbyService.deleteHobby(title)
    this.hobbies = this.hobbyService.getHobbies(this.session.email);

    await Toast.show({
      text: '¡Se ha eliminado el Hobby '+title+'!',
      position: 'top',
      duration: 'short'
    });
  }
}
