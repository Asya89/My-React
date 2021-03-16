import React from 'react'
import './first.css'
import Topmenu from './Header/Header'
import Buttonmenu from './Text/Text'

class Head extends React.Component {
    render() {
        return (
            <div className="glux">
               <Topmenu/>
               <Buttonmenu/>
            </div>
        )
    }
}
export default Head;