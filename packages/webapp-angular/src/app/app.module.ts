import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import {
  FirebaseError,
  initializeApp,
  provideFirebaseApp,
} from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import firebaseProdSecrets from '../assets/secrets/firebase-prod-private.json';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginComponent } from './components/login/login.component';
import { SongListItemComponent } from './components/song-list-item/song-list-item.component';
import { SearchSongsComponent } from './components/search-songs/search-songs.component';
import { HomeComponent } from './components/home/home.component';
import * as NgFire from '@angular/fire/firestore';
import { FavSongsComponent } from './components/fav-songs/fav-songs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SongListItemComponent,
    SearchSongsComponent,
    HomeComponent,
    FavSongsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressBarModule,
    provideFirebaseApp(() => initializeApp(firebaseProdSecrets.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  warn1 = 'Multiple tabs open, persistence can only be enabled in one tab.';
  warn2 = 'The current browser doesnt support features for persistence';

  constructor(fireStore: NgFire.Firestore) {
    NgFire.enableIndexedDbPersistence(fireStore).then(
      () => console.log('Persistence enabled'),
      (err: unknown) => {
        const fbError = err as FirebaseError;
        if (fbError?.code == 'failed-precondition') console.warn(this.warn1);
        else if (fbError?.code == 'unimplemented') console.warn(this.warn2);
        else console.warn(err);
      }
    );
  }
}
