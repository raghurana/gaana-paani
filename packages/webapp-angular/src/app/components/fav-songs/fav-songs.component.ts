import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-fav-songs',
  templateUrl: './fav-songs.component.html',
  styleUrls: ['./fav-songs.component.scss'],
})
export class FavSongsComponent implements OnInit {
  favSongs: Song[];

  constructor(private songsService: SongsService) {
    this.favSongs = [];
  }

  async ngOnInit() {
    this.favSongs = await this.songsService.getMyFavs();
  }
}
