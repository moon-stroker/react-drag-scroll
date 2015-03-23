import React from 'react/addons';
import Sync from './Sync';
import Viewport from './Viewport';



let Scrollable = React.createClass({


    pushed: false,
    scrollable: true,


    getInitialState() {
        return {
            scrollTop: 0,
            scrollLeft: 0
        }
    },

    componentDidMount() {
        document.addEventListener('mouseup', this.onUp);
        document.addEventListener('mousemove', this.onMove);
        this.intervalId = setInterval(() => {
            this.scrollable = true;
        }, 100);
        this.getDOMNode().addEventListener('scroll', this.onScroll);
    },


    componentWillUnmount() {
        document.removeEventListener('mouseup', this.onUp);
        document.removeEventListener('mousemove', this.onMove);
        this.clearInterval(this.intervalId);
        this.scrollable = false;
        this.getDOMNode().removeEventListener('scroll', this.onScroll);
    },


    onScroll(event) {
//        console.info('onScroll', this.scrollable);

        if (this.scrollable) {

            console.info('onScroll', event);

            var target = event.target;

            this.setState({
                scrollTop: target.scrollTop,
                scrollLeft: target.scrollLeft
            });
        }
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

        let scrollTop = this.state.scrollTop;
        let scrollLeft = this.state.scrollLeft;
        let children = this.props.children.map((child) => {
            console.info('child', child);
            if (child.type && child.type.displayName === 'Sync') {
                return React.addons.cloneWithProps(child, {
                    scrollTop: scrollTop,
                    scrollLeft: scrollLeft
                });
            } else {
                return (
                    <Viewport>{child}</Viewport>
                );
            }
        });
        //children.push(<Sync />);
        //console.info(<Sync />);
        return (
            <div ref="scroller"
                className={classes.join(' ')}
                style={style}
                onMouseDown={this.onDown}>
                {children}
            </div>
        )
    }
});


export default Scrollable;