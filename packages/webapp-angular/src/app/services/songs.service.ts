import { Injectable } from '@angular/core';
import { Song } from '../interfaces';
import { Auth } from '@angular/fire/auth';
import * as NgFire from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  private readonly songsCollection = '/system/magicsing-et25k-v100/songs';
  private allSongs: Song[] = [];

  constructor(private fireStore: NgFire.Firestore, private auth: Auth) {}

  async getAllSongs(): Promise<Song[]> {
    if (this.allSongs.length > 0) return this.allSongs;

    console.log('Fetching from Firestore.');
    const allSongsQuery = NgFire.query(
      NgFire.collection(this.fireStore, this.songsCollection)
    );

    const allSongsQueryResult = await NgFire.getDocs(allSongsQuery);
    this.allSongs = allSongsQueryResult.docs.map((snap) => {
      const docData = snap.data() as Song;
      const userEmail = this.auth.currentUser?.email || '';
      const isFav = docData.favedBy?.includes(userEmail) || false;
      return <Song>{
        ...docData,
        path: snap.ref.path,
        isUserFav: isFav,
      };
    });
    return this.allSongs;
  }

  async getMyFavs(): Promise<Song[]> {
    const userEmail = this.auth.currentUser?.email;
    const myFavsQuery = NgFire.query(
      NgFire.collection(this.fireStore, this.songsCollection),
      NgFire.where('favedBy', 'array-contains', userEmail)
    );
    const myFavsQueryResult = await NgFire.getDocs(myFavsQuery);
    return myFavsQueryResult.docs.map((snap) => {
      return snap.data() as Song;
    });
  }

  async updateSongFavStatus(song: Song, isFav: boolean): Promise<boolean> {
    const songRef = NgFire.doc(this.fireStore, song.path);
    const currentUserEmail = this.auth.currentUser?.email;
    const updateField = isFav
      ? NgFire.arrayUnion(currentUserEmail)
      : NgFire.arrayRemove(currentUserEmail);
    await NgFire.updateDoc(songRef, { favedBy: updateField });
    return true;
  }
}
