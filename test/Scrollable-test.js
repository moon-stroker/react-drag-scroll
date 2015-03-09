import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;

import Scrollable from '../src/Scrollable.js';


describe('Scrollable', function() {

    it('should render name', function() {
        let scrollable = TestUtils.renderIntoDocument(
            <Scrollable name='x' />
        );
        let component = TestUtils.findRenderedDOMComponentWithClass(scrollable, 'Scrollable');
        expect(component.getDOMNode().textContent).to.equal('x');
    });

});