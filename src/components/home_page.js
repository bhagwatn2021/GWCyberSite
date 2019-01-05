import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ImageOne from "/Users/Neel/GWCyberSite/images/ImageOne.jpg";
import ImageTwo from "/Users/Neel/GWCyberSite/images/ImageTwo.jpg";
import slides from './slides'
import Slide from "./slide";


export default class HomePage extends Component {
  constructor(props) {
      super(props);

      this.state = {
        slides: [
            <Slide onClick={this.changeSlides()} src={ImageOne} text="GW Cyber's slide 1" />,
            <Slide onClick={this.changeSlides()} src={ImageTwo} text="GW Cyber's slide 2" />
        ],
       displaySlide: slides[0]
      };
  }
  changeSlides(){
    this.state.displayIndex += 1;

    if(this.state.displayIndex == this.state.slides.length){
      this.state.displayIndex = 0;
    }

    else if(this.state.displayIndex == -1){
      this.state.displayIndex = this.state.slides.length-1;
    }

    this.setState({
      displayIndex: 0,
      displaySlide: this.state.slides[displayIndex]
    });
  }

  render() {
    return (
      <div>
      <h1>
      GW Cyber
      </h1>
     <div>
     <Link to="/about" className="btn ">About Us</Link>
     <Link to="/events" className="btn ">Events</Link>
     <Link to="/eboard" className="btn ">E-board</Link>
     <Link to="/blog" className="btn ">Blog</Link>
      </div>
      <div>
      <Slide src={this.state.displaySlide} key={this.state.displayIndex} />
       </div>
      </div>
    );
  }
}
