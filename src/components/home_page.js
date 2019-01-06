import React, { Component } from 'react';
import { Link } from "react-router-dom";
import homepageslides from './homepageslides'
import Slide from "./slide";


export default class HomePage extends Component {
  constructor(props) {
      super(props);

      this.state = {
       slides: homepageslides.slides,
       displaySlide: homepageslides.slides[0]
      };

  }
  changeSlides(){
    const nextIndex = this.state.displaySlide.index + 1;

    if(nextIndex == this.state.slides.length){
      this.setState({
        displaySlide: this.state.slides[0]
      });
    }

    else if(nextIndex == -1){
      this.setState({
        displaySlide: this.state.slides[this.state.slides.length-1]
      });
    }
    else{
      this.setState({
        displaySlide: this.state.slides[nextIndex]
      });
    }
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
      <button onClick={() => this.changeSlides()}>
        <Slide  property={this.state.displaySlide} key={this.state.displaySlide.index} />
      </button>
      </div>
      </div>
    );
  }
}
