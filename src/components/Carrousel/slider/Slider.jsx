import React, { Children, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Slider.module.css'
import { Link } from "react-router-dom";
import { VideoCard } from "../videoCard/VideoCard";
import './Slider.module.css'
import Videos from "../../../dados/videos.json"
import { render } from "react-dom";
const ListaVideos = Videos.videos

export const MultipleItems = ({children,videos,categoria})=>{
  console.log(categoria.nome)
  console.log(videos)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }

    return(
        <div className='slides'>
        <Slider {...settings}>
          {videos.map(video => <li key={video.id}><VideoCard video={video}></VideoCard></li>)}
        </Slider>
      </div>
  )}


