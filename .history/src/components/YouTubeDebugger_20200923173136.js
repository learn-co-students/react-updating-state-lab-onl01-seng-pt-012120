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
        switch (e.target.className) {
            case 'bitrate':
                this.setState({
                  settings: {
                    bitrate: 12
                  }
                })
                break;
                
            case 'resolution':
                this.setState({
                    settings:{
                        video:{
                            resolution: ""
                        }
                    }
                })
                break;

            default:
                break;
        }
        
    }
            
    render(){
        return([<button className='bitrate' onClick={this.handleClick}>Bitrate</button>,<button className='resolution' onClick={this.handleClick}>Resolution</button>])
    }
}