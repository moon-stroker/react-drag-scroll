import React from 'react/addons';


let Sync = React.createClass({

    scrollable: true,


    componentDidMount() {
        console.info('Sync.componentDidMount', this, this.props);
        this.intervalId = setInterval(() => {
            this.scrollable = true;
        }, 100);
        this.getDOMNode().addEventListener('scroll', this.onScroll);
    },


    componentWillUnmount() {
        console.info('Sync.componentDidMount');
        this.clearInterval(this.intervalId);
        this.scrollable = false;
        this.getDOMNode().removeEventListener('scroll', this.onScroll);
    },


    onScroll(event) {

        console.info('onScroll', this.scrollable);

        if (this.scrollable) {

            console.info('onScroll', event, event.data.target, event.data.elements);

            var target = event.data.target;
            var elements = event.data.elements;

            var axis = event.data.axis;
            if (axis === 'xy' || axis === 'y') {
                elements.scrollTop(target.scrollTop());
            }
            if (axis === 'xy' || axis === 'x') {
                elements.scrollLeft(target.scrollLeft());
            }
        }
    },


    render() {
        console.info('Sync.render');

        let classes = ['Sync', this.props.orientation];
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


export default Sync;