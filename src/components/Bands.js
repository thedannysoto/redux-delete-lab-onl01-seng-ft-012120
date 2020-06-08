import React, { Component } from 'react'
import Band from './Band';


class Bands extends Component {
    render() {
        return (
            <ul>
                {this.props.bands.map((band, idx) => {
                    return <Band band={band} deleteBand={this.props.deleteBand}/>
                })}
            </ul>
        )
    }
}

export default Bands;