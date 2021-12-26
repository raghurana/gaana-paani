import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces';

@Component({
  selector: 'app-song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.scss'],
})
export class SongListItemComponent implements OnInit {
  @Input()
  song!: Song;

  ngOnInit(): void {}

  onContentClick() {
    console.log('content clicked');
  }

  onFavButtonClick() {
    console.log('fav clicked');
  }
}
