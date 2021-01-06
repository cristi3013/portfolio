import React from 'react';
import Icon1 from '../../images/Icon1.svg';
import Icon2 from '../../images/Icon2.svg';
import Icon3 from '../../images/Icon3.svg';
import Icon4 from '../../images/Icon4.svg';
import {
  InfoContainer,
  Title,
  ProjectWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectTitle,
  ProjectDescription,
} from './WorkElements';

const MyWork = () => {
  return (
    <InfoContainer id='mywork'>
      <Title>
        Some of <span className='styled'>my</span> projects
      </Title>
      <ProjectWrapper>
        <ProjectCard>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://elegant-kirch-a10126.netlify.app/'
          >
            <ProjectIcon src={Icon1} />
          </a>
          <ProjectTitle>Kappa Website</ProjectTitle>
          <ProjectDescription>
            I developed from scratch the Kappa London’s internship page, using
            various React libraries and functionalities
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/cristi3013/covid-19-tracker.github.io'
          >
            <ProjectIcon src={Icon2} />
          </a>
          <ProjectTitle>Covid-19 Tracker</ProjectTitle>
          <ProjectDescription>
            I built a React web application where you can see in real time the
            number of cases of Covid-19 around the world
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://tipstips.tips/'
          >
            <ProjectIcon src={Icon3} />
          </a>
          <ProjectTitle>Icebreakers</ProjectTitle>
          <ProjectDescription>
            I worked along-side designers and project managers in order to
            develop a Chrome-extension for Tinder
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={Icon4} />
          <ProjectTitle>Leica M6</ProjectTitle>
          <ProjectDescription>
            Presentation page for a newly up-coming professional DSLR camera.
            The page is created using solely HTML5 & CSS3
          </ProjectDescription>
        </ProjectCard>
      </ProjectWrapper>
    </InfoContainer>
  );
};

export default MyWork;
