import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { Song } from 'src/app/interfaces';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-search-songs',
  templateUrl: './search-songs.component.html',
  styleUrls: ['./search-songs.component.scss'],
})
export class SearchSongsComponent implements OnInit, OnDestroy {
  allSongs: Song[];
  subscriptions = new Subscription();
  searchTerms$ = new Subject<string>();

  constructor(private readonly songsService: SongsService) {
    this.allSongs = [];
  }

  async ngOnInit() {
    this.allSongs = await this.songsService.getAllSongs();
    this.subscriptions.add(
      this.searchTerms$
        .pipe(debounceTime(500))
        .subscribe(this.onNewSearchTermEntered)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onNewSearchTermEntered(term: string) {
    console.log(term);
  }
}
