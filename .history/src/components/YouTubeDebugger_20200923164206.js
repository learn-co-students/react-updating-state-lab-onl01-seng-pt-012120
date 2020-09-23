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
        console.log(this.state)
        if (e.class === 'bitrate') {
            this.setState({
                settings:{
                    bitrate: 12
                }
            })
        }
    }
            
    render(){
        return(
            <button className='bitrate' onclick={this.handleBitrate}>Bitrate</button>
        )
    }
}