import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { DiceCountInput } from './DiceCountInput';

describe('<DiceCountInput />', () => {
  afterEach(cleanup);
  test('renders', () => {
    const { asFragment } = render(<DiceCountInput label="Test Label" die={<span>Hello World</span>} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders children', () => {
    const { getByText } = render(
      <DiceCountInput label="Test Label" die={<span>Hello World</span>} />
    );

    const text = getByText(/Hello World/i)
    expect(text).toBeInTheDocument();
  });

  test('renders label', () => {
    const { getByText } = render(<DiceCountInput label="Test Label" die={<span>Hello World</span>} />)
    expect(getByText(/Test Label/i)).toBeInTheDocument();
  });

  test('has increase and decrease buttons', () => {
    const { getByTestId } = render(
      <DiceCountInput label="Test Label" die={<span>Hello World</span>} />
    );
    expect(getByTestId('increase-button')).toBeInTheDocument();
    expect(getByTestId('decrease-button')).toBeInTheDocument();
  });

  test('triggers add function when increase button is clicked', () => {
    let count = 0;
    const add = () => count += 1; // eslint-disable-line
    const remove = () => count -= 1; // eslint-disable-line
    const { getByTestId } = render(
      <DiceCountInput
        label="Test Label"
        die={ <span>Hello World</span>}
        increase={add}
        decrease={remove}
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