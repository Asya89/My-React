import React from 'react';
import './third.css'

class Foot extends React.Component {
    render() {
        return (
            <div className="foot">
                <div className="div1">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-youtube-square"></i>
                    <i className="fas fa-envelope-square"></i>
                </div>
                <div className="div2">
                    <p>Copyright &copy 2021</p>
                </div>
            </div>
        )
    }
}

export default Foot;