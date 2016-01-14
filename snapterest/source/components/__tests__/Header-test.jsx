jest.dontMock('../Header');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const Header = require('../Header');

describe('Header component', function headerComponentTestSuit() {

  it('renders provided header text', function () {

    var header = TestUtils.renderIntoDocument(
      <Header text="Testing..." />
    );

    var actualHeaderText = ReactDOM.findDOMNode(header).textContent;

    expect(actualHeaderText).toBe('Testing...');

    var defaultHeader = TestUtils.renderIntoDocument(
      <Header />
    );

    var actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent;

    var defaultHeaderExpect = expect(actualDefaultHeaderText);

    defaultHeaderExpect.toBeDefined();
    defaultHeaderExpect.toContain('head');
    defaultHeaderExpect.toBe('Default header');    

  });
});