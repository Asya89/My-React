import React from 'react'
import Nkar from './Ararat.png'

class Text extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "I`m an expert 3D Modeling"
        }
        this.hendelClick = this.hendelClick.bind(this)
    }
    hendelClick(){
        this.setState({
                text: "ես 3D մոդելավորման մասնագետ եմ"
            })
        
    }
    render() {
        
        return (
            <div className="text">
                <div className="text1">
                    <img src={Nkar} alt="nkar" />
                    <p>Hello I`m Karen Petrosyan</p>
                    <h1>{this.state.text}</h1>
                    <button onClick={this.hendelClick()}>see my work</button>
                </div>
            </div>
        )
            
            
        
    }
}
export default Text;