import React, { Component } from 'react'

export default class Div extends Component {
    constructor(props){
        super(props);
      
    }
    
    render() {
        const a = this.props.paragraf
        
        return (

            <div className="nkar">
                <p>{a}</p>
                <img src={this.props.nkar} alt=""/>
            </div>

        )
    }
}
