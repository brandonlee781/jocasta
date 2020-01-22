import React from 'react';
import { DiceDisplay } from './DiceDisplay';
import { render, cleanup } from '@testing-library/react';


describe('<DiceDisplay/>', () => {
  afterEach(cleanup);
  test('renders', () => {
    const { asFragment } = render(<DiceDisplay boost={2}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows 1 ability icon', () => {
    const { getAllByTestId } = render(<DiceDisplay ability={1} />)
    expect(getAllByTestId('ability-icon').length).toEqual(1);
  });

  test('updates icons if numbers change', () => {
    const { getAllByTestId, rerender} = render(<DiceDisplay ability={1} />);
    expect(getAllByTestId('ability-icon').length).toEqual(1);
    rerender(<DiceDisplay ability={2} />);
    expect(getAllByTestId('ability-icon').length).toEqual(2);
    rerender(<DiceDisplay ability={2} boost={1} />);
    expect(getAllByTestId('ability-icon').length).toEqual(2);
    expect(getAllByTestId('boost-icon').length).toEqual(1);
  });
});