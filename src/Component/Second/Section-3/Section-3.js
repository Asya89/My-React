import React from 'react';

class Three extends React.Component {
    render() {
        return (
            <div className="three">
                <form action="/#">
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