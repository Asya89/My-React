import React from 'react'
import Nkar from './Ararat.png'

class Text extends React.Component {
    render() {
        return (
            <div className="text">
                <div className="text1">
                    <img src={Nkar} alt="nkar"/>
                <p>Hello I`m Karen Petrosyan</p>
                <h1> I`m an expert 3D Modeling </h1>
                <button>see my work</button>
                </div>
            </div>
          
        )
    }
}
export default Text;