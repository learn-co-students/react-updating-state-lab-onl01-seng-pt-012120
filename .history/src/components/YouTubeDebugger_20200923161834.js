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
        console.log(this.state)
    }

            
    render(){
        return(
            <button className='bitrate' onclick={this.handleClick}>Bitrate</button>
        )
    }
}