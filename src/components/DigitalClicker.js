// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0,
            hasBeenClicked: false,
        };
    }

    handleClick = ()=>{
        //Update our state here...
        this.setState({
            hasBeenClicked: true,
            timesClicked: this.state.timesClicked+1 
          },()=>
          console.log(this.state.hasBeenClicked), // prints false
          console.log(this.state.timesClicked))
    };


    render(){
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        );
    }
}
export default DigitalClicker;