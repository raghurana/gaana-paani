import { Injectable } from '@angular/core';
import { Song } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  async getAllSongs(): Promise<Song[]> {
    return [
      {
        id: '20001',
        language: 'hindi',
        movie: 'TEESRI KASAM',
        singer: 'LATA MANGESHKAR',
        title: 'AAAA BHI JA',
      },
      {
        id: '20002',
        language: 'hindi',
        movie: 'JIS DESH MEIN GANGA BEHTI HAI',
        singer: 'MUKESH & LATA',
        title: 'AA AB LAUT CHALE',
      },
      {
        id: '20003',
        language: 'hindi',
        movie: 'DOOR GAGAN KI CHHAON MEIN',
        singer: 'KISHOE KUMAR',
        title: 'AA CHAL KE TUJHE',
      },
      {
        id: '20001',
        language: 'hindi',
        movie: 'TEESRI KASAM',
        singer: 'LATA MANGESHKAR',
        title: 'AAAA BHI JA',
      },
      {
        id: '20002',
        language: 'hindi',
        movie: 'JIS DESH MEIN GANGA BEHTI HAI',
        singer: 'MUKESH & LATA',
        title: 'AA AB LAUT CHALE',
      },
      {
        id: '20003',
        language: 'hindi',
        movie: 'DOOR GAGAN KI CHHAON MEIN',
        singer: 'KISHOE KUMAR',
        title: 'AA CHAL KE TUJHE',
      },
      {
        id: '20001',
        language: 'hindi',
        movie: 'TEESRI KASAM',
        singer: 'LATA MANGESHKAR',
        title: 'AAAA BHI JA',
      },
      {
        id: '20002',
        language: 'hindi',
        movie: 'JIS DESH MEIN GANGA BEHTI HAI',
        singer: 'MUKESH & LATA',
        title: 'AA AB LAUT CHALE',
      },
      {
        id: '20003',
        language: 'hindi',
        movie: 'DOOR GAGAN KI CHHAON MEIN',
        singer: 'KISHOE KUMAR',
        title: 'AA CHAL KE TUJHE',
      },
    ];
  }
}
