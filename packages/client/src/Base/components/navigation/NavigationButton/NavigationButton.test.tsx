import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavigationButton } from './NavigationButton';

describe('<NavigationButton />', () => {
  afterEach(cleanup);
  test('renders', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NavigationButton to="/" />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('correctly passes the to string to the NavLink', () => {
    const to = "/hello";
    const button = render(
      <BrowserRouter>
        <NavigationButton to={to} />
      </BrowserRouter>
    );
    const links = button.baseElement.getElementsByTagName('a')
    expect(links.length).toBe(1);
    expect(links[0].href).toMatch(/\/hello/i);
  });

  test('correctly wraps the passed children', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavigationButton to="/">
          <span>Hello World!</span>
          <span>This is a link</span>
        </NavigationButton>
      </BrowserRouter>
    );
    const helloWorld = getByText(/Hello World!/i);
    const thisIsALink = getByText(/This is a link/i);
    expect(helloWorld).toBeInTheDocument();
    expect(thisIsALink).toBeInTheDocument();
  });
});
