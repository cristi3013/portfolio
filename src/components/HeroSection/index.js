import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi, I’m Cristian Vasile</HeroH1>
        <HeroH2>
          I’m a web developer, passionate about creating and developing web
          interfaces and applications
        </HeroH2>

        <HeroBtnWrapper>
          <Button
            to='about'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Get Started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
