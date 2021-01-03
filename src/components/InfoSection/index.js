import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Title,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  ImgWrap,
  Img,
  SocialMediaWrapper,
  SocialImg,
  BarColumn,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  paragraph1,
  paragraph2,
  paragraph3,
  avatar,
  alt1,
  linkedIn,
  alt2,
  gitHub,
  alt3,
  instagram,
  alt4,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Title>
                  More <span className='styled'>about</span> me
                </Title>
                <Paragraph1 lightText={lightText}>{paragraph1}</Paragraph1>
                <Paragraph2 lightText={lightText}>{paragraph2}</Paragraph2>
                <Paragraph3 lightText={lightText}>{paragraph3}</Paragraph3>
              </TextWrapper>
            </Column1>
            <BarColumn>1</BarColumn>
            <Column2>
              <ImgWrap>
                <Img src={avatar} alt={alt1} />
                <SocialMediaWrapper>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/cristian-vasile-09350a17a/'
                  >
                    <SocialImg src={linkedIn} alt={alt2} />
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/cristi3013'
                  >
                    <SocialImg src={gitHub} alt={alt3} />
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.instagram.com/cristi3013/'
                  >
                    <SocialImg src={instagram} alt={alt4} />
                  </a>
                </SocialMediaWrapper>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
