import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../app/components"

describe('Add Category Testing', () => {
  const categoryName = 'Uncharted';

  test('Should change the state on input field', () => {
    render(<AddCategory onSetCategory={() => { }} />);
    const inputElement = screen.getByRole('textbox');

    fireEvent.input(inputElement, { target: { value: categoryName } });
    expect(inputElement.value).toBe(categoryName);
  });
  test("Should submit the input value if input isn't empty", () => {

    const onSetCategory = jest.fn();
    render(<AddCategory onSetCategory={onSetCategory} />);
    const inputElement = screen.getByRole('textbox');
    const formElement = screen.getByTestId('form');

    fireEvent.input(inputElement, { target: { value: categoryName } });
    fireEvent.submit(formElement);

    expect(inputElement.value).toBe('');
    expect(onSetCategory).toBeCalledTimes(1);
    expect(onSetCategory).toBeCalledWith(categoryName);
  });

  test("Shouldn't submit the input value if input is empty", () => {

    const onSetCategory = jest.fn();
    render(<AddCategory onSetCategory={onSetCategory} />);
    const formElement = screen.getByTestId('form');

    fireEvent.submit(formElement);
    expect(onSetCategory).toBeCalledTimes(0);
  });
})