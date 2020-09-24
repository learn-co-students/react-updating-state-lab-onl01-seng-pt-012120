// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component{

    constructor(props){
        super(props)
        this.state = {
            "errors": [] ,
            "settings": {
              "bitrate": 8 ,
                "video": {
                  "resolution": "1080p" 
                } 
            } ,
            "user": [null]
        }
    }
    render(){
        return(
            <button></button>
        )
    }
}