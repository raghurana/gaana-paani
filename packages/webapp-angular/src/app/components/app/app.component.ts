import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public readonly auth: Auth, private readonly router: Router) {}

  async onLogoutClick() {
    await this.auth.signOut();
    this.router.navigateByUrl('login');
  }
}
