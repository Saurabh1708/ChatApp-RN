import data from './Chunks.json'

export let NUM_CHUNKS_CALLED = 0


export const getChunks = () => {
  if (
    data.data[NUM_CHUNKS_CALLED] === undefined ||
    data.data[NUM_CHUNKS_CALLED].guardrail
  ) {
    return null
  }
  const chunkData = data.data[NUM_CHUNKS_CALLED]
  NUM_CHUNKS_CALLED += 1
  return chunkData
}
