import React from 'react/addons';

let Scrollable = React.createClass({


    pushed: false,


    componentDidMount() {
        document.addEventListener('mouseup', this.onUp);
        document.addEventListener('mousemove', this.onMove);
    },


    componentWillUnmount() {
        document.removeEventListener('mouseup', this.onUp);
        document.removeEventListener('mousemove', this.onMove);
    },


    onDown(e) {
        this.pushed = true;
        this.lastClientX = e.clientX;
        this.lastClientY = e.clientY;
        e.preventDefault();
        e.stopPropagation();
    },


    onUp() {
        if (this.pushed) {
            this.pushed = false;
        }
    },


    onMove(e) {
        var domNode = this.getDOMNode();
        if (this.pushed) {
            domNode.scrollLeft -= (e.clientX - this.lastClientX);
            domNode.scrollTop -= (e.clientY - this.lastClientY);
            this.lastClientX = e.clientX;
            this.lastClientY = e.clientY;
        }
    },


    render() {
        console.info('Scrollable.render');
        let classes = ['Scrollable'];
        let style = {
            cursor: 'move',
            overflow: 'auto'
        };
        return (
            <div ref="scroller"
                className={classes.join(' ')}
                style={style}
                onMouseDown={this.onDown}>
                {this.props.children}
            </div>
        )
    }
});


export default Scrollable;