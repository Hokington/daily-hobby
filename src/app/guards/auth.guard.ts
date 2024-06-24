import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = new AuthService;
  const router = new Router;
  const session = authService.getSession()

  if (session == null){
    router.navigateByUrl('login');
    return false
  }

  return true
};
