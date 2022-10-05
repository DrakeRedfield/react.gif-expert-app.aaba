const { renderHook, waitFor } = require("@testing-library/react");
const { useFetchGif } = require("../../app/utils/hooks/useFetchGif");

describe('useFetchGif Custom Hook Testing', () => {
  const category = 'Uncharted';
  test('should return init state', () => {
    const { result } = renderHook(() => useFetchGif(category));
    const { gifs, isLoading } = result.current;

    expect(gifs).toHaveLength(0);
    expect(isLoading).toBeTruthy();
  });
  test('should return gifs and isLoading must be false', async () => {
    const { result } = renderHook(() => useFetchGif(category));

    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0)
    )
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
})