import { Language, Song } from "./interfaces";
import { parseFile, ParserOptionsArgs } from "@fast-csv/parse";

export const SongsCsvParser = {
  parseSongs: (dataFilePath: string, lang: Language): Promise<Song[]> => {
    const allSongs: Song[] = [];
    return new Promise<Song[]>((resolve, reject) => {
      parseFile<string[], Song>(dataFilePath, parseOptions)
        .transform((row: string[]) => transformSongRow(row, lang))
        .on("data", (transformedRow) => allSongs.push(transformedRow))
        .on("error", reject)
        .on("end", () => resolve(allSongs));
    });
  },
};

const transformSongRow = (data: string[], lang: Language): Song => {
  let allSingers = data[3];
  // when there are multiple singers in last column delimeted with commas
  if (data.length > 4) for (let i = 4; i < data.length; i++) allSingers += ` & ${data[i]}`;
  return {
    id: data[0],
    title: data[1],
    movie: data[2],
    singer: allSingers,
    language: lang,
  };
};

const parseOptions: ParserOptionsArgs = {
  objectMode: true,
  ignoreEmpty: true,
  trim: true,
};
