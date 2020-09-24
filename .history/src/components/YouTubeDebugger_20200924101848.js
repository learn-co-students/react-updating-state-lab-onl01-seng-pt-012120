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
    // bitrateButton=()=>{
    // <button className='bitrate' onClick={this.hb}>Bitrate</button>
    // }
    // resolutionButton=()=>{
    //   <button className='resolution' onClick={this.hr}>Resolution</button>
    // }
        
    hb =(e)=>{
        this.setState({
          ...this.state,
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        })
    }
    hr =(e)=>{
        this.setState({
          ...this.state,
          settings: {
            ...this.state.settings,
            video: {
              resolution: '720p'
            }
          }
        })
    }
    
            
    render(){
        return(
        <div>
          <button className='bitrate' onClick={this.hb}>Bitrate</button>
          <button className='resolution' onClick={this.hr}>Resolution</button>
        </div>
        )
    }
}