import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super();
     
        this.state = {
          timesClicked: 0
        };
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
             timesClicked: previousState.timesClicked + 1   
            }
        })
    };
     
    render() {
        return (
          <div>
            <p>I have been clicked {this.state.timesClicked} time{(this.state.timesClicked === 1) ? null : 's'}!</p>
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
          </div>
        );
    }
}
