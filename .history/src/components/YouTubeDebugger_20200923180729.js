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
        
    hb =(e)=>{
        this.setState({
          settings: {
            bitrate: 12
          }
        })
    }

    hr = (e) => {
        this.setState({
          settings: {
            video: {
              resolution: ""
            }
          }
        })
    }
    handleClick=(e)=>{
        if (e.target.className === 'bitrate') {
            this.setState({
                settings: {
                bitrate: 12
                }
            })
        } else if (e.target.className === 'resolution') {
            this.setState({
                settings:{
                    video:{
                        resolution: ""
                    }
                }
            })
        }
        
    }
            
    render(){
        return(<button className='bitrate' onClick={this.handleClick}>Bitrate</button>)
    }
}