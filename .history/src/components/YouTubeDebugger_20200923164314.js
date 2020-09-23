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

    handleBitrate=(e)=>{
        console.log(this.state.settings)
    }
            
    render(){
        return(
            <button className='bitrate' onclick={this.handleBitrate}>Bitrate</button>
        )
    }
}