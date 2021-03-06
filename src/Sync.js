import React from 'react/addons';


let Sync = React.createClass({

    scrollable: true,


    componentDidMount() {
        console.info('Sync.componentDidMount', this, this.props);
    },


    componentWillUnmount() {
        console.info('Sync.componentDidMount');
    },


    render() {
        console.info('Sync.render');

        let classes = ['Sync', this.props.orientation];
        let style = {
            //scrollTop: this.props.scrollTop,
            scrollLeft: this.props.scrollLeft
        };
        return (
            <div className={classes.join(' ')}
                style={style}>
                {this.props.children}
            </div>
        )
    }
});


export default Sync;