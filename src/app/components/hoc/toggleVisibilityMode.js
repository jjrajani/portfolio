import React, { Component } from 'react';

export default function(ComposedComponent, modes, defaultMode) {
    class ToggleVisibilityMode extends Component {
        constructor(props) {
            super(props);
            this.state = {
                mode: defaultMode
            };
        }
        toggleVisible = key => {
            this.setState({ mode: key });
        };

        render = () => {
            return (
                <ComposedComponent
                    {...this.props}
                    visibileMode={this.state.mode}
                    toggleVisible={this.toggleVisible}
                />
            );
        };
    }

    return ToggleVisibilityMode;
}
