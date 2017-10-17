import React, { Component } from 'react';

export default function(ComposedComponent, defaultLink, onClick) {
    class ToggleVisibilityMode extends Component {
        constructor(props) {
            super(props);
            this.state = {
                activeLink: defaultLink
            };
        }
        onClick = link => {
            if (onClick) {
                onClick();
            } else {
                this.setState({ activeLink: link });
            }
        };

        render = () => {
            return (
                <ComposedComponent
                    {...this.props}
                    activeLink={this.state.activeLink}
                    onClick={this.onClick}
                />
            );
        };
    }

    return ToggleVisibilityMode;
}
