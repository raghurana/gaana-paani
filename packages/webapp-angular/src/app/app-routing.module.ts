import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchSongsComponent } from './components/search-songs/search-songs.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { AuthGuardService } from './services/authguard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    //canActivate: [AuthGuardService],
    component: HomeComponent,
    children: [
      { path: 'search', component: SearchSongsComponent },
      { path: 'detail', component: SongDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
