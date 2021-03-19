import React, {Component} from 'react';
import './second.css'
import './Section-1/Section-1.css'
import './Section-2/Section-2.css'
import './Section-3/Section-3.css'
import Sec1 from './Section-1/Section-1'
import Sec2 from './Section-2/Section-2'
import Sec3 from './Section-3/Section-3'

export default class Sec extends Component {
    render() {
        return (
            <div className="sec">
                <Sec1/>
                <Sec2/>
                <Sec3/>
            </div>
        )
    }
}
