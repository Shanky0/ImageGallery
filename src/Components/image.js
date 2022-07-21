import React, { Component } from 'react';

export default class Image extends Component {
    myFun = (e) => {
        e.currentTarget.style.transform = "scale(1.5)"
    }
    fun = (e)=>{
        e.currentTarget.style.transform = null;
    }

    render() {
        let src = this.props.src;
        let details = this.props.details;
        return (
            <>
                <div className="content" onMouseOver={this.myFun} onMouseLeave={this.fun} style={content}>
                    <img src={src} alt={details} style={image} />
                    <h1 style={h}>{details}</h1>
                </div>
            </>
        )
    }
}
const image = {
    width: "100%",
    height: "100%"
}
var content = {
    width: "20%",
    height: "30vh",
    border: "1px solid",
    boxShadow: "7px 7px 28px 14px rgba(0,0,0,0.75)",
    margin: "3rem 1rem ",
    cursor: "pointer",
}
const h = {
    fontSize: "16px",
    textAlign: "center"
}
// const hover = {
//     transform:"scale(1.06)",
// }