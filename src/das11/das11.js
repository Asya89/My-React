import React, { Component } from 'react';

// export default class Count extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }
//     addfunc = (arg) => {
//         let point;
//         if (arg === "decrement") {
//             point=+1
//         }
//         if (arg === "increment") {
//             point=-1        }
//         this.setState({
//             count: this.state.count + point
//         })
//     }
//     render() {
//         return (
//             <>
//                 <button onClick={() => this.addfunc("increment")}>pakasacnel</button>
//                 <button onClick={() => this.addfunc("decrement")}>avelacnel</button>
//                 <p>{this.state.count}</p>
//             </>
//         )
//     }
// }



// class Das12 extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             text: "Vernagir"
//         }
//         this.hendelClick=this.hendelClick.bind(this)
//     }


//     hendelClick(){
//         this.setState({
//             text:"aylbar"
//         })
//     }
//     render() {
//         return (
//             <>
//                 <h1>{this.state.text}</h1>
//                 <button onClick={this.hendelClick}>sexmel</button>
//             </>
//         )
//     }
// }
// export default Das12


// class Das12 extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             text: false
//         }
//         this.hendelClick=this.hendelClick.bind(this)
//     }


//     hendelClick(){
//         this.setState(state=>({
//             text: !state.text
//         }))
//     }
//     render() {
//         if(this.state.text){

//             return (
//                 <>
//                     <h1>bar</h1>
//                     <button onClick={this.hendelClick}>sexmel</button>
//                 </>
//             )
//         }else{
//             return(
//                 <button onClick={this.hendelClick}>sexmel</button>
//             )
//         }
//     }
// }
// export default Das12

class Das12 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input: ""
        }
        this.hendelChange = this.hendelChange.bind(this)
    }


    hendelChange(arg) {
        this.setState({
            input: arg.target.value
        })
    }
    render() {
        return(
        <>
            <input onChange={this.hendelChange} />
            <p>{this.state.input}</p>
        </>
        )
    }
}
export default Das12
