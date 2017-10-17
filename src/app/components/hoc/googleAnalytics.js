import React, { Component } from 'react';

export default function(page, ComposedComponent) {
    class GoogleAnalytics extends Component {
        componentDidMount() {
            this.setAndSendPageview();
        }
        setAndSendPageview() {
            window.ga('set', 'page', page);
            window.ga('send', 'pageview');
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    return GoogleAnalytics;
}
