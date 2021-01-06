import React from 'react';
import ProgressBar from 'react-animated-progress-bar';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Title,
  TextWrapper,
  Subtitle,
  Paragraph,
  Name,
  CvBtnWrapper,
} from './ExpertiseElements';
import CV from '../../images/CV_Cristian_Vasile_2021.pdf';
const Expertise = () => {
  return (
    <>
      <InfoContainer id='expertise'>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Title>
                  Top <span className='styled'>expertise</span>
                </Title>
                <Subtitle>Skills:</Subtitle>
                <Paragraph>
                  My knowledge has provided me with the innovative and technical
                  skills necessary to successfully provide any company or client
                  with multifaceted technical solutions across a wide range of
                  software platforms.
                </Paragraph>
              </TextWrapper>
              <CvBtnWrapper>
                <a href={CV} target='_blank' rel='noreferrer'>
                  DOWNLOAD MY RESUME
                </a>
              </CvBtnWrapper>
            </Column1>
            <Column2>
              <Name>HTML5</Name>
              <ProgressBar
                width='700px'
                height='10px'
                rect
                fontColor='gray'
                percentage='91'
                rectPadding='1px'
                rectBorderRadius='20px'
                trackPathColor='transparent'
                bgColor='#6DB454'
                trackBorderColor='grey'
              />

              <Name>CSS3</Name>
              <ProgressBar
                width='700px'
                height='10px'
                rect
                fontColor='gray'
                percentage='83'
                rectPadding='1px'
                rectBorderRadius='20px'
                trackPathColor='transparent'
                bgColor='#6DB454'
                trackBorderColor='grey'
              />

              <Name>Javascript</Name>
              <ProgressBar
                width='700px'
                height='10px'
                rect
                fontColor='gray'
                percentage='86'
                rectPadding='1px'
                rectBorderRadius='20px'
                trackPathColor='transparent'
                bgColor='#6DB454'
                trackBorderColor='grey'
              />

              <Name>ReactJS</Name>
              <ProgressBar
                width='700px'
                height='10px'
                rect
                fontColor='gray'
                percentage='77'
                rectPadding='1px'
                rectBorderRadius='20px'
                trackPathColor='transparent'
                bgColor='#6DB454'
                trackBorderColor='grey'
              />

              <Name>SQL / PLSQL</Name>
              <ProgressBar
                width='700px'
                height='10px'
                rect
                fontColor='gray'
                percentage='78'
                rectPadding='1px'
                rectBorderRadius='20px'
                trackPathColor='transparent'
                bgColor='#6DB454'
                trackBorderColor='grey'
              />

              <Name>Wordpress</Name>

              <ProgressBar
                width='700px'
                height='10px'
                rect
                fontColor='gray'
                percentage='80'
                rectPadding='1px'
                rectBorderRadius='20px'
                trackPathColor='transparent'
                bgColor='#6DB454'
                trackBorderColor='grey'
              />

              <Name>GIT</Name>

              <ProgressBar
                width='700px'
                height='10px'
                rect
                fontColor='gray'
                percentage='96'
                rectPadding='1px'
                rectBorderRadius='20px'
                trackPathColor='transparent'
                bgColor='#6DB454'
                trackBorderColor='grey'
              />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Expertise;
