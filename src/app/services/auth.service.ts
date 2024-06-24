import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUsers(): any[] {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers !== null) {
      return JSON.parse(storedUsers);
    } else {
      return [];
    }
  }

  addUser(user: User){
    const users = this.getUsers();
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUser(email: string){
    const users = this.getUsers();
    return users.find((user) => user.email = email) 
  }

  createSession(user: User){
    localStorage.setItem('session', JSON.stringify(user))
  }

  getSession(){
    const session = localStorage.getItem('session')
    if (session !== null) {
      return JSON.parse(session);
    } else {
      return null;
    }
  }

  destroySession(){
    localStorage.removeItem('session')
  }

}

export interface User {
  name: string;
  email: string;
  password: string;
}