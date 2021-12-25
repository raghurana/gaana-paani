export const arrayChunk = (array: any[], chunkSize: number) => {
  let chunks = [];
  let i = 0;
  let n = array.length;
  while (i < n) chunks.push(array.slice(i, (i += chunkSize)));
  return chunks;
};
