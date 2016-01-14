jest.dontMock('../Button')

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const Button = require('../Button');

describe('Button Component', function buttonComponentTestSuit() {

    it('calls handler function on click', function buttonClickHandler() {

        var handleClick = jest.genMockFunction();

        var button = TestUtils.renderIntoDocument(
            <Button handleClick={ handleClick } />
    );

        var buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

        TestUtils.Simulate.click(buttonInstance);

        expect(handleClick).toBeCalled();

        var numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

        expect(numberOfCallsMadeIntoMockFunction).toBe(1);
    });
});