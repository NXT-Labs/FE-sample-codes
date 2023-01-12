import Image from 'next/image'
import React, { Component } from 'react'
import Slider from 'react-slick'
import GameCard from './GameCard'

export default class GameSlider extends Component {
  render() {
    const settings = {
      centerMode: false,
      centerPadding: '0%',
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 900,
          settings: {
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 700,
          settings: {
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 610,
          settings: {
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            centerMode: true,
            centerPadding: '90px',
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 440,
          settings: {
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 425,
          settings: {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 380,
          settings: {
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 350,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 349,
          settings: {
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1,
          },
        },
      ],
    }
    return (
      <div className="game-slider-section">
        <h3 className="featured-heading">
          <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/games-icon.svg"
            alt="players icon"
            width={'50px'}
            height={'28px'}
          />
          GAMES
        </h3>
        <p className="sub-title">
          Select a game and then choose how you want to play.
        </p>

        {/* Slider starts here */}
        <div className="game-slider">
          <Slider {...settings}>
            <div className="slider-card">
              <GameCard />
            </div>
            <div className="slider-card">
              <GameCard />
            </div>
            <div className="slider-card">
              <GameCard />
            </div>
            <div className="slider-card">
              <GameCard />
            </div>
            <div className="slider-card">
              <GameCard />
            </div>
            <div className="slider-card">
              <GameCard />
            </div>
            <div className="slider-card">
              <GameCard />
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
