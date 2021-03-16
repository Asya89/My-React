import React from 'react'


class Header extends React.Component {
    render() {
        return (
           
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
                
           
        )
    }
}
export default Header;