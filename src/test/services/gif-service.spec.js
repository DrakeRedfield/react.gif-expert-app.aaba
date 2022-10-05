import { getGifs } from "../../app/utils/services"

describe('Testing Gif Service', () => {
  test('should return and array of gifs', async () => {
    const gifs = await getGifs('Uncharted');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})