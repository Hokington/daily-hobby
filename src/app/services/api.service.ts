import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor() { }

  async getRandomImage(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const result = await response.json()
    return result.message
  }
}
