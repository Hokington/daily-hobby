import { Component, Input, OnInit } from '@angular/core';
import { Hobby, HobbyService } from '../../hobby.service';
import { ModalController } from '@ionic/angular';
import { TimerComponent } from '../timer/timer.component';


@Component({
  selector: 'app-hobby-card',
  templateUrl: './hobby-card.component.html',
  styleUrls: ['./hobby-card.component.scss'],
})
export class HobbyCardComponent implements OnInit {

  @Input() hobby!: Hobby;

  public progress: number = 0.3
  
  constructor(private hobbyService: HobbyService, private modalController: ModalController) { }

  ngOnInit() {}

  completeTask(title: string){
    this.hobbyService.completeHobby(title)
    this.hobby.isFinished = !this.hobby.isFinished
  }

  async openTimer(duration: number) {
    
  }
}
