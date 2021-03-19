import React from 'react';

class Three extends React.Component {
    render() {
        return (
            <div className="three">
                <div className="d cucak">
                    <p>3D Art</p>
                    <ul>
                        <li>Modeling / PBR[procedural] Texturing</li>
                        <li>High Poly Zbrush sculpting</li>
                        <li>3D Rendering- and Environment Design</li>
                    </ul>
                </div>

                <form action="/#" className="d forma">
                    <h3>Contact me</h3>
                    <label>Name</label><input type="text" /><br />
                    <label>Surename</label><input type="text" /><br />
                    <label>Email</label><input type="email" /><br />
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default Three;