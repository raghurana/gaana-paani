export interface Song {
  id: string;
  title: string;
  movie: string;
  singer: string;
  language: string;
  path: string;
  isUserFav: boolean;
  favedBy?: string[];
}
