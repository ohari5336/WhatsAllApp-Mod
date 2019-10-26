import React, {Component} from 'react'
import OverlayContainer from './Components/OverlayContainer'

class AppContainer extends Component {
    render() {
        return(
            <div>
                <OverlayContainer demoMode={false}/>
            </div>

        )
    }
}

export default AppContainer