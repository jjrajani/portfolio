import React, { Component } from 'react';

export default function(ComposedComponent) {
    class ScrollToTop extends Component {
        componentDidMount() {
            window.scrollTo(0, 0);
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    return ScrollToTop;
}
