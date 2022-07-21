import React, { Component } from 'react';
import Image from './image';

var gallery = [{ src: "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", details: "Ice bubble" },
{ src: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80", details: "Dew Drop on branch" },
{ src: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg", details: "Burning Sun" },
{ src: "https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg", details: "Bright Deer" },
{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvV2vwQK6xT8xCLJg8Nl3N86vPyPeTYTnuA&usqp=CAU", details: "Nasa IXPE sent image" },
{ src: "https://media.vogue.fr/photos/5f58d72c0130d6888f87046e/2:3/w_2560%2Cc_limit/nasa-chandra_cartwheel-galaxy-.jpg", details: "Dazzling outer Space" }];

export default class Card extends Component {

    render() {
        return (
            <><div style={body}>
                <h1 style={{ margin:"1vh", textAlign: "center", paddingTop: "4vh", color: "#E8AA42" }}>Image Gallery by Shashank Rai</h1>
                <div id="container" style={container}>
                    {gallery.map((val) => {
                        return <Image src={val.src} details={val.details} />
                    })}
                </div>
            </div>

            </>
        )
    }
}
const container = {
    width: "66%",
    margin: "5% 18%",
    display: "flex",
    flexWrap: "wrap",
    color: "white"
}
const body = {
    margin: "0",
    padding: "5px",
    background: "url(https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80) fixed center",
    backgroundSize: "contain"
}

