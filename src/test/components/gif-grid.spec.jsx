import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../app/components";
import { gifDummy } from "../../app/utils/helpers/gif-data.dummy";
import { useFetchGif } from "../../app/utils/hooks/useFetchGif";

jest.mock("../../app/utils/hooks/useFetchGif");

describe('Gif Grid Testing', () => {
  const category = 'Uncharted';
  test('should show loading', () => {
    useFetchGif.mockReturnValue({
      gifs: [],
      isLoading: true
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });
  test('should show gif cards', () => {
    useFetchGif.mockReturnValue({
      gifs: gifDummy,
      isLoading: false
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img')).toHaveLength(gifDummy.length);
  })
})