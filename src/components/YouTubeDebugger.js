// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super();
        //Define the initial state:
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        };
    }
    changeBirate = () => {
        this.setState({
            settings: { ...this.state.settings, 
                bitrate: 12
            }
        })

    }

    changeResolution = () => {
        this.setState({
            settings: { ...this.state.settings, 
                video: {
                    resolution: '720p'
                  }
            }
        })
    }

    render(){
        return(
            <div>
                
                <button className="bitrate" onClick={this.changeBirate}>{this.state.settings.bitrate} Birate</button>
                <button className='resolution' onClick={this.changeResolution}>{this.state.settings.video.resolution} Video Resolution </button>
            </div>
        );
    }

}
export default YouTubeDebugger;