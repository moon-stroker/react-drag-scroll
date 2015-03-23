import React from 'react/addons';


let Viewport = React.createClass({

    scrollable: true,


    componentDidMount() {
        console.info('Viewport.componentDidMount', this, this.props);
    },


    componentWillUnmount() {
        console.info('Viewport.componentDidMount');
    },


    render() {
        console.info('Viewport.render');

        let classes = ['Viewport', this.props.orientation];
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


export default Viewport;