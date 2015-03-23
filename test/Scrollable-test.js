import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;

import Scrollable from '../src/Scrollable.js';


describe('Scrollable', function() {

    it('should render', function() {
        let scrollable = TestUtils.renderIntoDocument(
            <Scrollable>
                <div className="inner" />
            </Scrollable>
        );
        let component = TestUtils.findRenderedDOMComponentWithClass(scrollable, 'Scrollable');
        //expect(component.getDOMNode().textContent).to.equal('x');
    });

});