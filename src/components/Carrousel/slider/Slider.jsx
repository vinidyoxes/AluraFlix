import React, { Children, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Slider.module.css'
import { Link } from "react-router-dom";
import { VideoCard } from "../videoCard/VideoCard";
import './Slider.module.css'


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <div className='slides'>
        <Slider {...settings}>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}


