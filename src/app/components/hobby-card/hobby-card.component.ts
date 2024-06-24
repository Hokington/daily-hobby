import { Component, Input, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { Hobby, HobbyService } from '../../hobby.service';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';


@Component({
  selector: 'app-hobby-card',
  templateUrl: './hobby-card.component.html',
  styleUrls: ['./hobby-card.component.scss'],
})

export class HobbyCardComponent {

  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  @Input() hobby!: Hobby;

  private animation!: Animation;
  private lowerOpacityAnimation!: Animation;
  public progress: number = 0.3

  constructor(private hobbyService: HobbyService, private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(500)
      .fromTo('scale', '1', '1.05')
      .fromTo('scale', '1.05', '1')
      ;

    this.lowerOpacityAnimation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(300)
      .fromTo('opacity', '1', '0.5')
      ;
  }

  completeTask(title: string){
    this.hobbyService.completeHobby(title)
    this.hobby.isFinished = !this.hobby.isFinished
    this.animation.play();
    if (this.hobby.isFinished){
      this.lowerOpacityAnimation.play()
    } else {
      this.lowerOpacityAnimation.stop()
    }
  }

  async openTimer(duration: number) {
    
  }
}
