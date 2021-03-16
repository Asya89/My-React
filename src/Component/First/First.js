import React from 'react'
import './first.css'

class Head extends React.Component {
    render() {
        return (
            <div className="glux">
                <div className="menu">
                    <div className="logo">
                        <h2>PORTFOLIO</h2>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/#">Home</a></li>
                            <li><a href="/#">Portfolio</a></li>
                            <li><a href="/#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="text">
                    <div className="text1">
                    <p>Hello I`m Karen Petrosyan</p>
                    <h1> I`m an expert 3D Artist kam Modeling </h1>
                    <button>see my work</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Head;