import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchSongsComponent } from './components/search-songs/search-songs.component';
import { FavSongsComponent } from './components/fav-songs/fav-songs.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: () => redirectLoggedInTo(['']) },
  },
  {
    path: '',
    canActivate: [AuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) },
    component: HomeComponent,
    children: [
      { path: 'search', component: SearchSongsComponent },
      { path: 'favs', component: FavSongsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
