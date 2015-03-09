import React from 'react/addons';


let Scrollable = React.createClass({


    onClick() {
        console.info('Scrollable.onClick');
    },


    render() {
        console.info('Scrollable.render');
        let classes = ['Scrollable'];
        return (
            <div className={classes.join(' ')} onClick={this.onClick}>
                {this.props.name}
            </div>
        )
    }
});


export default Scrollable;