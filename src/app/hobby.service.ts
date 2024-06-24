import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HobbyService {

  constructor() { }

  getHobbies(owner: string): any[] {
    const storedHobbies = localStorage.getItem('hobbies');
    let hobbies = []
    if (storedHobbies !== null) {
      hobbies = JSON.parse(storedHobbies);
    } else {
      hobbies = [];
    }

    return hobbies.filter((hobby: Hobby) => hobby.owner == owner)

  }

  addHobby(owner: string, title: string, color: string, duration: number){
    const today = new Date();
    const todayString = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;
    
    const hobby: Hobby = {owner, title, color, duration, streak: 0, highest_streak: 0, creation: todayString, isFinished: false, days: []}
    const hobbies = this.getAllHobbies();
    hobbies.push(hobby)
    localStorage.setItem('hobbies', JSON.stringify(hobbies));
  }

  getAllHobbies(){
    const storedHobbies = localStorage.getItem('hobbies');
    if (storedHobbies !== null) {
      return JSON.parse(storedHobbies);
    } else {
      return [];
    }
  }

  deleteHobby(title: string){
    const hobbies = this.getAllHobbies();
    const index = hobbies.findIndex((hobby: Hobby) => hobby.title === title);
    if (index !== -1) {
      hobbies.splice(index, 1);
      localStorage.setItem('hobbies', JSON.stringify(hobbies));
    }
  }

  completeHobby(title: string){
    let hobbies = this.getAllHobbies();
    const hobbyIndex = hobbies.findIndex((hobby: Hobby) => hobby.title === title);
    if (hobbyIndex !== -1) {
      const hobby = hobbies[hobbyIndex];
      hobby.isFinished = !hobby.isFinished;
      hobbies[hobbyIndex] = hobby;
      localStorage.setItem('hobbies', JSON.stringify(hobbies));
    }
  }
}

export interface Hobby {
  owner: string;
  title: string;
  color: string;
  duration: number;
  streak: number;
  highest_streak: number;
  creation: string;
  isFinished: boolean;
  days: {
    day: string;
    time: string;
  }[];
}

