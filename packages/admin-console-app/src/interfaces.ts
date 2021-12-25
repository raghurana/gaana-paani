export interface AppConfig {
  firebase: {
    dbUrl: string;
    serviceAccountPrivateKeyRelativePath: string;
  };
  songData: {
    basePath: string;
    systems: [
      {
        systemName: string;
        hindiCsvFile: string;
      }
    ];
  };
}

export interface Song {
  id: string;
  title: string;
  movie: string;
  singer: string;
  language: Language;
}

export type Language = "hindi" | "punjabi" | "english";
