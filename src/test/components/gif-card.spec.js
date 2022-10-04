import { render, screen } from "@testing-library/react"
import { GifCard } from "../../app/components"

describe('Gif Card Testing', () => {
  const title = 'Uncharted';
  const url = 'https://mock.url.test/testing-url';

  test('should match with snapshot', () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test('should render with title and url', () => {
    render(<GifCard title={title} url={url} />);
    const { alt, src } = screen.getByRole('img');

    expect(alt).toBe(title);
    expect(src).toBe(url);
  });
  test('should render title', () => {
    render(<GifCard title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
})