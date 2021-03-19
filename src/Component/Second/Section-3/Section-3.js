import React from 'react';

class Three extends React.Component {
    render() {
        return (
            <div className="three">
                <div className="cucak">
                    <p>3D Art</p>
                    <ul>
                        <li>Modeling / PBR[procedural] Texturing</li>
                        <li>High Poly Zbrush sculpting</li>
                        <li>3D Rendering- and Environment Design</li>
                    </ul>
                </div>

                <form action="/#" className="forma">
                    <p>Contact me</p>
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