// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component{


    render(){
        return (
            <button>
                {this.state.count}
            </button>
        )
    }
}