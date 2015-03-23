import React from 'react/addons';


let AxisX = React.createClass({


    render() {
        console.info('AxisX.render');
        let classes = ['AxisX'];
        let style = {
        };
        return (
            <div className={classes.join(' ')}
                style={style}>
                {this.props.children}
            </div>
        )
    }
});


export default AxisX;