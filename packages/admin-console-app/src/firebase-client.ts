import path from "path";
import admin from "firebase-admin";
import firebase = admin.firestore;
import { AppConfig, Song } from "./interfaces";
import * as Utils from "./utils";

export class FirebaseClient {
  private firestoreDb: firebase.Firestore;

  constructor(config: AppConfig) {
    const certFilePath = path.resolve(config.firebase.serviceAccountPrivateKeyRelativePath);
    this.firestoreDb = admin
      .initializeApp({
        databaseURL: config.firebase.dbUrl,
        credential: admin.credential.cert(certFilePath),
      })
      .firestore();
  }

  async saveSongs(systemName: string, songs: Song[]): Promise<number> {
    let totalWriteCount = 0;
    const songBatches = Utils.arrayChunk(songs, 500); // Firestore limitation: A batched write can contain up to 500 operations.
    for (const songBatch of songBatches) {
      const batch = this.firestoreDb.batch();
      for (const song of songBatch) {
        const docRef = this.firestoreDb.collection("system").doc(systemName).collection("songs").doc(song.id);
        batch.set(docRef, song, { merge: true });
      }
      const writeResults = await batch.commit();
      totalWriteCount += writeResults.length;
    }
    return totalWriteCount;
  }
}
