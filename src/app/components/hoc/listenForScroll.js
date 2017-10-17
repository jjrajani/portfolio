import React, { Component } from 'react';

export default function(maxScroll, cb, ComposedComponent) {
    class ListenForScroll extends Component {
        constructor(props) {
            super(props);
            this.state = { fixedNav: false };
        }
        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll);
        }
        componentWillUnmount = () => {
            window.removeEventListener('scroll', this.handleScroll, false);
        };
        handleScroll = () => {
            let isPastScrollPoint;
            if (cb) {
                isPastScrollPoint = cb();
            } else {
                isPastScrollPoint = window.scrollY > maxScroll;
            }
            if (isPastScrollPoint !== this.state.fixedNav) {
                this.setState({ fixedNav: isPastScrollPoint });
            }
        };
        render() {
            return (
                <ComposedComponent
                    {...this.props}
                    fixedNav={this.state.fixedNav}
                />
            );
        }
    }

    return ListenForScroll;
}
