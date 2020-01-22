/* eslint-disable @typescript-eslint/no-namespace */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';

declare global {
  namespace NodeJS {
    interface Global {
       document: Document;
       window: Window;
       navigator: Navigator;
    } 
  }
}

const dom = new JSDOM()
global.document = dom.window.document
global.document.execCommand = function execCommandMock() { return true; };
global.window = dom.window
