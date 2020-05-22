import React, { useState } from 'react';

import Button from '../button';
import { IconArrow } from '../icons';

import './index.scss';

export default function Carousel({ className, images, title, ...props }) {
  const [mainImg, setMainImg] = useState(0);
  const [prevImg, setPrevImg] = useState(images.length - 1);
  const [nextImg, setNextImg] = useState(1);

  const scrollRight = () => {
    setPrevImg(mainImg);
    setMainImg(nextImg);
    if (nextImg >= images.length - 1) {
      setNextImg(0);
    } else {
      setNextImg(nextImg + 1);
    }
  };

  const scrollLeft = () => {
    setNextImg(mainImg);
    setMainImg(prevImg);

    if (prevImg === 0) {
      setPrevImg(images.length - 1);
    } else {
      setPrevImg(prevImg - 1);
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 37) {
      scrollLeft();
    } else if (e.keyCode === 39) {
      scrollRight();
    }
  };

  return (
    <div className="gallery-container w-100" onKeyUp={handleKeyUp}>
      <div className="side-slide left-slide h-100">
        <div
          className="side-view img-container left-view w-100"
          onClick={scrollLeft}
          style={{ 'background-image': `url(${images[prevImg]})` }}
        />
        <Button className="nav-left nav-btns p-0" onClick={scrollLeft}>
          <IconArrow className="left-arrow" />
        </Button>
        <div className="title">{title}</div>
      </div>
      <div className="main-view img-container mx-4 h-100" style={{ 'background-image': `url(${images[mainImg]})` }} />
      <div className="side-slide right-slide h-100">
        <div className="title">{title}</div>
        <Button className="nav-right nav-btns p-0" onClick={scrollRight}>
          <IconArrow className="right-arrow" />
        </Button>
        <div
          className="side-view img-container right-view w-100"
          onClick={scrollRight}
          style={{ 'background-image': `url(${images[nextImg]})` }}
        />
      </div>
    </div>
  );
}
