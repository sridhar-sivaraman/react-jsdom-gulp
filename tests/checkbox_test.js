var React = require('react/addons');
var assert = require('assert');
var Checkbox = require('../src/checkbox');
var TestUtils = React.addons.TestUtils;

describe('Todo-item component', function(){
  before('render and locate element', function() {
    // Render the react component in virtual DOM
    var renderedComponent = TestUtils.renderIntoDocument(
      <Checkbox done={false} name="Write Tutorial"/>
    );

    // Searching for <input> tag within rendered React component
    // Throws an exception if not found, It's not handled, As we're sure the react component has an input tag
    var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'input'
    );

    this.inputElement = inputComponent.getDOMNode();
  });

  it('<input> should be of type "checkbox"', function() {
    assert(this.inputElement.getAttribute('type') === 'checkbox');
  });

  it('<input> should not be checked by default', function() {
    assert(this.inputElement.checked === false);
  });

  it('<input> should be checked on click', function() {
    this.inputElement.click();
    assert(this.inputElement.checked === true);
  });

  it('<input> should be unchecked on next click', function() {
    this.inputElement.click();
    assert(this.inputElement.checked === false);
  });
});
