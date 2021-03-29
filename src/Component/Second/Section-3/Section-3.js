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
                    <table>
                        <thead>
                        <tr>
                            <td><label>Name</label></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td><label>Surename</label></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td><label>Email</label></td>
                            <td><input type="email" /></td>
                        </tr>
                        </thead>
                    </table>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default Three;