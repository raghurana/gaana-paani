import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginError: string | null = null;

  constructor(private readonly auth: Auth, private readonly router: Router) {}

  async onLoginClick(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.loginError = null;
      this.router.navigateByUrl('search');
    } catch (ex: unknown) {
      this.handleError(ex);
    }
  }

  private handleError(ex: unknown) {
    if (ex as FirebaseError) {
      this.loginError = (ex as FirebaseError).code;
    } else {
      this.loginError = (ex as Error).message;
    }
  }
}
