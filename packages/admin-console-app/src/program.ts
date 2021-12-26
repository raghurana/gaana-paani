import path from "path";
import * as readline from "readline-sync";
import ProdConfig from "../config/prod.json";
import { AppConfig } from "./interfaces";
import { FirebaseClient } from "./firebase-client";
import { SongsCsvParser } from "./songs-csv-parser";

export default class Program {
  static async main() {
    const config = ProdConfig as AppConfig;
    const fireClient = new FirebaseClient(config);

    console.log(`Choose an option below`);
    console.log(`======================`);
    console.log("1. Upload all local csv songs to firestore.");
    const choice = parseInt(readline.question("Please enter your option :: "));

    switch (choice) {
      case 1:
        await Program.uploadAllCsvSongs(config, fireClient);
        break;
      default:
        console.error(`Unknown option ${choice}`);
    }
  }

  static async uploadAllCsvSongs(config: AppConfig, fireClient: FirebaseClient) {
    for (const system of config.songData.systems) {
      for (const csvFile of system.csvFiles) {
        const csvFullPath = path.resolve(path.join(config.songData.basePath, system.systemName, csvFile.fileName));
        const songs = await SongsCsvParser.parseSongs(csvFullPath, csvFile.language);
        const saveCount = await fireClient.saveSongs(system.systemName, songs);
        console.log(`${saveCount} songs were saved successfully.`);
      }
    }
  }
}

Program.main();
