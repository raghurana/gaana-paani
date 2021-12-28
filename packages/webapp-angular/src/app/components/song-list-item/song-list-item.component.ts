import { Song } from 'src/app/interfaces';
import { Component, Input } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.scss'],
})
export class SongListItemComponent {
  @Input()
  song!: Song;

  @Input()
  mode: 'search' | 'favs';

  constructor(private readonly songService: SongsService) {
    this.mode = 'search';
  }

  onContentClick() {
    console.log('content clicked');
  }

  async onFavButtonClick() {
    const newStatus = !this.song.isUserFav;
    await this.songService.updateSongFavStatus(this.song, newStatus);
    this.song.isUserFav = newStatus;
  }
}
