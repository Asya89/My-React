import React, { Component } from 'react';
import Div from './Divs/Div'

class Two extends Component {
    render() {
        return (
            <div className="two">
                <Div
                    paragraf="Hayk"
                    nkar="img/1.png"
                />
                <Div
                    paragraf="Asya"
                    nkar="img/2.png"
                />
            </div>
        )
    }
}

export default Two;