import { Component, OnDestroy, OnInit, Output } from '@angular/core';
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
  filteredSongs: Song[];
  subscriptions = new Subscription();
  searchTerms$ = new Subject<string>();
  isLoading = false;

  constructor(private readonly songsService: SongsService) {
    this.allSongs = [];
    this.filteredSongs = [];
  }

  async ngOnInit() {
    this.isLoading = true;
    this.allSongs = await this.songsService.getAllSongs();
    this.filteredSongs = this.allSongs;
    this.isLoading = false;
    this.subscriptions.add(
      this.searchTerms$
        .pipe(debounceTime(500))
        .subscribe((searchTerm) =>
          this.onNewSearchTermEntered(searchTerm.toLowerCase())
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onNewSearchTermEntered(term: string) {
    this.filteredSongs = term
      ? this.allSongs.filter(
          (s) =>
            s.title.toLowerCase().includes(term) ||
            s.movie.toLowerCase().includes(term) ||
            s.singer.toLowerCase().includes(term)
        )
      : this.allSongs;
  }
}
