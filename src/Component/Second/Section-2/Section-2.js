import React, { Component } from 'react';
import Div from './Divs/Div'

class Two extends Component {
    render() {
        return (
            <div className="two">
                <Div
                    nkar="img/1.png"
                />
                <Div
                    nkar="img/2.png"
                />
                <Div
                    nkar="img/3.jpg"
                />
                <Div
                    nkar="img/5.jpg"
                />
                <Div
                    nkar="img/4.jpg"
                />
                <Div
                    nkar="img/6.jpg"
                />
            </div>
        )
    }
}

export default Two;