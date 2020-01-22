import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { CountInput } from './CountInput';

describe('<CountInput />', () => {
  afterEach(cleanup);
  test('renders', () => {
    const { asFragment } = render(<CountInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders children', () => {
    const { getByText } = render(
      <CountInput>Hello World</CountInput>
    );

    const text = getByText(/Hello World/i)
    expect(text).toBeInTheDocument();
  });

  test('has increase and decrease buttons', () => {
    const { getByTestId } = render(
      <CountInput />
    );
    expect(getByTestId('increase-button')).toBeInTheDocument();
    expect(getByTestId('decrease-button')).toBeInTheDocument();
  });

  test('triggers add function when increase button is clicked', () => {
    let count = 0;
    const add = () => count += 1;
    const remove = () => count -= 1;
    const { getByTestId } = render(
      <CountInput
        add={add}
        remove={remove}
      />
    );
    const increaseButton = getByTestId('increase-button');
    const decreaseButton = getByTestId('decrease-button');

    fireEvent.click(increaseButton);
    expect(count).toEqual(1);
    fireEvent.click(decreaseButton);
    expect(count).toEqual(0);
  });
})