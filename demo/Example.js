import React from 'react';
import Scrollable from '../src/Scrollable';


var Example = React.createClass({

    render: function() {
        return (
            <Scrollable>
                <div className="inner" />
            </Scrollable>
        );
    }

});

//<img src="https://filmfork-cdn.s3.amazonaws.com/content/TopGun1.jpg" />

React.render(<Example />, document.body);