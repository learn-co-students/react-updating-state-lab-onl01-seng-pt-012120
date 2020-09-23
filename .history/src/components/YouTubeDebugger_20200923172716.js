// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component{

    constructor(props){
        super(props)
        this.state = {
          errors: [],
          user: null,
          settings: {
            bitrate: 8,
            video: {
              resolution: '1080p'
            }
          }
        }
    }

    handleClick=(e)=>{
        console.log(e.target.className);
        this.setState({
            settings:{
                bitrate: 12

            }
        })
    }
            
    render(){
        return([<button className='bitrate' onClick={this.handleClick}>Bitrate</button>,<button className='resolution' onClick={this.handleClick}>Resolution</button>])
    }
}